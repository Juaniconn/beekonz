# Fix: Imagen 2D residual y modelo 3D descentrado — 2026-08-31

Fecha: 2026-08-31

## Resumen
Después del deploy inicial del hero con modelo 3D real, Juan reportó dos problemas: (1) seguía apareciendo la imagen 2D del tracker (jpg) como fondo del hero y unos segundos como fallback en el panel derecho, y (2) el modelo 3D verdadero se veía descentrado/alejado dentro de su panel. Ambos corregidos y verificados en producción.

## Hallazgos

### 1. Imagen 2D todavía visible
Había DOS usos de `hero-tracker-CAzRrDY8.jpg` que no se habían eliminado en el cambio anterior:
- Como fondo decorativo de toda la sección hero (`opacity-30`, detrás del texto izquierdo).
- Como `<img class="tracker3d-fallback">` dentro de `#hero-3d-model`, visible unos segundos mientras el canvas/modelo cargaba (por eso Juan la veía "unos segundos").

### 2. Modelo 3D descentrado
Bug real en `tracker3d.ts`: el orden de operaciones era incorrecto.
```
model.position.sub(center)   // centra usando el bounding box SIN escalar
model.scale.setScalar(scale) // escala DESPUÉS
```
En Three.js, `scale` se aplica multiplicando toda la matriz local del objeto, incluyendo su posición. Al centrar primero y escalar después, el offset de posición quedaba multiplicado por el factor de escala, desplazando el modelo del centro visual (se veía "alejado").

## Fix aplicado

### `src/pages/index.astro`
- Eliminada la `<img>` de fondo del hero.
- Eliminado el `<img class="tracker3d-fallback">` con la foto del tracker. Reemplazado por:
  - Un spinner sutil (`tracker3d-loading`, `animate-spin`) mientras carga el modelo.
  - Un texto (`tracker3d-fallback`, oculto por default) que solo aparece si el modelo realmente falla en cargar — nunca la imagen plana.

### `src/scripts/tracker3d.ts`
- Corregido el orden: **escalar primero** (usando el bounding box sin escalar para calcular el factor), **luego centrar** (recalculando el bounding box ya escalado). Esto es lo que replica correctamente el comportamiento de `<Bounds fit>` de drei.
- Aumentado `targetSize` de 2.2 a 2.4 para que el modelo se vea más grande y prominente en el panel.
- Actualizado el manejo de estados: oculta el spinner al cargar OK; en error real, oculta el spinner y muestra el texto de fallback (nunca imagen).

## Verificación (real)

- Build local sin errores.
- Playwright contra `localhost:4323`: confirmado `heroBgImageStillPresent: false`, `fallbackVisible: false`, `canvasDisplay: block`, `loadedClass: true`.
- Screenshot completo analizado visualmente: modelo 3D centrado, ocupa la mayor parte del panel, sin imagen 2D detrás del texto izquierdo.
- Deploy a producción: 36/36 archivos subidos, 0 fallidos.
- Playwright contra `https://beekonz.shop` (producción real, no localhost): mismos resultados — sin imagen de fondo, sin fallback visible, canvas cargado.
- Screenshot de producción analizado visualmente: "el modelo 3D del tracker verde está bien posicionado dentro de su tarjeta [...] su tamaño es adecuado" y "no hay imagen 2D plana de fondo visible en el hero".

## Acciones recomendadas

- [x] Eliminar imagen de fondo del hero
- [x] Eliminar imagen de fallback del panel 3D (reemplazada por spinner + texto)
- [x] Corregir orden escalar→centrar en tracker3d.ts
- [x] Aumentar tamaño target del modelo (2.2 → 2.4)
- [x] Build sin errores
- [x] Verificar con Playwright en local
- [x] Deploy a producción (36/36, 0 fallidos)
- [x] Verificar con Playwright en producción (beekonz.shop)

## Próximos pasos

- [ ] Preguntar a Juan si el tamaño/posición actual le gusta o quiere ajustar más
- [ ] Si el modelo se ve "verde oscuro" en vez del color de branding esperado, revisar si los materiales del GLB necesitan tuning de color (no reportado como problema aún, solo observación del análisis visual)

## Referencias

- [[2026-08-31-hero-modelo-3d-real]]
- [[SOP-Obsidian-Docs]]
