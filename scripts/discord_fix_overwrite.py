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


chans = api('GET', f'/guilds/{GID}/channels')
mkt = [c for c in chans if c['id'] == '1478864344581275679']
if mkt:
    print('MARKETING existe:', repr(mkt[0]['name']), '| type', mkt[0]['type'])
    try:
        api('PUT', f"/channels/{mkt[0]['id']}/overrides/{GID}",
            {'id': GID, 'type': 0, 'deny': str(1 << 10)})
        print('OK MARKETING oculto a @everyone')
    except urllib.error.HTTPError as e:
        print('FAIL', e.code, e.read().decode()[:300])
else:
    print('MARKETING NO existe con ese id. Categorias actuales:')
    for c in chans:
        if c['type'] == 4:
            print(' ', c['id'], repr(c['name']))

print('\n=== ESTRUCTURA FINAL ===')
order = {4: 0, 0: 1, 5: 1, 15: 1, 2: 2, 13: 2}
for c in sorted(chans, key=lambda x: (order.get(x['type'], 9), x.get('raw_position', 0))):
    t = {0: 'texto', 2: 'voz', 4: 'CATEGORIA', 5: 'anuncios'}.get(c['type'], str(c['type']))
    print(f"[{t:>9}] {c['name']}")
