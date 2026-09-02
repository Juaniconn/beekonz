# Propuesta de Diseño Superhumon-Inspired para Beekonz

**Fecha:** 2026-08-31
**Objetivo:** Rediseñar la tienda Beekonz aplicando el sistema de diseño Superhumon (editorial, premium, limpio) adaptado al branding burdeos/dorado de Beekonz.

---

## 1. Adaptación de Colores

El sistema Superhumon usa un esquema light con acentos profundos. Para Beekonz, mantenemos la estructura pero sustituimos los colores por la paleta de marca:

| Rol Superhumon | Color Original | Adaptación Beekonz | Uso |
|----------------|----------------|-------------------|-----|
| primary | `#1b1938` | `#2E0F12` (burdeos) | Fondos oscuros, header, footer |
| primary deep | `#0e0c1f` | `#1a0809` | Hover estados, acentos profundos |
| on primary | `#ffffff` | `#ffffff` | Texto sobre fondos oscuros |
| ink | `#292827` | `#2E0F12` | Texto principal (burdeos) |
| ink mute | `#73706d` | `#8b6b6e` | Texto secundario |
| ink faint | `#9a9794` | `#c9b3b5` | Texto terciario |
| canvas | `#ffffff` | `#ffffff` | Fondos de secciones |
| canvas soft | `#fafaf8` | `#F8F4F5` (rosa pálido) | Fondos alternos |
| surface violet soft | `#c9b4fa` | `#EAD08E` (dorado) | Acentos, badges, CTAs |
| surface teal deep | `#0e3030` | `#2E0F12` | Bandas de cierre |
| surface teal mid | `#155555` | `#5a1a1c` | Acentos intermedios |
| hairline | `#e8e4dd` | `#EAD08E` | Bordes sutiles |
| hairline dark | `#3f3a52` | `#2E0F12` | Bordes oscuros |
| on dark mute | `#bcbac9` | `#d4b8b9` | Texto sobre oscuro secundario |
| on dark faint | `#5a5772` | `#8b6b6e` | Texto sobre oscuro terciario |

---

## 2. Tipografía

**Superhumon:** Inter (sustituto de Super Sans VF)
**Beekonz ya usa:** Inter + Space Grotesk

Mantenemos la escala tipográfica de Superhumon pero con Space Grotesk para display:

| Rol | Fuente | Peso | Size | Letter Spacing |
|-----|--------|------|------|----------------|
| display-xxl | Space Grotesk | 700 | 64px | 0 |
| display-xl | Space Grotesk | 700 | 48px | -1.32px |
| display-lg | Space Grotesk | 600 | 28px | -0.63px |
| display-md | Space Grotesk | 600 | 22px | -0.315px |
| heading-lg | Inter | 600 | 20px | -0.4px |
| body-lg | Inter | 460 | 18px | -0.135px |
| body-md | Inter | 460 | 16px | 0 |
| body-strong | Inter | 540 | 18.72px | 0 |
| button-md | Inter | 540 | 16px | 0 |
| button-cap | Inter | 540 | 14px | 0 |
| caption | Inter | 460 | 14px | 0 |
| micro | Inter | 460 | 12px | 0 |

---

## 3. Componentes Adaptados

### Botón Primario (CTA dorado)
- **bg:** `#EAD08E` (dorado)
- **texto:** `#2E0F12` (burdeos)
- **radius:** 8px
- **padding:** 12px 20px
- **hover:** `#d4b87a`

### Botón Secundario (outline burdeos)
- **bg:** transparente
- **border:** 1px solid `#2E0F12`
- **texto:** `#2E0F12`
- **radius:** 8px
- **padding:** 12px 20px
- **hover:** `#2E0F12` bg, texto blanco

### Botón Oscuro (para bandas teal)
- **bg:** `#2E0F12`
- **texto:** `#ffffff`
- **radius:** 8px
- **padding:** 12px 20px

### Card de Producto
- **bg:** `#ffffff`
- **border:** 1px solid `#EAD08E`
- **radius:** 12px
- **padding:** 32px
- **hover:** sombra sutil + borde dorado más intenso

### Card de Precio Destacada
- **bg:** `#2E0F12` (burdeos)
- **texto:** `#ffffff`
- **radius:** 12px
- **padding:** 32px
- **acento:** `#EAD08E` para el precio

### Navbar
- **bg:** `#2E0F12` (burdeos sólido)
- **texto:** `#ffffff`
- **logo:** Beekonz blanco
- **links:** `#d4b8b9` → hover `#EAD08E`

### Footer
- **bg:** `#2E0F12`
- **texto:** `#d4b8b9`
- **links:** hover `#EAD08E`

