# Hero con Modelo 3D Real (Three.js) — 2026-08-31

Fecha: 2026-08-31

## Resumen
El hero de la landing usaba una imagen estática (`hero-tracker-CAzRrDY8.jpg`) con animación CSS de flotación (`float`), no un modelo 3D real. Juan no quedó satisfecho porque en el proyecto Lovable anterior (`juaniconn-precision-vr` en GitHub, ahora público) sí existía un canvas Three.js real que renderizaba y rotaba el modelo `tracker.glb`. Se portó esa lógica de React Three Fiber a Three.js vanilla para integrarla en el stack actual (Astro, sin React) y se verificó con Playwright que el modelo carga y gira en tiempo real.

## Hallazgos

### Proyecto Lovable anterior (referencia)
- Repo: `github.com/Juaniconn/precision-vr` (clonado a `/tmp/juaniconn-precision-vr` para inspección)
- Stack: Vite + React + `@react-three/fiber` + `@react-three/drei` + `three`
- Componente clave: `src/components/Tracker3D.tsx`
  - `useGLTF` carga `/models/tracker.glb`
  - `useFrame` rota el grupo en Y (`rotation.y += delta * 0.35`)
  - Ajusta metalness/roughness de materiales, `envMapIntensity`
  - Luces: ambient + directional (key) + directional rim dorado (#FF9D00) + spotlight (#FFB347)
  - `<Bounds fit clip observe>` centra y escala el modelo automáticamente
  - `<ContactShadows>` + `<Environment preset="city">` para sombra de contacto y reflejos
  - `ThreeErrorBoundary` con fallback a imagen estática si el modelo falla

### Proyecto actual (Astro, sin React)
- No había ninguna dependencia de `three` instalada.
- El hero (`src/pages/index.astro`, sección `#hero-3d-model`) solo mostraba `<img>` con `animation: float`.

## Implementación

1. **Instalado `three`** en `~/projects/beekonz/shop` (`npm install three`).
2. **Creado `src/scripts/tracker3d.ts`** — Three.js vanilla que replica el comportamiento del componente React:
   - `GLTFLoader` carga `/models/tracker.glb`
   - Centra y escala el modelo automáticamente (equivalente a `<Bounds fit>`)
   - Ajusta metalness/roughness de materiales igual que el original
   - Mismo esquema de luces (ambient, key light, rim light dorado, spotlight)
   - `PMREMGenerator` + `RoomEnvironment` para iluminación ambiental (equivalente a `<Environment preset="city">`)
   - `ShadowMaterial` en un plano como sombra de contacto
   - Rotación continua en Y, respeta `prefers-reduced-motion`
   - `IntersectionObserver` pausa el render cuando el hero sale de pantalla (ahorro de batería/CPU)
   - `ResizeObserver` mantiene el canvas responsive
   - Fallback: si el modelo falla en cargar, se mantiene visible la imagen estática (mismo patrón que `ThreeErrorBoundary`)
3. **Modificado `src/pages/index.astro`**: el contenedor `#hero-3d-model` ahora incluye `<script src="../scripts/tracker3d.ts">`; la imagen estática se marcó con clase `tracker3d-fallback` y se oculta vía JS cuando el canvas carga OK.

## Verificación (real, no asumida)

- `npm run build` → compila sin errores, 12 páginas generadas, `tracker3d.ts` bundleado (603 KB) e incluido en el JS final.
- Instalado Playwright + Chromium headless (no había navegador disponible en el entorno) para probar en un browser real:
  - `npm run preview` levantado en `localhost:4322`
  - Confirmado por JS en la página: `canvas` creado, clase `tracker3d-loaded` activa, imagen fallback oculta (`display: none`)
  - Capturado el `canvas.toDataURL()` crudo y dos screenshots separados por 2 segundos — los bytes son distintos entre sí, confirmando que el modelo **rota en tiempo real** dentro del canvas.
  - Análisis visual del recorte del panel: se confirma una forma 3D con iluminación cálida coherente con el `tracker.glb`, consistente con el diseño glassmorphism del panel (blur intencional del contenedor, no del render).

## Acciones recomendadas

- [x] Rescatar la lógica del hero 3D del repo Lovable anterior
- [x] Portar de React Three Fiber a Three.js vanilla (compatible con Astro)
- [x] Mantener fallback a imagen estática si el modelo falla
- [x] Verificar en navegador real (Playwright) que el modelo carga y gira
- [x] Build de producción sin errores
- [x] Deploy a producción (beekonz.shop) — 36/36 archivos subidos, 0 fallidos
- [x] Verificado en producción con Playwright: `hero-3d-model` carga el canvas correctamente en https://beekonz.shop

## Próximos pasos

- [ ] Verificar visualmente en beekonz.shop en producción desde mobile (la card 3D solo se muestra en `lg:` y superior — no aplica a mobile por diseño)
- [ ] Considerar code-splitting de `three` (el build advierte chunk >500KB) si el tiempo de carga del hero se siente lento
- [ ] Evaluar agregar controles de órbita (drag para rotar manualmente) si Juan lo pide más adelante

## Archivos modificados

- `shop/src/scripts/tracker3d.ts` (nuevo)
- `shop/src/pages/index.astro` (hero actualizado)
- `shop/package.json` / `package-lock.json` (dependencia `three` agregada)

## Referencias

- [[SOP-Obsidian-Docs]]
- [[2026-08-27-renovacion-tienda]]
- [[SOP-Deploy-Beekonz]]
- [[2026-08-31-fix-imagen-2d-y-centrado]]
