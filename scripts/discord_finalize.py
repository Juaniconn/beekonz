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


# Ocultar MARKETING a @everyone (endpoint correcto: /permissions/)
report('ocultar MARKETING a @everyone',
       lambda: api('PUT', f'/channels/1478864344581275679/permissions/{GID}',
                   {'id': GID, 'type': 0, 'deny': str(1 << 10)}))

# Normalizar nombres restantes
report('cat staff -> 🔒 STAFF',
       lambda: api('PATCH', '/channels/1465179032176824393', {'name': '🔒 STAFF'}))
report('cat marketing -> 📢 MARKETING (interno)',
       lambda: api('PATCH', '/channels/1478864344581275679', {'name': '📢 MARKETING (interno)'}))

# Reordenar categorias: BIENVENIDA, COMUNIDAD, SOPORTE, CLIENTES, VIP, DESARROLLO, VOZ, STAFF, MARKETING
cat_order = ['1465179031954657547',  # bienvenida
             '1465179031954657552',  # comunidad
             '1465179031954657555',  # soporte
             '1478862371572416544',  # clientes
             '1478863563094495232',  # vip
             None,                   # DESARROLLO (buscar id)
             '1478864826897010858',  # voz
             '1465179032176824393',  # staff
             '1478864344581275679']  # marketing
chans = api('GET', f'/guilds/{GID}/channels')
dev_id = next(c['id'] for c in chans if c['type'] == 4 and 'DESARROLLO' in c['name'])
cat_order[5] = dev_id


def reorder():
    api('PATCH', f'/guilds/{GID}/channels',
        [{'id': cid, 'position': i, 'type': 4} for i, cid in enumerate(cat_order)])
report('reordenar categorias', reorder)

print('\nHECHO')
