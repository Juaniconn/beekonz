# Renovación Tienda en Línea Beekonz — 2026-08-27

Fecha: 2026-08-27

## Resumen
Renovación total de la tienda en línea Beekonz. Se migró de una SPA React/Vite a Astro + Tailwind, se configuró deploy automatizado vía API de Hostinger, se creó base de datos para suscriptores/órdenes y se rescataron todos los assets del sitio anterior.

## Hallazgos

### Sitio anterior (Hostinger)
- **Framework**: React SPA con Vite
- **Archivos**: 49 elementos en `public_html`
- **Modelo 3D**: `tracker.glb` (353 KB) — rescatado
- **Imágenes**: 15+ archivos de producto, Face Tracking, ediciones especiales
- **Email**: 2 mailboxes (`clowna@` eliminada, `redes@` activa)
- **Base de datos**: Ninguna asignada a beekonz.shop
- **SSL**: Activo
- **Pagos**: Stripe Payment Links (4 packs + Face Tracking)

### Nuevo proyecto (`~/projects/beekonz/shop/`)
- **Framework**: Astro + Tailwind CSS v4
- **Páginas**: `/` (landing), `/seguimiento-pedidos`
- **Deploy**: Script `deploy.sh` vía API TUS de Hostinger
- **Base de datos**: `u737387249_beekonz_main` creada
- **Assets rescatados**: Modelo 3D, logos SVG, imágenes de producto

## Acciones recomendadas

- [x] Crear base de datos para suscriptores/órdenes
- [x] Rescatar modelo 3D `tracker.glb`
- [x] Rescatar imágenes faltantes (product_rose, logo SVG, logo light)
- [x] Configurar deploy automatizado
- [x] Eliminar mailbox `clowna@beekonz.shop`
- [ ] Integrar Stripe (API Keys ya en .env)
- [ ] Configurar ClickUp embed (pendiente URL y API Key)
- [ ] Diseñar esquema de BD (suscriptores, órdenes)
- [ ] Rediseño fuerte de la UI

## Próximos pasos

- [ ] Integrar Stripe Checkout o Payment Links dinámicos
- [ ] Crear tablas en base de datos (suscriptores, órdenes)
- [ ] Agregar página de seguimiento con ClickUp embed
- [x] Rediseñar hero con modelo 3D interactivo → ver [[2026-08-31-hero-modelo-3d-real]]
- [ ] Agregar sección de testimonios dinámica
- [ ] Configurar analytics

## Referencias

- [[SOP-Obsidian-Docs]]
- [[Smols-LSM6DSV]] (ficha técnica producto)
- [[Brand-Guidelines]]
- [[Content-Strategy]]
