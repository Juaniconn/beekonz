import urllib.request, urllib.error, json

env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()

HDRS = {'Authorization': 'Bot ' + TOK, 'Content-Type': 'application/json',
        'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(path):
    req = urllib.request.Request('https://discord.com/api/v10' + path, headers=HDRS)
    return json.load(urllib.request.urlopen(req))


gs = api('/users/@me/guilds')
for g in gs:
    print('SERVER:', repr(g['name']), '| id =', g['id'])

if len(gs) == 1:
    gid = gs[0]['id']
    lines = open('/home/juaniconn/projects/beekonz/.env').read().splitlines()
    out = []
    for l in lines:
        if l.startswith('DISCORD_GUILD_ID='):
            out.append('DISCORD_GUILD_ID=' + gid)
        else:
            out.append(l)
    open('/home/juaniconn/projects/beekonz/.env', 'w').write('\n'.join(out) + '\n')
    print('.env actualizado con GUILD_ID =', gid)
