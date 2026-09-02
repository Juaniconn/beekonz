# 📋 PROYECTO BEEKONZ - RESUMEN COMPLETO

**Última actualización:** 31 de agosto de 2026
**Estado:** En desarrollo activo
**Modelo actual:** meituan/longcat-2.0:free → **Próximo:** claude-sonnet-4-20250514

---

## 🎯 VISIÓN GENERAL

**Beekonz** es una tienda en línea de trackers VR (Full Body Tracking) para la comunidad hispana. Vende trackers ultraligeros de 10g con +50h de batería, compatibles con SlimeVR y VRChat.

**Dominio:** https://beekonz.shop
**Stack:** Astro + Tailwind CSS + Hostinger
**Diseño:** Premium dark con branding burdeos/dorado

---

## 🎨 BRANDING OFICIAL

| Color | Código | Uso |
|-------|--------|-----|
| Burdeos Oscuro | `#2E0F12` | Fondos oscuros, texto principal, header |
| Rosa Pálido | `#F8F4F5` | Fondos claros, texto inverso |
| Dorado | `#EAD08E` | Acentos, botones CTA, hover, gradientes |

**Tipografía:**
- Títulos: Space Grotesk (font-display)
- Cuerpo: Inter (font-body)

**Assets:**
- Logo: `/images/Beekonz_White_Logo.png`
- FavIcon: `/favicon.svg` y `/favicon.ico`
- Modelo 3D: `/models/tracker.glb`
- 23 imágenes de producto en `/images/productos/`

---

## 💰 PRODUCTOS

| Producto | Precio | Link Stripe |
|----------|--------|-------------|
| Starter Pack (6 trackers) | $5,999 MXN | https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o |
| Advanced Pack (8 trackers) | $7,499 MXN | https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r |
| Pro Pack (10 trackers) | $8,999 MXN | https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p |
| Face Tracking | $2,499 MXN | https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u |

---

## 📁 ESTRUCTURA DEL PROYECTO

```
~/projects/beekonz/
├── .env                          # Credenciales (Hostinger, Stripe, ClickUp, SSH)
├── shop/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.astro      # Header flotante con mega menú (3 columnas)
│   │   │   └── Footer.astro       # Footer 4 columnas (Marca, Ayuda, Políticas, Productos)
│   │   ├── layouts/
│   │   │   └── Base.astro        # Layout base con SEO
│   │   ├── pages/
│   │   │   ├── index.astro       # Landing page premium (hero cinematográfico)
│   │   │   ├── acerca-de.astro   # Acerca de Beekonz
│   │   │   ├── nuestra-mision.astro
│   │   │   ├── contacto.astro
│   │   │   ├── faq.astro
│   │   │   ├── especificaciones.astro
│   │   │   ├── privacidad.astro
│   │   │   ├── politica-venta.astro
│   │   │   ├── politica-envios.astro
│   │   │   ├── garantia-reembolsos.astro
│   │   │   ├── terminos-condiciones.astro
│   │   │   └── seguimiento-pedidos.astro
│   │   ├── data/
│   │   │   └── store.ts          # Datos de productos, packs, FAQ, etc.
│   │   └── styles/
│   │       └── global.css        # Estilos globales + animaciones
│   ├── public/
│   │   ├── models/
│   │   │   └── tracker.glb       # Modelo 3D del tracker
│   │   ├── images/
│   │   │   ├── Beekonz_White_Logo.png
│   │   │   ├── hero-tracker-CAzRrDY8.jpg
│   │   │   └── productos/        # 23 imágenes de producto
│   │   ├── favicon.svg
│   │   └── favicon.ico
│   ├── deploy.sh                 # Script de deploy automatizado
│   └── package.json
├── Launches/
│   └── 2026-08-27-renovacion-tienda.md
├── SOPs/
│   ├── SOP-Deploy-Beekonz.md
│   └── SOP-Obsidian-Docs.md
└── Analytics/
    └── Beekonz-Database.md
```

---

## 🚀 DEPLOY

**Script:** `~/projects/beekonz/shop/deploy.sh`
**Método:** API TUS de Hostinger (upload resumible)
**Comando:** `cd ~/projects/beekonz/shop && bash deploy.sh`

**Hostinger:**
- Username: u737387249
- Domain: beekonz.shop
- Directorio: `/home/u737387249/domains/beekonz.shop/public_html`
- SSH: host 157.173.214.91, puerto 65002

---

## 🔌 INTEGRACIONES

### Stripe
- **Estado:** ✅ Configurado (modo producción)
- **Payment Links:** 4 links activos (3 packs + Face Tracking)
- **Webhook:** `https://beekonz.shop/webhook.php`
- **Evento:** `checkout.session.completed`
- **Función:** Crea tarea en ClickUp automáticamente

### ClickUp
- **Workspace:** Beekonz (9017841418)
- **Espacio:** Logistica (90173884263)
- **Lista:** Seguimientos Pedidos (901710483647)
- **Vista pública:** https://app.clickup.com/embed?v=8cr2nra-517
- **Estados:** pendiente → espera chips → fabricación → prueba → empacado → enviado → completado
- **Formato tarjeta:** `#{order_id} ✈️ {bandera} 📦`
- **Tags:** sensor (lsm6dsv/icm-45686) + cantidad (x6/x8/x10)

### Base de Datos MySQL
- **Host:** srv1571.hstgr.io
- **Nombre:** u737387249_beekonz_main
- **Usuario:** u737387249_beekonz_admin
- **Tablas:** `suscriptores`, `ordenes`

### Email (SMTP Hostinger)
- **Host:** smtp.hostinger.com
- **Puerto:** 465 (SSL)
- **Usuario:** redes@beekonz.shop
- **Función:** Envía invoice PDF al cliente cuando paga

