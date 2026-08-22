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


# ---------- 1. Renombrar categorias ----------
report('cat -> 📌 BIENVENIDA', lambda: api('PATCH', '/channels/1465179031954657547', {'name': '📌 BIENVENIDA'}))
report('cat -> 💬 COMUNIDAD', lambda: api('PATCH', '/channels/1465179031954657552', {'name': '💬 COMUNIDAD'}))
report('cat -> 🛠️ SOPORTE', lambda: api('PATCH', '/channels/1465179031954657555', {'name': '🛠️ SOPORTE'}))
report('cat -> 🛒 CLIENTES', lambda: api('PATCH', '/channels/1478862371572416544', {'name': '🛒 CLIENTES'}))
report('cat -> ⭐ VIP', lambda: api('PATCH', '/channels/1478863563094495232', {'name': '⭐ VIP'}))
report('cat -> 🎙 VOZ', lambda: api('PATCH', '/channels/1478864826897010858', {'name': '🎙 VOZ'}))

# ---------- 2. Mover canales ----------
WELCOME = '1465179031954657547'
COMMUNITY = '1465179031954657552'
SUPPORT = '1465179031954657555'

report('faq -> SOPORTE', lambda: api('PATCH', '/channels/1478861060877451335', {'parent_id': SUPPORT}))
report('guia-instalacion -> SOPORTE', lambda: api('PATCH', '/channels/1478861105848778814', {'parent_id': SUPPORT}))
report('eventos-vrchat -> COMUNIDAD', lambda: api('PATCH', '/channels/1478864664250028334', {'parent_id': COMMUNITY}))
report('rename links-importantes -> links-utiles',
       lambda: api('PATCH', '/channels/1478860583909462231', {'name': '🔗links-utiles'}))

# ---------- 3. Crear categoria DESARROLLO + canales nuevos ----------
dev = {}
def make_dev_cat():
    dev['id'] = api('POST', f'/guilds/{GID}/channels',
                    {'name': '🧪 DESARROLLO', 'type': 4})['id']
report('crear categoria 🧪 DESARROLLO', make_dev_cat)

for name in ['📝dev-log', '🧪beta-testing', '💬feedback-producto']:
    report(f'crear {name}', lambda n=name: api('POST', f'/guilds/{GID}/channels',
           {'name': n, 'type': 0, 'parent_id': dev['id']}))

report('crear setups-de-clientes en COMUNIDAD',
       lambda: api('POST', f'/guilds/{GID}/channels',
                   {'name': '📸setups-de-clientes', 'type': 0, 'parent_id': COMMUNITY}))

# ---------- 4. Marketing interno: ocultar a @everyone ----------
EVERYONE = GID
report('ocultar MARKETING a @everyone',
       lambda: api('PUT', f'/channels/1478864344581275679/overrides/{EVERYONE}',
                   {'type': 0, 'deny': '1024'}))  # 1024 = VIEW_CHANNEL

# ---------- 5. Eliminar duplicados / consolidados ----------
to_delete = {
    '1478860707754938439': 'categoria 🧠 INFORMACION (vacia tras mover hijos)',
    '1465211700742455528': '🔗links duplicado en CLIENTES',
    '1465179032176824391': '⚙️configuracion (fusionado en soporte)',
    '1465179032176824392': '⚙️firmware-help (fusionado en soporte)',
    '1478861277911711938': '🥽setup-vrchat (duplica guia-instalacion)',
    '1478861337651056873': '🔋baterias-y-carga (contenido va a FAQ)',
    '1478861861301518547': '🤣memes (consolidado en comunidad)',
    '1478861752757387396': '🎮gaming texto (consolidado)',
    '1478865317231857714': 'voz musica',
    '1478865381929255074': 'voz gaming',
}
for cid, why in to_delete.items():
    report(f'eliminar {why}', lambda c=cid: api('DELETE', '/channels/' + c))

print('\nLISTO')
