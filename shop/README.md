# Beekonz Shop — Nueva tienda en línea

Proyecto Astro + Tailwind v4. Sitio 100% estático para Hostinger (public_html).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run build` | Genera el sitio en `dist/` → subir a `public_html` |
| `npm run preview` | Previsualiza el build localmente |
| `./deploy.sh` | Build + rsync por SSH (requiere credenciales en `.env`) |

## Deploy a Hostinger

**Opción manual (como antes):**
1. `npm run build`
2. Sube TODO el contenido de `dist/` a `public_html` (no la carpeta dist, su contenido).

**Opción automática:** agrega a `shop/.env`:
```
HOSTINGER_SSH_HOST=...
HOSTINGER_SSH_USER=...
```
y corre `./deploy.sh`. Activa SSH en hPanel → Avanzado → SSH Access.

## Estructura

- `src/data/store.ts` — TODO el contenido editable: precios, Stripe links, FAQ, stats, testimonios, packs, face tracking.
- `src/pages/index.astro` — landing completa.
- `src/pages/seguimiento-pedidos.astro` — embed ClickUp (**PENDIENTE: reemplazar URL del iframe por la real del sistema de Juan**).
- `public/images/` — fotos de producto.
- `assets-backup/` — backup de las imágenes de la tienda anterior.

## Pendientes

- [ ] Iframe real de ClickUp en seguimiento-pedidos
- [ ] Logo oficial SVG cuando exista (hoy es favicon emoji)
- [ ] Definir deploy SSH vs manual con Juan