### Badge/Tag
- **bg:** `#EAD08E`
- **texto:** `#2E0F12`
- **radius:** 9999px (pill)
- **padding:** 8px 16px

### Input
- **bg:** `#ffffff`
- **border:** 1px solid `#EAD08E`
- **radius:** 6px
- **padding:** 10px 12px
- **focus:** borde `#2E0F12`

---

## 4. Layout por Página

### 4.1 Landing Page (`/`)

**Hero (estilo editorial Superhumon):**
- Fondo: `#2E0F12` (burdeos oscuro) — full height
- Layout: grid 2 columnas (60/40)
- Izquierda: texto blanco con badge dorado, título display-xxl, subtítulo, CTAs
- Derecha: card con modelo 3D (glassmorphism sutil)
- Stats en fila inferior

**Sección "Cómo Funciona":**
- Fondo: `#ffffff`
- 3 pasos con cards centradas
- Iconos dorados

**Sección Productos:**
- Fondo: `#F8F4F5`
- Grid 4 columnas responsive
- Cards con hover lift

**Sección Testimonios:**
- Fondo: `#ffffff`
- Cards con quote

**Sección CTA Final:**
- Fondo: `#2E0F12` (banda burdeos)
- Texto blanco + botón dorado

### 4.2 Acerca de (`/acerca-de`)

- Hero: fondo burdeos, título display-xl, subtítulo
- Sección historia: fondo blanco, 2 columnas
- Stats: 3 cards centradas con números dorados
- Equipo/Valores: grid de cards

### 4.3 Nuestra Misión (`/nuestra-mision`)

- Hero: fondo burdeos, título centrado
- Pilares: 3 cards con iconos dorados
- Visión: card grande centrada

### 4.4 Productos (sección en landing)

- Grid 4 columnas
- Cards con imagen, nombre, precio, CTA
- Card Pro Pack destacada (fondo burdeos, texto blanco)

### 4.5 FAQ (`/faq`)

- Fondo blanco
- Acordeones con borde dorado
- Preguntas en burdeos, respuestas en texto oscuro

### 4.6 Contacto (`/contacto`)

- Formulario con inputs estilo Superhumon
- Info de contacto lateral

### 4.7 Páginas Legales (privacidad, políticas, términos, garantía)

- Fondo blanco
- Texto jerárquico con headings burdeos
- Contenido denso pero legible

### 4.8 Seguimiento de Pedidos (`/seguimiento-pedidos`)

- Embed ClickUp centrado
- Instrucciones claras

### 4.9 Especificaciones (`/especificaciones`)

- Tablas con bordes dorados
- Cards de specs

---

## 5. Espaciado y Formas

| Nombre | Valor | Uso |
|--------|-------|-----|
| section gap | 64px | Entre secciones |
| card padding | 32px | Interior de cards |
| element gap | 12px | Entre elementos inline |
| max content | 1200px | Ancho máximo contenedor |

**Border Radius:**
- xs: 4px (inputs)
- sm: 6px (buttons small)
- md: 8px (buttons)
- lg: 12px (cards)
- xl: 16px (cards grandes)
- full: 9999px (pills/badges)

---

## 6. Diferencias Clave vs Diseño Anterior

| Aspecto | Antes | Después (Superhumon) |
|---------|-------|---------------------|
| Hero | Imagen de fondo + overlay | Fondo burdeos sólido + card 3D |
| Navbar | Flotante transparente | Sólida burdeos |
| CTAs | Dorados con gradiente | Dorados sólidos, tight rounded |
| Cards | Glassmorphism | Blancas con borde dorado |
| Secciones | Todas oscuras | Alternas: blanco / burdeos |
| Tipografía | Space Grotesk + Inter | Misma, pero escala más editorial |
| Footer | 4 columnas oscuro | 1 columna burdeos sólido |

---

## 7. Implementación

Se implementará en:
- `src/styles/global.css` — tokens y estilos base
- `src/components/Header.astro` — navbar burdeos sólido
- `src/components/Footer.astro` — footer burdeos
- `src/pages/index.astro` — landing completa
- `src/pages/acerca-de.astro` — about page
- `src/pages/nuestra-mision.astro` — misión
- `src/pages/contacto.astro` — contacto
- `src/pages/faq.astro` — FAQ
- `src/pages/especificaciones.astro` — specs
- `src/pages/privacidad.astro` — legal
- `src/pages/politica-venta.astro` — legal
- `src/pages/politica-envios.astro` — legal
- `src/pages/garantia-reembolsos.astro` — legal
- `src/pages/terminos-condiciones.astro` — legal
- `src/pages/seguimiento-pedidos.astro` — tracking

---

**Creado por:** Hermes Agent
**Modelo:** meituan/longcat-2.0:free
**Fecha:** 2026-08-31
