#!/usr/bin/env bash
# Deploy de Beekonz Shop a Hostinger vía API (TUS upload)
# Uso: ./deploy.sh
set -uo pipefail

cd "$(dirname "$0")"

# Cargar .env
if [[ -f .env ]]; then
  source .env
elif [[ -f ../.env ]]; then
  source ../.env
fi

if [[ -z "${HOSTINGER_API_TOKEN:-}" ]]; then
  echo "❌ Falta HOSTINGER_API_TOKEN en .env"
  exit 1
fi

HOST="https://developers.hostinger.com"
DOMAIN="beekonz.shop"
USERNAME="u737387249"
UPLOADER="/tmp/hostinger"

# Verificar que el CLI existe
if [[ ! -x "$UPLOADER" ]]; then
  echo "⚠️  Descargando Hostinger CLI..."
  curl -sL "https://github.com/hostinger/api-cli/releases/latest/download/hostinger-$(uname -s | tr '[:upper:]' '[:lower:]')-amd64.tar.gz" -o /tmp/hostinger-cli.tar.gz
  tar -xzf /tmp/hostinger-cli.tar.gz -C /tmp/
  chmod +x /tmp/hostinger
fi

echo "🐝 Build..."
npm run build

echo "📦 Preparando deploy de dist/ a $DOMAIN..."

# Contar archivos
FILE_COUNT=$(find dist -type f | wc -l)
echo "   $FILE_COUNT archivos para subir"

UPLOADED=0
FAILED=0

# Subir cada archivo
for file in $(find dist -type f); do
  # Ruta relativa dentro de dist/
  REL_PATH="${file#dist/}"
  SIZE=$(stat -c%s "$file" 2>/dev/null || echo 0)
  
  if [[ "$SIZE" -eq 0 ]]; then
    echo "   ⚠️  Saltando $REL_PATH (vacío)"
    continue
  fi
  
  # Generar URL de upload
  UPLOAD_DATA=$(HOSTINGER_API_TOKEN="$HOSTINGER_API_TOKEN" "$UPLOADER" hosting files generate-upload-url \
    --domain "$DOMAIN" \
    --username "$USERNAME" \
    --format json 2>/dev/null)
  
  URL=$(echo "$UPLOAD_DATA" | python3 -c "import sys,json; print(json.load(sys.stdin).get('url',''))" 2>/dev/null)
  AUTH_KEY=$(echo "$UPLOAD_DATA" | python3 -c "import sys,json; print(json.load(sys.stdin).get('auth_key',''))" 2>/dev/null)
  REST_AUTH=$(echo "$UPLOAD_DATA" | python3 -c "import sys,json; print(json.load(sys.stdin).get('rest_auth_key',''))" 2>/dev/null)
  
  if [[ -z "$URL" || -z "$AUTH_KEY" ]]; then
    echo "   ❌ Error generando URL para $REL_PATH"
    FAILED=$((FAILED + 1))
    continue
  fi
  
  # Paso 1: Crear upload
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "${URL}/${REL_PATH}?override=true" \
    -H "X-Auth: $AUTH_KEY" \
    -H "X-Auth-Rest: $REST_AUTH" \
    -H "Tus-Resumable: 1.0.0" \
    -H "Upload-Length: $SIZE" \
    -H "Upload-Offset: 0")
  
  if [[ "$HTTP_CODE" != "201" ]]; then
    echo "   ❌ Error creando upload para $REL_PATH (HTTP $HTTP_CODE)"
    FAILED=$((FAILED + 1))
    continue
  fi
  
  # Paso 2: Subir archivo
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X PATCH "${URL}/${REL_PATH}?override=true" \
    -H "X-Auth: $AUTH_KEY" \
    -H "X-Auth-Rest: $REST_AUTH" \
    -H "Tus-Resumable: 1.0.0" \
    -H "Content-Type: application/offset+octet-stream" \
    -H "Upload-Offset: 0" \
    --data-binary "@$file")
  
  if [[ "$HTTP_CODE" == "204" ]]; then
    UPLOADED=$((UPLOADED + 1))
    echo "   ✅ $REL_PATH"
  else
    echo "   ❌ Error subiendo $REL_PATH (HTTP $HTTP_CODE)"
    FAILED=$((FAILED + 1))
  fi
done

echo ""
echo "📊 Resumen: $UPLOADED subidos, $FAILED fallidos"
echo "🌐 https://$DOMAIN"
