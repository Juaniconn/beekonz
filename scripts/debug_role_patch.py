"""Debug: intentar renombrar un solo rol y ver el error completo + jerarquia."""
import urllib.request, urllib.error, json

env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()
H = {'Authorization': 'Bot ' + TOK, 'Content-Type': 'application/json',
     'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request('https://discord.com/api/v10' + path, data=data, headers=H, method=method)
    with urllib.request.urlopen(req) as r:
        raw = r.read()
        return json.loads(raw) if raw else None


roles = sorted(api('GET', f'/guilds/{GID}/roles'), key=lambda r: -r['position'])
bot_pos = next(r['position'] for r in roles if r['name'] == 'Beekonz Bot')
print('Jerarquia (posicion del bot =', bot_pos, '):')
for r in roles:
    mark = ' <== BOT' if r['name'] == 'Beekonz Bot' else (' (encima del bot)' if r['position'] > bot_pos else '')
    print(f"  pos={r['position']:>2} {r['name']}{mark}")

# intento directo sobre Beez
try:
    api('PATCH', f'/guilds/{GID}/roles/1465184747226665124', {'name': 'TEST'})
    print('PATCH Beez: OK')
except urllib.error.HTTPError as e:
    print('PATCH Beez FAIL:', e.code, e.read().decode()[:300])
