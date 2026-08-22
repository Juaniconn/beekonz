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


ANUNCIOS = '1465179031954657550'
desc = (
    'Reorganizamos toda la colmena para que sea más fácil encontrar lo que buscas:\n\n'
    '📌 **Bienvenida** — reglas, links y productos\n'
    '💬 **Comunidad** — general, VRChat, clips y NUEVO: 📸 setups-de-clientes\n'
    '🛠️ **Soporte** — FAQ + guía de instalación mejoradas\n'
    '🛒 **Clientes** — pedidos, compras y reviews\n'
    '⭐ **VIP** — chat y sorteos exclusivos\n'
    '🧪 **DESARROLLO (¡nuevo!)** — dev-log, beta-testing y feedback directo al team\n\n'
    'Ahora vas a poder ver cómo se construye Beekonz desde adentro y probar firmware antes que nadie.\n\n'
    '**¡Gracias por ser parte de la colmena! 🍯**')
msg = {'embeds': [{'title': '🐝 NUEVA ESTRUCTURA DEL SERVER', 'color': 16763135, 'description': desc}]}
try:
    api('POST', f'/channels/{ANUNCIOS}/messages', msg)
    print('OK anuncio publicado')
except urllib.error.HTTPError as e:
    print('FAIL', e.code, e.read().decode()[:200])
