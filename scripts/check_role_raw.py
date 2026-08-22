import urllib.request, json
env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()
H = {'Authorization': 'Bot ' + TOK, 'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(p):
    return json.load(urllib.request.urlopen(urllib.request.Request('https://discord.com/api/v10' + p, headers=H)))


roles = {r['id']: r for r in api(f'/guilds/{GID}/roles')}
bot_role = roles.get('1540807538159657013')
print('Rol Beekonz Bot:')
for k in ('name', 'permissions', 'flags'):
    print(' ', k, '=', bot_role.get(k))
print()
print('permissions del rol en octal:', oct(int(bot_role.get('permissions', 0))))
