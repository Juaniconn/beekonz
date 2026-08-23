# Discord — Auditoría completa 2026-08-22

Fecha: 2026-08-22 · Server: 𝙱𝚎𝚎𝚔𝚘𝚗𝚣 ✧˖°. · 89 miembros · ~41 online

## Resumen
Auditoría de actividad real (historial completo escaneado vía API) tras la reestructuración. El server está bien organizado pero sufre de sobre-oferta de canales para el nivel de actividad actual: 28 canales de texto, y solo 5 tienen mensajes humanos.

## Actividad real por canal (histórico completo)

| Canal | Msgs | Humanos | Último msg humano |
|---|---|---|---|
| 💬general | 37 | 11 autores | 2026-08-19 |
| 👋bienvenidos | 66 | 0 (solo bot) | — |
| sᴛᴀғғ-ᴄʜᴀᴛ | 32 | 1 | 2026-02-06 |
| 📬estado-de-pedidos | 16 | 2 | 2026-03-28 |
| 🖼️showcase-product | 3 | 1 | 2026-02-09 |
| 📜rules | 3 | 1 | 2026-01-26 |
| ⭐reviews-clientes | 2 | 1 | 2026-03-30 |
| 🆘soporte / ❓preguntas / 🥽vrchat / 💡sugerencias / 🎥clips-vr / 🎁sorteos / 💎vip-chat / 📦comprar-trackers / 🎉eventos / beta-testing / feedback / setups / dev-log / marketing×3 | **0** | 0 | nunca |

**Dato duro:** de 28 canales de texto, 17 nunca han recibido un solo mensaje. La conversación real vive casi exclusivamente en #general (11 autores de 89 miembros = 12% de participación).

## Hallazgos

### 1. Sobre-oferta estructural (el problema principal)
Con 88 miembros y 12% de participación, cada canal nuevo divide la poca actividad existente. Un canal vacío transmite "server muerto" más rápido que ningún otro factor. Recomendado: máximo 12–14 canales visibles hasta duplicar la actividad.

### 2. Canales que SOBRAN hoy (candidatos a fusionar/archivar)
- ❓preguntas → se pisa con 🆘soporte. FUSIONAR en soporte.
- 🥽vrchat (texto) → general ya cumple ese rol; clips-vr cubre lo multimedia. ARCHIVAR o fusionar con general.
- 💡sugerencias → se pisa con feedback-producto (DESARROLLO). Dejar solo feedback-producto.
- 📦comprar-trackers → es un canal sin conversación posible; la compra ocurre en la web. CONVERTIR en canal de anuncio fijo con embed + link, no chat.
- 🎉eventos-vrchat → sin eventos activos se ve muerto. ARCHIVAR hasta tener calendario real.
- 📱tiktok-clips / 📸instagram-posts / 🎥youtube-videos (marketing interno): 3 canales para 0 posts → UNO solo: "📢contenido-redes".
- 🎧support-chat (voz) → redundante con soporte texto; los usuarios VR usan voz de vrchat. ELIMINAR.

### 3. Canales que funcionan y hay que proteger
- 💬general: el corazón. Bajar slowmode a 0 para reducir fricción mientras la comunidad crece.
- 👋bienvenidos: 66 entradas registradas, funciona como log.
- 📬estado-de-pedidos: único canal CLIENTES con uso real (2 clientes lo usaron). Priorizarlo dentro de su categoría.

### 4. Detalles de forma
- Nombres small-caps (ʙɪᴇɴᴠᴇɴɪᴅᴀ) dificultan búsqueda/autocomplete y menciones <#>. Migrar a nombres normales gradualmente.
- bot-logs quedó en STAFF con 1 mensaje de enero: limpiar o conectar al autorole bot.
- El rol Beekonz Bot arriba en jerarquía es invisible pero conviene bajarlo bajo Royal Beez cuando se reorganice.

## Propuesta de estructura final (13 canales)

📌 BIENVENIDA: reglas · anuncios · bienvenidos · links-utiles · productos-beekonz
💬 COMUNIDAD: general · clips-vr · setups-de-clientes
🛠 SOPORTE: soporte (absorbe preguntas) · faq · guia-instalacion
🛒 CLIENTES: estado-de-pedidos · reviews-clientes · comprar-trackers (anuncio fijo)
⭐ VIP: vip-chat · sorteos
🧪 DESARROLLO: dev-log · beta-testing · feedback-producto
🔒 STAFF: staff-chat · contenido-redes (fusion marketing)
🎙 VOZ: chill · vrchat

Total: 21 canales (de 33 actuales), 7 archivados/eliminados.

## Acciones recomendadas (orden)
1. Fusionar preguntas→soporte, sugerencias→feedback, marketing×3→contenido-redes.
2. Archivar eventos-vrchat y vrchat-texto; eliminar support-chat voz.
3. Convertir comprar-trackers en anuncio fijo.
4. Slowmode general → 0.
5. Revisar en 30 días: si general supera 50 msgs/semana, reabrir vrchat-texto.

## Próximos pasos
- [ ] Ejecutar consolidación (pendiente OK del owner)
- [ ] Renombrar small-caps → normal
- [ ] Conectar bot-logs al autorole bot
