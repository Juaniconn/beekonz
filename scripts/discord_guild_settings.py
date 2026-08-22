"""Ajustes de guild: icono de bienvenida del bot, verificacion, sistema de mensajes."""
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


g = api('GET', f'/guilds/{GID}')
print('Nivel verificacion actual:', g.get('verification_level'))
# verification_level: 0 none, 1 low (email verificada), 2 medium (5 min en discord), 3 high (10 min en server)
if g.get('verification_level', 0) < 1:
    api('PATCH', f'/guilds/{GID}', {'verification_level': 1})
    print('OK verification_level -> 1 (cuenta con email verificada)')

print('Descripcion:', repr(g.get('description')))
api('PATCH', f'/guilds/{GID}', {
    'description': 'Trackers Smols LSM6DSV — Full Body Tracking ultraligero para VRChat. beekonz.com'})
print('OK descripcion del server actualizada')

print('\nHECHO')
