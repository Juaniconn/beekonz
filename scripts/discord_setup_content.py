"""Setup de contenido y permisos del server Beekonz — v2 (por IDs)."""
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


def report(label, fn):
    try:
        fn()
        print('OK  ', label, flush=True)
    except urllib.error.HTTPError as e:
        print('FAIL', label, '| HTTP', e.code, e.read().decode()[:200], flush=True)
    except Exception as e:
        print('FAIL', label, '|', e, flush=True)


chans = api('GET', f'/guilds/{GID}/channels')
by_id = {c['id']: c for c in chans}

RULES = '1465179031954657551'
WELCOME = '1479502457628528742'
LINKS = '1478860583909462231'
PRODUCTOS = '1478860488552222892'
FAQ = '1478861060877451335'
GUIA = '1478861105848778814'
SOPORTE = '1465179032176824390'
GENERAL = '1465179031954657553'

# canales nuevos creados hoy: localizarlos por nombre normalizado
new_ch = {}
for c in chans:
    n = c['name'].lower()
    if 'dev-log' in n:
        new_ch['devlog'] = c['id']
    elif 'beta-testing' in n:
        new_ch['beta'] = c['id']
    elif 'feedback-producto' in n:
        new_ch['feedback'] = c['id']
    elif 'setups-de-clientes' in n:
        new_ch['setups'] = c['id']

roles = {r['name']: r['id'] for r in api('GET', f'/guilds/{GID}/roles')}
BUG = roles.get('Bug Reporters')
PAID = [roles[n] for n in ['⭐Royal Beez', '💰Honey Beez', '🍯VIP Beez'] if n in roles]
EVERYONE = GID
VIEW, SEND = str(1 << 10), str(1 << 11)


def embed(title, desc, color=16763135):
    return {'embeds': [{'title': title, 'description': desc, 'color': color}]}


def send(cid, msg):
    return lambda: api('POST', f'/channels/{cid}/messages', msg)


def put_perms(cid, entries):
    def f():
        for rid, allow, deny in entries:
            api('PUT', f'/channels/{cid}/permissions/{rid}',
                {'id': rid, 'type': 0, 'allow': allow, 'deny': deny})
    return f


# ---------- Mensajes ----------
report('📜rules', send(RULES, embed('🐝 Reglas de Beekonz', (
    '**1.** Respeta a todos: cero acoso, racismo, homofobia o hate.\n'
    '**2.** Usa el canal correcto para cada tema.\n'
    '**3.** Sin spam, auto-promoción sin permiso ni NSFW.\n'
    f'**4.** Soporte técnico solo en <#{SOPORTE}>.\n'
    '**5.** Comparte tus setups y clips, ¡queremos verlos!\n\n'
    '⚠️ Incumplir = warn → kick → ban. El staff tiene la última palabra.\n\n'
    '**¡Bienvenido a la colmena! 🍯**'))))

report('👋bienvenidos', send(WELCOME, embed('¡Bienvenido a Beekonz! 🐝', (
    'La comunidad de trackers ultraligeros para Full Body Tracking en VRChat.\n\n'
    '**Empieza aquí:**\n'
    f'📜 Reglas → <#{RULES}>\n'
    f'📦 Conoce los Smols → <#{PRODUCTOS}>\n'
    f'🔗 Links útiles → <#{LINKS}>\n'
    f'💬 Preséntate en <#{GENERAL}>\n'
    f'🆘 Dudas técnicas → <#{SOPORTE}>\n'
    f"📸 Muestra tu setup → <#{new_ch.get('setups', SOPORTE)}>\n\n"
    '🌐 https://beekonz.com'))))

report('🔗links-utiles', send(LINKS, embed('Links de Beekonz', (
    '🌐 **Tienda oficial:** https://beekonz.com\n\n'
    '*Redes sociales: se agregan handles oficiales cuando el team los confirme.*'))))

