#!/usr/bin/env bash
# Deploy Beekonz Shop (Next.js static export) a Hostinger vía rsync/SSH
# Uso: ./deploy.sh [--dry-run]
# Credenciales: ../.env (HOSTINGER_BEEKONZ_SSH_*)
set -uo pipefail
cd "$(dirname "$0")"

# Cargar .env
if [[ -f .env ]]; then
  source .env
elif [[ -f ../.env ]]; then
  source ../.env
fi

for var in HOSTINGER_BEEKONZ_SSH_HOST HOSTINGER_BEEKONZ_SSH_USER HOSTINGER_BEEKONZ_SSH_PASSWORD; do
  if [[ -z "${!var:-}" ]]; then
    echo "❌ Falta $var en .env"
    exit 1
  fi
done

PORT="${HOSTINGER_BEEKONZ_SSH_PORT:-22}"
REMOTE_DIR="domains/beekonz.shop/public_html"
DRY_FLAG=""
[[ "${1:-}" == "--dry-run" ]] && DRY_FLAG="--dry-run"

echo "🐝 Build (Next.js static export)..."
npm run build || exit 1

if [[ ! -d out ]]; then
  echo "❌ No existe out/ tras el build"
  exit 1
fi

echo "📦 Sincronizando out/ → $HOSTINGER_BEEKONZ_SSH_HOST:$REMOTE_DIR"

sshpass -p "$HOSTINGER_BEEKONZ_SSH_PASSWORD" rsync -rlptz --delete \
  $DRY_FLAG \
  --exclude '.env.php' \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  out/ "$HOSTINGER_BEEKONZ_SSH_USER@$HOSTINGER_BEEKONZ_SSH_HOST:$REMOTE_DIR/"

if [[ $? -eq 0 ]]; then
  echo ""
  echo "✅ Deploy completo: https://beekonz.shop"
  echo "   (se preserva .env.php del servidor)"
else
  echo "❌ Falló el rsync"
  exit 1
fi
