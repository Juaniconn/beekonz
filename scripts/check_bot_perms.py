import urllib.request, json
env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()
H = {'Authorization': 'Bot ' + TOK, 'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)'}


def api(p):
    return json.load(urllib.request.urlopen(urllib.request.Request('https://discord.com/api/v10' + p, headers=H)))


me = api('/users/@me')
m = api(f'/guilds/{GID}/members/' + me['id'])
print('roles del bot:', m['roles'])
perms = int(m.get('permissions') or 0)
ADMIN = 1 << 3
MR = 1 << 28
print('permissions:', oct(perms))
print('ADMINISTRATOR:', bool(perms & ADMIN), '| MANAGE_ROLES:', bool(perms & MR))