report('📦productos', send(PRODUCTOS, embed('Smols LSM6DSV — Paquetes', (
    '**Trackers ultraligeros (~10 g) · +50 h batería · basados en SlimeVR**\n\n'
    '🥬 **Starter Pack — $5,999 MXN**\n6 trackers · 1 dongle · straps 2ch/2med/2gde · packaging completo\n\n'
    '🍯 **Advanced Pack — $7,499 MXN**\n8 trackers · 1 dongle · straps 4ch/2med/2gde\n\n'
    '👑 **Pro Pack — $8,999 MXN**\n10 trackers · 1 dongle · straps 6ch/2med/2gde\n\n'
    '🛒 Compra aquí en la tienda oficial.'))))

report('📚faq', send(FAQ, embed('FAQ — Preguntas Frecuentes', (
    '**¿Qué es Full Body Tracking (FBT)?**\nTrackear piernas y cadera en VR para que tu avatar se mueva completo, no solo cabeza y manos.\n\n'
    '**¿Cuántos trackers necesito?**\nMínimo 3 (cadera + 2 pies); lo ideal 6+ sumando rodillas y codos. Nuestros packs van de 6 a 10.\n\n'
    '**¿Funcionan con SlimeVR?**\nSí, los Smols usan el ecosistema SlimeVR (firmware abierto).\n\n'
    '**¿Necesitan estaciones base?**\nNo. Son IMUs inalámbricas vía dongle USB nRF52840. Sin lighthouses ni cámaras.\n\n'
    '**¿Cuánto dura la batería?**\nMás de 50 horas por carga (~115 mAh por tracker).\n\n'
    '**¿Cuánto pesan?**\n~10 g cada tracker: te olvidas de que los traes puestos.'))))

report('📖guia', send(GUIA, embed('Guía rápida de instalación', (
    '**1.** Descarga el server de SlimeVR desde slimevr.dev\n'
    '**2.** Conecta el dongle nRF52840 a un puerto USB (usa extensión si hay interferencia)\n'
    '**3.** Enciende cada Smol y espera a que aparezca en el server\n'
    '**4.** Coloca los straps: cadera, pies y rodillas según tu pack\n'
    '**5.** Haz el mounting calibration (calibración de orientación)\n'
    '**6.** En VRChat: activa Full Body Tracking en el menú de calibración\n\n'
    f'¿Trabas? Pregunta en <#{SOPORTE}> 🆘'))))

if 'devlog' in new_ch:
    report('📝dev-log #0', send(new_ch['devlog'], embed('📝 Dev Log #0 — Abrimos Desarrollo', (
        'Abrimos esta sección para construir Beekonz **contigo**, no solo para ti.\n\n'
        '• Avances reales de desarrollo (lo bueno Y lo difícil)\n'
        f"• Betas de firmware antes que nadie → <#{new_ch.get('beta', SOPORTE)}>\n"
        f"• Tu feedback directo al roadmap → <#{new_ch.get('feedback', SOPORTE)}>\n\n"
        'Somos una marca hecha por usuarios de VR. Bienvenido a la colmena. 🐝'))))
else:
    print('WARN dev-log no encontrado')

# ---------- Permisos ----------
full = str(int(VIEW) | int(SEND))
if BUG:
    report('🔒beta-testing restringido',
           put_perms(new_ch.get('beta'), [(EVERYONE, '0', VIEW), (BUG, full, '0')]))
else:
    print('WARN Bug Reporters role no encontrado')

for cid_label, cid in [('💎vip-chat', '1478120345117393097'), ('🎁sorteos', '1478864238050017343')]:
    report(f'🔒{cid_label} solo pagados',
           put_perms(cid, [(EVERYONE, '0', VIEW)] + [(r, full, '0') for r in PAID]))

# ---------- Slowmodes ----------
for cid, secs in [(GENERAL, 5), (SOPORTE, 15), ('1478861944894132264', 30), ('1478862892035080303', 60)]:
    report(f'slowmode {cid} {secs}s',
           lambda c=cid, s=secs: api('PATCH', '/channels/' + c, {'rate_limit_per_user': s}))

print('\nDONE')
