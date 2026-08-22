import urllib.request, urllib.error, json, ssl

env = dict(l.split('=', 1) for l in open('/home/juaniconn/projects/beekonz/.env') if '=' in l and not l.startswith('#'))
TOK = env['DISCORD_BOT_TOKEN'].strip()
GID = env['DISCORD_GUILD_ID'].strip()

HDRS = {'Authorization': 'Bot ' + TOK,
        'Content-Type': 'application/json',
        'User-Agent': 'DiscordBot (https://beekonz.com, 1.0)',
        'Accept': 'application/json'}


def api(path):
    req = urllib.request.Request('https://discord.com/api/v10' + path, headers=HDRS)
    return json.load(urllib.request.urlopen(req))


def main():
    try:
        me = api('/users/@me')
        print('BOT OK:', me['username'], '#', me['discriminator'])
    except urllib.error.HTTPError as e:
        print('TOKEN ERR HTTP', e.code, e.read().decode()[:300])
        return 1

    try:
        g = api(f'/guilds/{GID}?with_counts=true')
        print('GUILD OK:', g['name'], '| miembros:', g.get('approximate_member_count'))
    except urllib.error.HTTPError as e:
        print('GUILD ERR HTTP', e.code, e.read().decode()[:300])
        try:
            gs = api('/users/@me/guilds')
            print('Servers donde esta el bot:', [x['name'] for x in gs])
        except Exception as e2:
            print('guilds list ERR:', e2)
        return 1

    print('\n=== CATEGORIAS Y CANALES ===')
    chans = api(f'/guilds/{GID}/channels')
    order = {0: 1, 5: 1, 15: 1, 2: 2, 13: 2, 4: 0}
    for c in sorted(chans, key=lambda x: (order.get(x['type'], 9), x.get('raw_position', 0))):
        t = {0: 'texto', 2: 'voz', 4: 'CATEGORIA', 5: 'anuncios', 13: 'escenario', 15: 'foro'}.get(c['type'], str(c['type']))
        print(f"[{t:>9}] id={c['id']} | {c['name']} | parent={c.get('parent_id') or '-'}")

    print('\n=== ROLES ===')
    for r in sorted(api(f'/guilds/{GID}/roles'), key=lambda x: -x['position']):
        print(f"pos={r['position']:>3} @{r['name']} | color={r['color']}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
