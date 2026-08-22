"""Renombrar roles del server Beekonz segun la estructura de negocio."""
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


RENAMES = {
    '1465179030960603433': '👑Royal Beez · Admin',        # antes Server Creator
    '1465179030960603431': '👑Royal Beez · Admin',        # Royal Beez actual
    '1465184939258544240': '🛒Honey Beez · Clientes',
    '1478119335208947885': '🤝VIP Beez · Colaboradores',
    '1465184747226665124': '🐝Beez · Miembros',
    '1465179030960603432': '🔧Worker Beez · Fabricación',
    '1465179030960603429': '🧪Bug Reporters · Beta',
}
DELETE = ['1465186024966586429']  # Ai

for rid, new in RENAMES.items():
    try:
        api('PATCH', f'/guilds/{GID}/roles/{rid}', {'name': new})
        print('OK rename ->', new)
    except urllib.error.HTTPError as e:
        print('FAIL', rid, e.code, e.read().decode()[:120])

for rid in DELETE:
    try:
        api('DELETE', f'/guilds/{GID}/roles/' + rid)
        print('OK eliminado rol', rid)
    except urllib.error.HTTPError as e:
        print('FAIL delete', rid, e.code, e.read().decode()[:120])

print('\n=== ROLES FINALES ===')
for r in sorted(api('GET', f'/guilds/{GID}/roles'), key=lambda x: -x['position']):
    print(r['position'], '|', r['name'])
