"""Auditoria completa del server: canales, actividad, permisos y mensajes recientes."""
import urllib.request, urllib.error, json, time

env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()
HDRS = {'Authorization': 'Bot ' + TOK, 'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(method, path):
    req = urllib.request.Request('https://discord.com/api/v10' + path, headers=HDRS, method=method)
    with urllib.request.urlopen(req) as r:
        raw = r.read()
        return json.loads(raw) if raw else None


g = api('GET', f'/guilds/{GID}?with_counts=true')
print(f"GUILD: {g['name']} | miembros: {g.get('approximate_member_count')} | online: {g.get('approximate_presence_count')}")
print()

chans = api('GET', f'/guilds/{GID}/channels')
cats = {c['id']: c['name'] for c in chans if c['type'] == 4}
order = {4: 0, 0: 1, 5: 1, 15: 1, 2: 2, 13: 2}
sorted_ch = sorted(chans, key=lambda x: (order.get(x['type'], 9), x.get('raw_position', 0)))

for c in sorted_ch:
    if c['type'] == 4:
        print(f"\n### {c['name']}")
        continue
    t = {0: 'texto', 2: 'voz', 5: 'anuncio', 15: 'foro'}.get(c['type'], '?')
    line = f"  [{t}] {c['name']}"
    if c['type'] in (0, 5, 15):
        try:
            msgs = api('GET', f"/channels/{c['id']}/messages?limit=100")
            n = len(msgs)
            last = msgs[0]['timestamp'][:10] if msgs else 'VACIO'
            authors = len({m['author']['id'] for m in msgs})
            bots = sum(1 for m in msgs if m['author']['bot'])
            line += f" | msgs(ult100):{n} autores:{authors} bots:{bots} ultimo:{last}"
        except Exception as e:
            line += f" | (sin acceso: {e})"
    print(line)
