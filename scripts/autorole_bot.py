"""Bot de autoroles para Beekonz.

Funciones:
1. Asigna @Beez · Miembros automaticamente a quien se une.
2. Mensaje de reacciones en #bienvenidos para optar a @Bug Reporters · Beta
   (reacciona con 🧪) — asigna/quita el rol segun la reaccion.
"""
import asyncio
import discord

TOKEN = None
GUILD_ID = None
for line in open('/home/juaniconn/projects/beekonz/.env'):
    if line.startswith('DISCORD_BOT_TOKEN='):
        TOKEN = line.split('=', 1)[1].strip()
    elif line.startswith('DISCORD_GUILD_ID='):
        GUILD_ID = int(line.split('=', 1)[1].strip())

ROLE_MESSAGE = '🐝Beez · Miembros'
ROLE_BETA = '🧪Bug Reporters · Beta'
WELCOME_CHANNEL = '👋ʙɪɴᴠᴇɴɪᴅᴏꜱ'  # fallback por nombre; se resuelve por prefijo
REACTION_EMOJI = '🧪'
BETA_MSG_KEY = 'beekonz_beta_msg'

intents = discord.Intents.default()
intents.members = True
intents.message_content = True

client = discord.Client(intents=intents)


def find_role(guild, name):
    return discord.utils.find(lambda r: r.name == name or r.name.startswith(name), guild.roles)


async def ensure_beta_message(guild):
    """Busca el mensaje de opt-in de beta en #bienvenidos; lo crea si no existe."""
    channel = discord.utils.find(
        lambda c: 'ʙɪɴᴠᴇɴɪᴅᴏꜱ' in c.name or 'bienvenidos' in c.name.lower(),
        guild.text_channels)
    if not channel:
        return None
    async for msg in channel.history(limit=50):
        if msg.author == client.user and BETA_MSG_KEY in (msg.content or ''):
            return msg
    embed = discord.Embed(
        title='🧪 ¿Quieres probar betas antes que nadie?',
        description=(
            'Reacciona con 🧪 a este mensaje para unirte a **Bug Reporters**.\n\n'
            'Recibiras acceso al canal de beta-testing y podras probar nuevas '
            'funciones y firmware antes que nadie. Tu feedback moldea Beekonz.'),
        color=0x77c9ff)
    msg = await channel.send(content=BETA_MSG_KEY, embed=embed)
    await msg.add_reaction(REACTION_EMOJI)
    print('mensaje beta creado en', channel.name)
    return msg


@client.event
async def on_ready():
    guild = client.get_guild(GUILD_ID)
    print(f'Conectado como {client.user} | guild: {guild.name}')
    role_member = find_role(guild, ROLE_MESSAGE)
    if not role_member:
        print('ERROR: no encuentro el rol', ROLE_MESSAGE)
        await client.close()
        return
    # Backfill: asignar rol a miembros sin ningun rol de la estructura
    count = 0
    async for m in guild.fetch_members():
        user_roles = {r.id for r in m.roles}
        core = [r.id for r in guild.roles
                if r.name.startswith(('👑Royal', '🛒Honey', '🤝VIP', '🔧Worker', '🧪Bug'))]
        if not (user_roles & set(core)) and not m.bot and role_member.id not in user_roles:
            try:
                await m.add_roles(role_member, reason='Autorol: miembro de la comunidad')
                count += 1
            except discord.Forbidden:
                print('Forbidden con', m)
    print('backfill completado:', count, 'miembros recibieron @Beez')
    await ensure_beta_message(guild)
    print('listo. esperando eventos...')


@client.event
async def on_member_join(member):
    guild = member.guild
    role = find_role(guild, ROLE_MESSAGE)
    if role:
        await member.add_roles(role, reason='Autorol al unirse')
        ch = discord.utils.find(lambda c: 'ʙɪɴᴠᴇɴɪᴅᴏꜱ' in c.name, guild.text_channels)
        if ch:
            await ch.send(f'¡Bienvenido a la colmena {member.mention}! 🐝 Revisa <#{guild.rules_channel.id if guild.rules_channel else "1465179031954657551"}>')


@client.event
async def on_raw_reaction_add(payload):
    if payload.guild_id != GUILD_ID or str(payload.emoji) != REACTION_EMOJI:
        return
    guild = client.get_guild(GUILD_ID)
    role = find_role(guild, ROLE_BETA)
    member = guild.get_member(payload.user_id)
    if role and member and not member.bot:
        await member.add_roles(role, reason='Opt-in beta por reaccion')


@client.event
async def on_raw_reaction_remove(payload):
    if payload.guild_id != GUILD_ID or str(payload.emoji) != REACTION_EMOJI:
        return
    guild = client.get_guild(GUILD_ID)
    role = find_role(guild, ROLE_BETA)
    member = guild.get_member(payload.user_id)
    if role and member and not member.bot:
        await member.remove_roles(role, reason='Quitó reaccion beta')


if __name__ == '__main__':
    client.run(TOKEN)
