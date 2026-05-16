import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  ChevronDown,
  Heart,
  Search,
  Download,
  Coins,
  Sparkles,
  Users,
  Brain,
  Info,
  EyeOff,
  User,
  Radio,
  Gamepad2,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Command {
  name: string;
  aliases?: string[];
  args?: string;
  description: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  commands: Command[];
}

const categories: Category[] = [
  {
    id: "anime",
    label: "Anime",
    icon: <Heart className="h-4 w-4" />,
    color: "text-pink-400",
    commands: [
      { name: ".angry", args: "+ mention", description: "Muestra que estás molesto." },
      { name: ".bleh", args: "+ mention", description: "Sácale la lengua a alguien." },
      { name: ".bored", aliases: [".aburrido"], args: "+ mention", description: "Muestra lo aburrido que estás." },
      { name: ".beso", aliases: [".kiss", ".muak", ".kisscheek"], args: "+ mention", description: "Dale un beso a alguien." },
      { name: ".clap", args: "+ mention", description: "Aplaude." },
      { name: ".coffee", aliases: [".cafe"], args: "+ mention", description: "Toma un café." },
      { name: ".dramatic", aliases: [".drama"], args: "+ mention", description: "Haz un drama." },
      { name: ".drunk", args: "+ mention", description: "Emborráchate." },
      { name: ".impregnate", aliases: [".preg"], args: "+ mention", description: "Preña a alguien." },
      { name: ".laugh", args: "+ mention", description: "Búrlate de alguien." },
      { name: ".love", aliases: [".amor"], args: "+ mention", description: "Menciona al amor de tu vida." },
      { name: ".pout", args: "+ mention", description: "Hazle pucheros a alguien." },
      { name: ".punch", args: "+ mention", description: "Dale un puñetazo a alguien." },
      { name: ".run", aliases: [".correr"], args: "+ mention", description: "¡Corre!" },
      { name: ".sad", aliases: [".triste"], args: "+ mention", description: "Menciona por quién estás triste." },
      { name: ".scared", args: "+ mention", description: "Menciona a ese que te asusta." },
      { name: ".seduce", args: "+ mention", description: "Seduce a alguien." },
      { name: ".shy", aliases: [".timido"], args: "+ mention", description: "Menciona por quién sientes timidez." },
      { name: ".sleep", args: "+ mention", description: "Duerme con alguien." },
      { name: ".smoke", aliases: [".fumar"], args: "+ mention", description: "Fuma con alguien." },
      { name: ".spit", aliases: [".escupir"], args: "+ mention", description: "Escupe a alguien." },
      { name: ".step", aliases: [".pisar"], args: "+ mention", description: "Pisa a alguien." },
      { name: ".think", aliases: [".thinkhard"], args: "+ mention", description: "Piensa profundamente..." },
      { name: ".walk", args: "+ mention", description: "Sal a caminar." },
      { name: ".hug", args: "+ mention", description: "Abraza a alguien." },
      { name: ".kill", args: "+ mention", description: "Mata a alguien." },
      { name: ".eat", aliases: [".nom", ".comer"], args: "+ mention", description: "Come con alguien." },
      { name: ".wink", args: "+ mention", description: "Guíñale un ojo a alguien." },
      { name: ".pat", args: "+ mention", description: "Acaricia la cabeza a alguien." },
      { name: ".happy", aliases: [".feliz"], args: "+ mention", description: "Siéntete feliz por alguien." },
      { name: ".bully", args: "+ mention", description: "Hazle bullying a alguien." },
      { name: ".bite", args: "+ mention", description: "Muerde a alguien." },
      { name: ".blush", args: "+ mention", description: "Sonrójate por alguien." },
      { name: ".wave", args: "+ mention", description: "Saluda a alguien." },
      { name: ".bath", args: "+ mention", description: "Báñate con alguien." },
      { name: ".smug", args: "+ mention", description: "Presume a alguien." },
      { name: ".smile", args: "+ mention", description: "Sonríe por alguien." },
      { name: ".highfive", args: "+ mention", description: "Choca 5 con tu amigo." },
      { name: ".handhold", args: "+ mention", description: "Dale la mano a tu amigo." },
      { name: ".cringe", args: "+ mention", description: "Siente cringe por alguien." },
      { name: ".bonk", args: "+ mention", description: "Dale un golpe a alguien." },
      { name: ".cry", args: "+ mention", description: "Llora por alguien." },
      { name: ".lick", args: "+ mention", description: "Lame a alguien." },
      { name: ".slap", args: "+ mention", description: "Dale una bofetada a alguien." },
      { name: ".dance", args: "+ mention", description: "Baila con alguien." },
      { name: ".cuddle", args: "+ mention", description: "Acurrúcate con alguien." },
      { name: ".cold", args: "+ mention", description: "Siente frío por alguien." },
      { name: ".sing", args: "+ mention", description: "Cántale a alguien." },
      { name: ".tickle", args: "+ mention", description: "Hazle cosquillas a alguien." },
      { name: ".scream", args: "+ mention", description: "Gríta a alguien." },
      { name: ".push", args: "+ mention", description: "Empuja a alguien." },
      { name: ".nope", args: "+ mention", description: "Exclama tu desacuerdo." },
      { name: ".jump", args: "+ mention", description: "Salta de la felicidad." },
      { name: ".heat", args: "+ mention", description: "Siente calor por alguien." },
      { name: ".gaming", args: "+ mention", description: "Juega con alguien." },
      { name: ".draw", args: "+ mention", description: "Dibuja a alguien." },
      { name: ".call", args: "+ mention", description: "Márcale a alguien." },
      { name: ".snuggle", args: "+ mention", description: "Acurrúcate con una almohada." },
      { name: ".blowkiss", args: "+ mention", description: "Lanza un beso a alguien." },
      { name: ".trip", args: "+ mention", description: "Tropieza con alguien." },
      { name: ".stare", args: "+ mention", description: "Quédate mirando a alguien." },
      { name: ".sniff", args: "+ mention", description: "Olfatea a alguien." },
      { name: ".curious", args: "+ mention", description: "Siente curiosidad por alguien." },
      { name: ".comfort", args: "+ mention", description: "Consuela a alguien." },
      { name: ".peek", args: "+ mention", description: "Espía a alguien." },
    ],
  },
  {
    id: "search",
    label: "Búsqueda",
    icon: <Search className="h-4 w-4" />,
    color: "text-sky-400",
    commands: [
      { name: ".pinterest", aliases: [".pin"], args: "+ query", description: "Busca imágenes en Pinterest." },
      { name: ".imagen", aliases: [".img"], args: "+ query", description: "Busca imágenes en Google." },
      { name: ".aptoide", aliases: [".apk", ".apkdl"], args: "+ query", description: "Descarga aplicaciones de Aptoide." },
      { name: ".ytsearch", aliases: [".search"], args: "+ query", description: "Busca videos de YouTube." },
      { name: ".tiktoksearch", args: "+ query", description: "Busca videos de TikTok." },
    ],
  },
  {
    id: "download",
    label: "Descargas",
    icon: <Download className="h-4 w-4" />,
    color: "text-green-400",
    commands: [
      { name: ".facebook", args: "+ url", description: "Descarga videos de Facebook." },
      { name: ".instagram", args: "+ url", description: "Descarga videos de Instagram." },
      { name: ".tiktok", args: "+ url|query", description: "Descarga videos de TikTok." },
      { name: ".play", args: "+ audio|mp3|video|mp4 url|query", description: "Descarga videos de YouTube." },
      { name: ".spotify", args: "+ url|query", description: "Descarga audios de Spotify." },
      { name: ".mediafire", args: "+ url|query", description: "Descarga archivos de MediaFire." },
      { name: ".mega", args: "+ url|query", description: "Descarga archivos de MEGA." },
      { name: ".modapk", aliases: [".apkmod"], args: "+ text", description: "Descarga APK modificadas." },
    ],
  },
  {
    id: "economia",
    label: "Economía",
    icon: <Coins className="h-4 w-4" />,
    color: "text-yellow-400",
    commands: [
      { name: ".balance", aliases: [".bal"], args: "+ mention", description: "Muestra tu balance o el de un usuario." },
      { name: ".steal", aliases: [".rob", ".robar"], args: "+ mention", description: "Intenta robar coins a un usuario." },
      { name: ".crime", description: "Intenta cometer un crimen." },
      { name: ".givecoins", aliases: [".pay", ".coinsgive"], args: "+ cantidad|all + mention", description: "Regala coins a un usuario." },
      { name: ".ppt", args: "+ piedra|papel|tijera", description: "Juega a piedra, papel o tijera y gana o pierde coins." },
      { name: ".math", aliases: [".matematicas"], args: "+ facil|medio|dificil|imposible", description: "Resuelve una ecuación y gana o pierde coins." },
      { name: ".waittimes", aliases: [".cooldowns", ".einfo"], description: "Muestra tus tiempos de enfriamiento en las acciones de RPG." },
      { name: ".economyboard", aliases: [".baltop", ".eboard"], args: "+ página", description: "Consulta el ranking de coins en el grupo." },
      { name: ".slut", description: "Gana coins." },
      { name: ".mine", description: "Realiza trabajos de minería y gana coins." },
      { name: ".rt", aliases: [".roulette", ".ruleta"], args: "+ cantidad + red|black|green", description: "Apuesta coins en la ruleta de colores." },
      { name: ".coinflip", aliases: [".flip", ".cf"], args: "+ bet", description: "Apuesta coins a cara o cruz." },
      { name: ".daily", description: "Reclama tu recompensa diaria." },
      { name: ".monthly", aliases: [".mensual"], description: "Reclama tus recompensas mensuales." },
      { name: ".weekly", aliases: [".semanal"], description: "Reclama tus recompensas semanales." },
      { name: ".work", aliases: [".w"], description: "Realiza un trabajo y gana coins." },
      { name: ".deposit", aliases: [".dep", ".d"], args: "+ cantidad|all", description: "Deposita coins en tu banco." },
      { name: ".withdraw", aliases: [".with"], args: "+ cantidad|all", description: "Retira coins de tu banco." },
      { name: ".logros", description: "Observa tus logros desbloqueados." },
      { name: ".toplogros", description: "Top 10 usuarios con más logros." },
    ],
  },
  {
    id: "gacha",
    label: "Gacha",
    icon: <Sparkles className="h-4 w-4" />,
    color: "text-purple-400",
    commands: [
      { name: ".rw", aliases: [".roll", ".rollwaifu", ".rf"], description: "Envía waifus aleatorios con valor." },
      { name: ".c", aliases: [".claim", ".buy"], args: "+ waifu", description: "Compra una waifu." },
      { name: ".harem", aliases: [".miswaifus", ".claims"], description: "Mira tus personajes obtenidos." },
      { name: ".sell", aliases: [".vender"], args: "+ waifu + value", description: "Vende una waifu y gana coins." },
      { name: ".buyc", aliases: [".buycharacter", ".buychar"], args: "+ waifu", description: "Compra una waifu de la tienda." },
      { name: ".trade", aliases: [".cambiar"], args: "+ tu personaje / personaje 2", description: "Intercambia una waifu por otra." },
      { name: ".animelist", aliases: [".slist", ".serielist"], description: "Lista series del socket." },
      { name: ".animeinfo", aliases: [".ainfo", ".serieinfo"], args: "+ anime", description: "Información de un anime." },
      { name: ".tiendawaifus", aliases: [".wshop", ".haremshop"], description: "Verifica las waifus en ventas." },
      { name: ".delrw", aliases: [".delp"], args: "+ waifu", description: "Elimina una waifu de tus obtenidos." },
      { name: ".retirarventa", args: "+ waifu", description: "Elimina una waifu de la venta." },
      { name: ".darrw", aliases: [".darp"], args: "+ mention + waifu", description: "Regala una waifu a un usuario." },
      { name: ".giveallharem", args: "+ mention", description: "Regala todas tus waifus a un usuario." },
      { name: ".ginfo", aliases: [".infogacha", ".gachainfo"], description: "Ver los enfriamientos de los juegos gacha." },
      { name: ".vp", args: "+ waifu", description: "Ver la información de una waifu." },
      { name: ".character", args: "+ waifu", description: "Ver la info de tu waifu." },
      { name: ".vote", aliases: [".votar"], args: "+ waifu", description: "Votar por una waifu y subir su valor." },
      { name: ".aceptar", args: "+ solicitud", description: "Aceptar un intercambio de harems." },
      { name: ".toprw", args: "+ mention", description: "Ver los usuarios con más waifus." },
      { name: ".topvotos", aliases: [".topwaifus"], description: "Ver los personajes con más votos." },
    ],
  },
  {
    id: "grupo",
    label: "Grupo",
    icon: <Users className="h-4 w-4" />,
    color: "text-orange-400",
    commands: [
      { name: ".mute", args: "+ on|off", description: "Activa y desactiva el bot en el grupo." },
      { name: ".promote", args: "+ mention", description: "Promueve a un usuario a administrador." },
      { name: ".demote", args: "+ mention", description: "Degrada a un usuario de administrador." },
      { name: ".transfer", args: "+ numeroantiguo / mention", description: "Transfiere los datos de otro usuario a uno nuevo." },
      { name: ".setprimary", args: "+ mention", description: "Establece un bot como primario del grupo." },
      { name: ".setgpbaner", description: "Cambia la imagen del grupo." },
      { name: ".setgpname", args: "+ text", description: "Cambia el nombre del grupo." },
      { name: ".setgpdesc", args: "+ text", description: "Cambia la descripción del grupo." },
      { name: ".closet", aliases: [".open"], description: "Cierra y abre el grupo." },
      { name: ".delete", aliases: [".del"], args: "+ mention", description: "Elimina el mensaje de un usuario." },
      { name: ".on", aliases: [".off"], args: "+ welcome|antilinks|gacha|rpg|economia|nsfw...", description: "Activa o desactiva configuraciones del grupo." },
      { name: ".groupinfo", aliases: [".gp"], description: "Muestra la información del grupo." },
      { name: ".tag", aliases: [".hidetag"], args: "+ text", description: "Menciona a todos los usuarios del grupo." },
      { name: ".kick", args: "+ mention", description: "Expulsa a un usuario del grupo." },
    ],
  },
  {
    id: "ia",
    label: "IA",
    icon: <Brain className="h-4 w-4" />,
    color: "text-cyan-400",
    commands: [
      { name: ".diamond", aliases: [".ia"], args: "+ query", description: "Realiza una petición a ChatGPT." },
      { name: ".dalle", aliases: [".aiimage"], args: "+ descripción", description: "Crea imágenes con IA." },
      { name: ".aigensfw", aliases: [".nsfwaigen", ".pornogen"], args: "+ descripción", description: "Crea imágenes +18 con IA." },
    ],
  },
  {
    id: "info",
    label: "Info",
    icon: <Info className="h-4 w-4" />,
    color: "text-blue-400",
    commands: [
      { name: ".menu", aliases: [".help"], args: "+ category", description: "Muestra la lista de comandos." },
      { name: ".infobot", aliases: [".infosocket"], description: "Muestra la información del socket." },
      { name: ".ping", aliases: [".p"], description: "Muestra la velocidad del bot." },
      { name: ".report", aliases: [".reporte"], args: "+ error", description: "Envía un mensaje de reporte al Staff." },
      { name: ".status", description: "Ver el estado del bot." },
      { name: ".sug", aliases: [".suggest"], args: "+ suggest", description: "Envía una sugerencia al Staff." },
      { name: ".invitar", aliases: [".invite"], args: "+ link", description: "Envía una sugerencia de grupo a los moderadores." },
    ],
  },
  {
    id: "nsfw",
    label: "NSFW",
    icon: <EyeOff className="h-4 w-4" />,
    color: "text-red-400",
    commands: [
      { name: ".danbooru", aliases: [".dbooru"], args: "+ text", description: "Busca imágenes en Danbooru." },
      { name: ".gelbooru", aliases: [".gbooru"], args: "+ text", description: "Busca imágenes en Gelbooru." },
      { name: ".rule34", aliases: [".r34"], args: "+ text", description: "Busca imágenes en Rule34." },
      { name: ".hentai", args: "+ ejecutar", description: "Imágenes random hentai." },
      { name: ".buscarvideox", aliases: [".xvideosearch"], args: "+ text", description: "Busca y descarga videos xxx." },
      { name: ".anal", args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".cum", args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".encuerar", aliases: [".undress"], args: "+ tag", description: "Desnuda a alguien." },
      { name: ".fuck", aliases: [".coger"], args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".spank", aliases: [".nalgada"], args: "+ tag", description: "Dale una nalgada a alguien." },
      { name: ".lickpussy", args: "+ tag", description: "Acción +18." },
      { name: ".paja", aliases: [".fap"], args: "+ tag", description: "Acción +18." },
      { name: ".grope", args: "+ tag", description: "Manosea a alguien." },
      { name: ".69", aliases: [".sixnine"], args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".suckboobs", args: "+ tag", description: "Acción +18." },
      { name: ".grabboobs", args: "+ tag", description: "Acción +18." },
      { name: ".bj", aliases: [".blowjob"], args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".boobjob", args: "+ tag", description: "Acción +18 con alguien." },
      { name: ".footjob", args: "+ tag", description: "Acción +18 con alguien." },
    ],
  },
  {
    id: "profile",
    label: "Perfil",
    icon: <User className="h-4 w-4" />,
    color: "text-emerald-400",
    commands: [
      { name: ".level", aliases: [".levelup", ".lvl"], args: "+ mention", description: "Muestra información de tu nivel y progreso." },
      { name: ".marry", args: "+ mention", description: "Envía una solicitud de matrimonio a un usuario." },
      { name: ".divorce", description: "Divórciate de tu pareja." },
      { name: ".profile", aliases: [".perfil"], description: "Muestra tu perfil o el de un usuario." },
      { name: ".setbirth", args: "+ dia/mes/año", description: "Define una fecha de nacimiento a tu perfil." },
      { name: ".delbirth", description: "Elimina tu fecha de nacimiento del perfil." },
      { name: ".setdescription", aliases: [".setdesc"], args: "+ text", description: "Define una descripción a tu perfil." },
      { name: ".deldescription", aliases: [".deldesc"], description: "Elimina tu descripción del perfil." },
      { name: ".setgenre", args: "+ hombre|mujer", description: "Define un género a tu perfil." },
      { name: ".delgenre", description: "Elimina tu género del perfil." },
    ],
  },
  {
    id: "sockets",
    label: "Sockets",
    icon: <Radio className="h-4 w-4" />,
    color: "text-indigo-400",
    commands: [
      { name: ".bots", aliases: [".sockets"], description: "Muestra el número de sockets conectados." },
      { name: ".logout", description: "Cierra la sesión del socket." },
      { name: ".qr", aliases: [".code"], description: "Vincula un nuevo socket a tu número." },
      { name: ".qrpremium", aliases: [".codepremium"], description: "Vincula un socket de tipo premium." },
      { name: ".qrmod", aliases: [".codemod"], description: "Vincula un socket de tipo mod." },
      { name: ".self", args: "+ on|off", description: "Haz privado o público tu socket." },
      { name: ".set", aliases: [".edit"], args: "+ category + value", description: "Modifica características del socket." },
      { name: ".leave", description: "El bot abandona el grupo actual." },
    ],
  },
  {
    id: "pokegacha",
    label: "Pokegacha",
    icon: <Gamepad2 className="h-4 w-4" />,
    color: "text-yellow-300",
    commands: [
      { name: ".pokemon", aliases: [".poke"], description: "Encuentra imágenes aleatorias de Pokémons." },
      { name: ".reclaim", description: "Reclama tu Pokémon." },
      { name: ".mypokemon", aliases: [".pokemons", ".pokegab"], description: "Mira la lista de tus Pokémons reclamados." },
    ],
  },
  {
    id: "utils",
    label: "Utilidades",
    icon: <Wrench className="h-4 w-4" />,
    color: "text-slate-300",
    commands: [
      { name: ".sticker", aliases: [".s"], description: "Convierte imágenes o videos a stickers." },
      { name: ".cars", aliases: [".car", ".coche"], description: "Encuentra tu coche favorito." },
      { name: ".getpic", aliases: [".pfp"], args: "+ mention", description: "Ver la foto de perfil de un usuario." },
      { name: ".tourl", description: "Convierte la imagen en un link." },
      { name: ".translate", args: "+ idioma + text", description: "Traduce el texto al idioma especificado." },
      { name: ".get", args: "+ url", description: "Realiza solicitudes GET a páginas web." },
      { name: ".setmeta", args: "+ packname | author", description: "Define los metadatos para tus stickers." },
      { name: ".hd", aliases: [".upscale"], description: "Mejora la calidad de una imagen." },
      { name: ".rvocal", description: "Separa la vocal de una canción." },
      { name: ".wm", args: "+ packname | author", description: "Cambia la marca de agua de un sticker." },
      { name: ".tts", aliases: [".ttsvoz"], args: "+ text", description: "Convierte texto a voz." },
      { name: ".confesar", args: "+ numero + text", description: "Haz una confesión anónima a alguien." },
      { name: ".responder", args: "+ text", description: "Responde a una confesión que te enviaron." },
    ],
  },
];