---

## 📄 PÁGINAS DE LA TIENDA

| Página | URL | Estado |
|--------|-----|--------|
| Inicio | `/` | ✅ Landing page premium |
| Acerca de | `/acerca-de` | ✅ Hero + 3 cards + Stats |
| Nuestra Misión | `/nuestra-mision` | ✅ Card principal + 3 pilares |
| Contacto | `/contacto` | ✅ |
| FAQ | `/faq` | ✅ Interactivo |
| Especificaciones | `/especificaciones` | ✅ |
| Privacidad | `/privacidad` | ✅ |
| Política de Venta | `/politica-venta` | ✅ |
| Política de Envíos | `/politica-envios` | ✅ |
| Garantía y Reembolsos | `/garantia-reembolsos` | ✅ |
| Términos y Condiciones | `/terminos-condiciones` | ✅ |
| Seguimiento de Pedidos | `/seguimiento-pedidos` | ✅ Embed ClickUp |

---

## 🧭 HEADER (Mega Menú)

**Estilo:** Header flotante con backdrop-blur y rounded-full
**Logo:** Beekonz blanco
**Mega menú 3 columnas:**
1. **Productos:** Starter Pack, Advanced Pack, Pro Pack, Face Tracking, Crear mi Set
2. **Quiénes Somos:** Acerca de Beekonz, Nuestra Misión, Garantía y Devoluciones, Política de Privacidad, Términos y Condiciones
3. **Recursos:** FAQ, Seguimiento de Pedidos, Especificaciones Técnicas

**Social Icons:** Discord, TikTok, Instagram, Facebook
**Menú mobile:** Con animaciones

---

## 🦶 FOOTER

**4 columnas:**
1. **Marca:** Logo + tagline + descripción + redes sociales
2. **Ayuda:** Contacto, Seguimiento de Pedidos, Discord, Especificaciones
3. **Políticas:** Privacidad, Venta, Envíos, Garantía, Términos
4. **Productos:** Starter Pack, Advanced Pack, Pro Pack (links a Stripe)

---

## 🏠 LANDING PAGE (Hero)

**Estilo:** Cinematográfico premium
**Elementos:**
- Background image del tracker con opacidad
- Badge "Tracking VR de Nueva Generación"
- Título: "FULL BODY TRACKING SIN LÍMITES" con gradientes dorados
- Subtítulo con stats de 10g y +50h
- Botones: "Comprar Ahora" + "Cómo Funciona"
- Stats: 50,000+ Horas, 32 Estados, 12 Países, 100% Listo
- Contenedor 3D con badges "Modelo 3D" y "LSM6DSV · 35-45h"
- Card inferior: "Beekonz Pro Kit - 10 TRACKERS - $8,999"

---

## 🛠️ SKILLS INSTALADOS (213 total)

### Skills de UI/UX (5 principales)
1. **beautifului.dev** → `beautiful-mermaid` (componentes glassmorphism)
2. **beui.dev** → `beui` (animaciones fluidas)
3. **rareui.com** → `rareui` (componentes únicos animados)
4. **transitions.dev** → `transitions-dev` + `transitions-polish` (micro-interacciones)
5. **ui.shadcn.com** → `shadcn` (diseño consistente)

### Otros skills relevantes
- `framer-motion` → animaciones React
- `tailwind-design-system` → diseño con Tailwind
- `frontend-ui-engineering` → ingeniería frontend
- `web-design-guidelines` → guías de diseño web

### Plugins de Hermes
- **superpowers** (v6.3.0) → Framework de skills para desarrollo
- **ui-components** (beUI) → Componentes animados
- **transitions.dev** → Transiciones para agentes

---

## 🔗 LINKS IMPORTANTES

- **Tienda:** https://beekonz.shop
- **GitHub:** https://github.com/Juaniconn/beekonz
- **ClickUp Board:** https://app.clickup.com/embed?v=8cr2nra-517
- **Stripe Dashboard:** https://dashboard.stripe.com
- **Discord:** https://discord.gg/ekr3ERWJQ6

---

## 📊 MÉTRICAS DEL PROYECTO

| Métrica | Valor |
|---------|-------|
| Páginas migradas | 12 |
| Skills instalados | 213 |
| Commits hoy | 15+ |
| Assets migrados | 23 imágenes + 1 modelo 3D |
| Deploy exitoso | 35/35 archivos |

---

## ⚠️ PENDIENTES

1. **Refinar landing page premium** (el usuario no quedó satisfecho con el primer intento)
2. **Aplicar skills de UI/UX** de manera más profunda en el diseño
3. **Verificar que el modelo 3D rote correctamente** en el hero
4. **Optimizar SEO** y meta tags
5. **Probar en móvil** y ajustar responsive

---

## 📝 NOTAS IMPORTANTES

- **NO usar emojis como iconos** (usar SVG: Heroicons/Lucide)
- **cursor-pointer en todos los elementos clickeables**
- **Contraste de texto mínimo 4.5:1** en modo claro
- **Focus states visibles** para navegación por teclado
- **Respetar prefers-reduced-motion**
- **Responsive:** 375px, 768px, 1024px, 1440px
- **No coleccionar skills como stickers** → Instalar solo los que resuelven dolor actual

---

## 🔄 PRÓXIMOS PASOS

1. Cambiar a **claude-sonnet-4-20250514**
2. Leer este documento para contexto
3. Refinar la landing page premium con los skills instalados
4. Implementar animaciones de transitions.dev
5. Aplicar componentes de beui y rareui
6. Hacer deploy final

---

**Creado por:** Hermes Agent
**Perfil:** default
**Workspace:** ~/projects/beekonz/
