"""Consolidacion del server Beekonz segun auditoria 2026-08-22."""
import urllib.request, urllib.error, json

env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()
HDRS = {'Authorization': 'Bot ' + TOK, 'Content-Type': 'application/json',
        'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request('https://discord.com/api/v10' + path, data=data, headers=HDRS, method=method)
    with urllib.request.urlopen(req) as r:
        raw = r.read()
        return json.loads(raw) if raw else None


def report(label, fn):
    try:
        fn()
        print('OK  ', label, flush=True)
    except urllib.error.HTTPError as e:
        print('FAIL', label, '| HTTP', e.code, e.read().decode()[:150], flush=True)


chans = api('GET', f'/guilds/{GID}/channels')
by_id = {c['id']: c for c in chans}
SOPORTE = '1465179032176824390'
FEEDBACK = next(c['id'] for c in chans if 'feedback-producto' in c['name'])
GENERAL = '1465179031954657553'
COMPRAR = '1478862706072359135'
COMUNIDAD_CAT = '1465179031954657552'

# 1. Fusiones: mover contenido util y eliminar duplicados
report('anuncio en preguntas (redireccion a soporte)',
       lambda: api('POST', f'/channels/1469064390350340096/messages', {
           'embeds': [{'description': '📌 Este canal ahora vive en <#1465179032176824390> — pregunta ahí.', 'color': 16763135}]}))
report('eliminar ❓preguntas', lambda: api('DELETE', '/channels/1469064390350340096'))

report('anuncio en sugerencias (redireccion a feedback)',
       lambda: api('POST', f'/channels/1478861944894132264/messages', {
           'embeds': [{'description': '📌 Este canal ahora vive en <#' + FEEDBACK + '> — deja tus ideas ahí.', 'color': 16763135}]}))
report('eliminar 💡sugerencias', lambda: api('DELETE', '/channels/1478861944894132264'))

# 2. Archivar vrchat texto y eventos (moverlos al fondo de COMUNIDAD como "archivados" no existe;
#    Discord no archiva canales: los movemos a una categoria de archivo nueva al final)
archive = {}
def make_archive():
    archive['id'] = api('POST', f'/guilds/{GID}/channels', {'name': '🗄 ARCHIVO', 'type': 4})['id']
report('crear categoria 🗄 ARCHIVO', make_archive)
for cid in ['1465185038172950812', '1478864664250028334']:
    report(f'mover {by_id[cid]["name"]} a archivo',
           lambda c=cid: api('PATCH', '/channels/' + c, {'parent_id': archive['id']}))

# 3. Marketing x3 -> uno solo
report('renombre tiktok-clips -> contenido-redes',
       lambda: api('PATCH', '/channels/1478864478920642652', {'name': '📢contenido-redes'}))
for cid in ['1478864542980247592', '1478864590166163466']:
    report(f'eliminar {by_id[cid]["name"]}', lambda c=cid: api('DELETE', '/channels/' + c))

# 4. comprar-trackers -> canal de anuncio (read-only para everyone)
EVERYONE = GID
VIEW, SEND = str(1 << 10), str(1 << 11)
report('comprar-trackers read-only',
       lambda: api('PUT', f'/channels/{COMPRAR}/permissions/{EVERYONE}',
                   {'id': EVERYONE, 'type': 0, 'allow': VIEW, 'deny': SEND}))
report('embed fijo en comprar-trackers',
       lambda: api('POST', f'/channels/{COMPRAR}/messages', {
           'embeds': [{
               'title': '🛒 Compra tus Smols',
               'description': ('Los pedidos se hacen directamente en **https://beekonz.com**\n\n'
                               '🥬 Starter Pack · 🍯 Advanced Pack · 👑 Pro Pack\n\n'
                               'Dudas antes de comprar? Pregunta en <#1465179032176824390>'),
               'color': 16763135}]}))

# 5. Eliminar voz support-chat
report('eliminar voz support-chat', lambda: api('DELETE', '/channels/1465188525564498052'))

# 6. Slowmode general -> 0
report('slowmode general -> 0', lambda: api('PATCH', '/channels/' + GENERAL, {'rate_limit_per_user': 0}))

print('\nHECHO')