function CommandCard({ command }: { command: Command }) {
  return (
    <div
      data-testid={`command-card-${command.name}`}
      className="flex flex-col gap-1.5 p-3 rounded-lg border border-border bg-card hover:bg-muted/40 transition-colors"
    >
      <div className="flex flex-wrap items-center gap-2">
        <code className="px-2 py-0.5 rounded bg-bot-miku/10 text-bot-miku font-mono font-semibold text-sm border border-bot-miku/20">
          {command.name}
        </code>
        {command.aliases?.map((alias) => (
          <code
            key={alias}
            className="px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono text-xs border border-border"
          >
            {alias}
          </code>
        ))}
        {command.args && (
          <span className="text-xs text-muted-foreground font-mono italic">
            {command.args}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{command.description}</p>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
      <button
        data-testid={`category-toggle-${category.id}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className={category.color}>{category.icon}</span>
          <span className="font-semibold text-base">{category.label}</span>
          <Badge variant="secondary" className="text-xs">
            {category.commands.length}
          </Badge>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 grid gap-2 sm:grid-cols-2">
              {category.commands.map((cmd) => (
                <CommandCard key={cmd.name} command={cmd} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BotMiku() {
  const totalCommands = categories.reduce((acc, c) => acc + c.commands.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-6 py-12 max-w-5xl"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-bot-miku/20 to-bot-miku/80 flex items-center justify-center flex-shrink-0 shadow-lg border border-bot-miku/30">
          <Music className="h-12 w-12 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 flex flex-wrap items-center gap-3">
            Hatsune MikuWabot
            <Badge
              variant="outline"
              className="text-bot-miku border-bot-miku/50 bg-bot-miku/10"
            >
              v1.5 Stable
            </Badge>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Bot de WhatsApp temático de Hatsune Miku. Anime, economía, gacha, descargas y mucho más al alcance de un mensaje.
          </p>
          <div className="flex gap-4 mt-3">
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{categories.length}</span> categorías
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{totalCommands}</span> comandos
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </motion.div>
  );
}
