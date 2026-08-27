# Deploy Automatizado — Beekonz Shop

Fecha: 2026-08-27

## Resumen
Script de deploy automatizado que construye el proyecto Astro y sube todos los archivos a Hostinger vía API TUS (resumable upload).

## Uso

```bash
cd ~/projects/beekonz/shop && bash deploy.sh
```

## Qué hace

1. Carga variables de entorno desde `../.env` (HOSTINGER_API_TOKEN)
2. Ejecuta `npm run build` (genera `dist/`)
3. Para cada archivo en `dist/`:
   - Genera URL de upload vía Hostinger CLI
   - Crea upload TUS (POST 201)
   - Sube archivo (PATCH 204)
4. Muestra resumen: archivos subidos vs fallidos

## Requisitos

- `HOSTINGER_API_TOKEN` en `.env`
- `python3` para parsear JSON
- `curl` para uploads
- Hostinger CLI en `/tmp/hostinger` (se descarga automáticamente si no existe)

## Configuración

| Variable | Descripción |
|----------|-------------|
| `HOSTINGER_API_TOKEN` | Token de API de Hostinger |
| `DOMAIN` | beekonz.shop (hardcoded) |
| `USERNAME` | u737387249 (hardcoded) |

## Resultados

- **Primera prueba**: 24 archivos subidos, 0 fallidos
- **Tiempo**: ~5 minutos para 24 archivos
- **HTTP 200** verificado en https://beekonz.shop

## Archivos

- `~/projects/beekonz/shop/deploy.sh` — Script principal
- `~/projects/beekonz/shop/.env` — Variables (no commitado)

## Referencias

- [[Renovación Tienda en Línea Beekonz — 2026-08-27]]
- [[SOP-Obsidian-Docs]]
