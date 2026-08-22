# Discord — Reestructuración 2026-08-22

Fecha: 2026-08-22

## Resumen
Reestructuración completa del server 𝙱𝚎𝚎𝚔𝚘𝚗𝚣 ✧˖°. (88 miembros) ejecutada vía API con Beekonz Bot.

## Estado previo (auditoría)
- 9 categorías, 40 canales, roles temáticos de abejas (Royal/Honey/VIP/Beez/Worker).
- Problemas: información duplicada en dos zonas, soporte fragmentado en 3 canales, categoría Marketing expuesta al público, ratio canales/miembros muy alto, faltaban dev-log/beta-testing/feedback/setups.

## Estructura final

| # | Categoría | Canales |
|---|---|---|
| 1 | 📌 BIENVENIDA | anuncios · rules · bienvenidos · links-utiles · productos-beekonz |
| 2 | 💬 COMUNIDAD | general · vrchat · preguntas · clips-vr · sugerencias · eventos-vrchat · 📸setups-de-clientes ★ |
| 3 | 🛠️ SOPORTE | soporte · faq · guia-instalacion |
| 4 | 🛒 CLIENTES | showcase-product · estado-de-pedidos · comprar-trackers · reviews-clientes |
| 5 | ⭐ VIP | vip-chat · sorteos |
| 6 | 🧪 DESARROLLO ★ | dev-log · beta-testing · feedback-producto |
| 7 | 🎙 VOZ | support-chat · chill-chat · vrchat |
| 8 | 🔒 STAFF | staff-chat · bot-logs |
| 9 | 📢 MARKETING (interno) | tiktok-clips · instagram-posts · youtube-videos — oculta a @everyone |

★ = nuevos. Eliminados (consolidados): memes, gaming texto, música voz, gaming voz, configuracion, firmware-help, setup-vrchat, baterias-y-carga, links duplicado, categoría Información.

## Roles
Se conservaron todos: Server Creator, ⭐Royal Beez, 💰Honey Beez, 🍯VIP Beez, 🐝Beez, Worker Beez, Bug Reporters + bots (Jockie Music, carl-bot, Koya).

## Hallazgos
- Bot token y guild id viven en `.env` (excluido de git). Scripts en `scripts/`.
- Endpoint correcto para permisos de canal: `/channels/{id}/permissions/{overload_id}`.

## Acciones recomendadas
- Poblar FAQ y guia-instalacion con contenido real.
- Activar welcome message en 👋bienvenidos (Koya/carl-bot ya presentes).
- Definir quién entra al rol Bug Reporters para beta-testing.

## Próximos pasos
- [ ] Mensajes de bienvenida/reglas actualizados a nueva estructura.
- [ ] Primer dev-log de lanzamiento de la sección DESARROLLO.
