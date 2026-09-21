# Beekonz Shop — Tienda en línea (v2)

Next.js 16 + Tailwind CSS 4 + React Three Fiber + Framer Motion.
Sitio 100% estático (export) para Hostinger — no requiere Node.js en el servidor.

> Migrado desde `shop-legacy-astro/` (Astro) el 2026-09-21.
> Historial completo de la v2: rama `backup/beekonz-2` en GitHub + `~/backups/beekonz-2-2026-09-21.bundle`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local en http://localhost:3000 |
| `npm run build` | Export estático a `out/` (HTML/CSS/JS plano) |
| `./deploy.sh` | Build + rsync por SSH a beekonz.shop (credenciales en `../.env`) |
| `./deploy.sh --dry-run` | Igual pero solo muestra qué subiría, no sube nada |

## Deploy a Hostinger

`./deploy.sh` hace todo: build + rsync de `out/` a `domains/beekonz.shop/public_html/`.
Preserva `.env.php` del servidor (credenciales del webhook).

## Estructura

- `app/` — 15 páginas (landing, FAQ, políticas, seguimiento, etc.)
- `components/` — secciones y componentes (Header, Hero, modelo 3D, etc.)
- `lib/data.ts` — contenido editable: precios, packs, FAQ
- `public/` — imágenes, logos, modelo 3D GLB
- `server/` — PHP de backend que vive en el hosting compartido:
  - `webhook.php` — Webhook de Stripe → ClickUp + email de confirmación
  - `invoice-template.php` — Plantilla de factura
  - `.env.php.example` — Estructura de credenciales (la real vive solo en el servidor)
- Docs de Next 16: `node_modules/next/dist/docs/` (esta versión tiene breaking changes)

## Notas

- Next 16: revisar `AGENTS.md` antes de tocar código (APIs distintas a versiones previas).
- El webhook PHP aún NO está desplegado en producción (verificado 2026-09-21).
- `shop-legacy-astro/` se puede borrar cuando quieras; su historial git está en el repo raíz.
