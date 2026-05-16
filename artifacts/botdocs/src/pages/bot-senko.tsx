import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Coins,
  Star,
  Download,
  User,
  Radio,
  Sticker,
  Wrench,
  Users,
  EyeOff,
  Heart,
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
    id: "economy",
    label: "Economy",
    icon: <Coins className="h-4 w-4" />,
    color: "text-yellow-400",
    commands: [
      { name: "#w", aliases: ["#work"], description: "Ganar coins trabajando." },
      { name: "#balance", aliases: ["#bal"], description: "Ver tus coins actuales." },
      { name: "#coinflip", aliases: ["#cf"], description: "Apostar en cara o cruz." },
      { name: "#crime", description: "Ganar coins rápido." },
      { name: "#daily", description: "Recompensa diaria." },
      { name: "#deposit", aliases: ["#d"], description: "Depositar al banco." },
      { name: "#economyboard", aliases: ["#baltop"], description: "Ranking de usuarios." },
      { name: "#casino", aliases: ["#slot"], description: "Apostar en el casino." },
      { name: "#economyinfo", description: "Tu info de economía." },
      { name: "#givecoins", aliases: ["#pay"], description: "Dar coins a un usuario." },
      { name: "#roulette", aliases: ["#ruleta"], description: "Apostar en la ruleta." },
      { name: "#slut", description: "Ganar coins por servicios." },
      { name: "#steal", aliases: ["#rob"], description: "Robar coins a alguien." },
      { name: "#withdraw", aliases: ["#with"], description: "Retirar del banco." },
      { name: "#minar", aliases: ["#mine"], description: "Trabajos de minería." },
      { name: "#cofre", aliases: ["#coffer"], description: "Abrir cofre diario." },
      { name: "#weekly", aliases: ["#monthly"], description: "Recompensa semanal/mensual." },
      { name: "#aventura", aliases: ["#adventure"], description: "Ir de aventura." },
      { name: "#curar", aliases: ["#heal"], description: "Recuperar salud." },
      { name: "#cazar", aliases: ["#fish"], description: "Caza y pesca." },
      { name: "#mazmorra", aliases: ["#dungeon"], description: "Explorar mazmorras." },
      { name: "#math", description: "Juego de matemáticas." },
      { name: "#ppt", description: "Piedra, papel o tijera." },
    ],
  },
  {
    id: "gacha",
    label: "Gacha",
    icon: <Star className="h-4 w-4" />,
    color: "text-purple-400",
    commands: [
      { name: "#charimage", aliases: ["#wimage"], description: "Ver imagen de un personaje." },
      { name: "#claim", aliases: ["#c"], description: "Reclamar un personaje." },
      { name: "#gachainfo", aliases: ["#ginfo"], description: "Tu información de gacha." },
      { name: "#giveallharem", description: "Regalar todo tu harén." },
      { name: "#givechar", aliases: ["#regalar"], description: "Regalar personaje específico." },
      { name: "#harem", aliases: ["#waifus"], description: "Ver tus personajes." },
      { name: "#rollwaifu", aliases: ["#rw"], description: "Roll aleatorio." },
      { name: "#serielist", aliases: ["#animelist"], description: "Listar series disponibles." },
    ],
  },
  {
    id: "downloads",
    label: "Descargas",
    icon: <Download className="h-4 w-4" />,
    color: "text-green-400",
    commands: [
      { name: "#facebook", aliases: ["#fb"], description: "Video de Facebook." },
      { name: "#mediafire", aliases: ["#mf"], description: "Archivos de MediaFire." },
      { name: "#play", aliases: ["#mp3"], description: "Audio de YouTube." },
      { name: "#play2", aliases: ["#mp4"], description: "Video de YouTube." },
      { name: "#pinterest", aliases: ["#pin"], description: "Imágenes de Pinterest." },
      { name: "#reel", aliases: ["#instagram"], description: "Reels de Instagram." },
      { name: "#tiktok", aliases: ["#tt"], description: "Videos de TikTok." },
      { name: "#twitter", aliases: ["#x"], description: "Contenido de X/Twitter." },
      { name: "#ytsearch", description: "Buscar en YouTube." },
      { name: "#imagen", aliases: ["#img"], description: "Imágenes de Google." },
      { name: "#aptoide", aliases: ["#apk"], description: "Descargar aplicaciones." },
    ],
  },
  {
    id: "profiles",
    label: "Perfiles",
    icon: <User className="h-4 w-4" />,
    color: "text-emerald-400",
    commands: [
      { name: "#profile", aliases: ["#perfil"], description: "Ver perfil de usuario." },
      { name: "#leaderboard", aliases: ["#lb"], description: "Top de experiencia." },
      { name: "#level", aliases: ["#lvl"], description: "Nivel y experiencia." },
      { name: "#setgenre", aliases: ["#delgenre"], description: "Configurar género." },
      { name: "#setbirth", aliases: ["#delbirth"], description: "Fecha de cumpleaños." },
      { name: "#setdesc", aliases: ["#deldesc"], description: "Descripción de perfil." },
      { name: "#marry", aliases: ["#divorce"], description: "Sistema de parejas." },
      { name: "#setfav", aliases: ["#deletefav"], description: "Tu claim favorito." },
      { name: "#sethobby", aliases: ["#removehobby"], description: "Tus pasatiempos." },
    ],
  },
  {
    id: "sockets",
    label: "Sockets",
    icon: <Radio className="h-4 w-4" />,
    color: "text-indigo-400",
    commands: [
      { name: "#botinfo", description: "Info técnica del bot." },
      { name: "#join", aliases: ["#leave"], description: "Entrar/Salir de grupos." },
      { name: "#logout", description: "Cerrar sesión." },
      { name: "#self", description: "Modo público/privado." },
      { name: "#qr", aliases: ["#code"], description: "Crear Sub-Bot." },
      { name: "#reload", description: "Recargar sesión." },
      { name: "#setname", description: "Cambiar nombre del bot." },
      { name: "#setbanner", description: "Cambiar banner del menú." },
      { name: "#seticon", aliases: ["#setpfp"], description: "Cambiar imagen del bot." },
      { name: "#setprefix", description: "Cambiar prefijo." },
      { name: "#setcurrency", description: "Cambiar moneda." },
      { name: "#setowner", description: "Cambiar dueño." },
      { name: "#setchannel", aliases: ["#setlink"], description: "Enlaces del bot." },
      { name: "#setstatus", aliases: ["#setusername"], description: "Info de la cuenta." },
    ],
  },
  {
    id: "stickers",
    label: "Stickers",
    icon: <Sticker className="h-4 w-4" />,
    color: "text-pink-400",
    commands: [
      { name: "#sticker", aliases: ["#s"], description: "Imagen/Video a sticker." },
      { name: "#stickerpack", aliases: ["#spack"], description: "Descargar packs." },
      { name: "#newpack", aliases: ["#delpack"], description: "Gestionar tus propios packs." },
      { name: "#setmeta", aliases: ["#delmeta"], description: "Autor y nombre del pack." },
      { name: "#packprivate", aliases: ["#packpublic"], description: "Privacidad de packs." },
      { name: "#stickeradd", aliases: ["#stickerdel"], description: "Editar contenido de packs." },
      { name: "#stickerpacks", description: "Lista de tus packs." },
      { name: "#brat", aliases: ["#qc"], description: "Stickers con texto." },
    ],
  },
  {
    id: "utilities",
    label: "Utilidades",
    icon: <Wrench className="h-4 w-4" />,
    color: "text-slate-300",
    commands: [
      { name: "#menu", aliases: ["#help"], description: "Menú de comandos." },
      { name: "#ping", aliases: ["#speed"], description: "Velocidad de respuesta." },
      { name: "#status", description: "Estado del sistema." },
      { name: "#report", aliases: ["#sug"], description: "Reportes y sugerencias." },
      { name: "#ia", aliases: ["#chatgpt"], description: "Consultar a la IA." },
      { name: "#getpic", aliases: ["#pfp"], description: "Obtener foto de perfil." },
      { name: "#toimage", aliases: ["#tourl"], description: "Conversión de archivos." },
      { name: "#hd", aliases: ["#remini"], description: "Mejorar calidad de imagen." },
      { name: "#traducir", aliases: ["#translate"], description: "Traductor multi-idioma." },
      { name: "#readviewonce", description: "Ver mensajes de una vez." },
    ],
  },
  {
    id: "groups",
    label: "Grupos",
    icon: <Users className="h-4 w-4" />,
    color: "text-orange-400",
    commands: [
      { name: "#alerts", aliases: ["#antilinks"], description: "Seguridad del grupo." },
      { name: "#open", aliases: ["#close"], description: "Abrir/Cerrar chat." },
      { name: "#kick", aliases: ["#promote", "#demote"], description: "Gestión de miembros." },
      { name: "#economy", aliases: ["#gacha"], description: "Activar/Desactivar juegos." },
      { name: "#welcome", aliases: ["#goodbye"], description: "Mensajes de bienvenida." },
      { name: "#setgpname", aliases: ["#setgpdesc"], description: "Configurar grupo." },
      { name: "#warn", aliases: ["#warns", "#delwarn"], description: "Sistema de advertencias." },
      { name: "#tagall", description: "Mencionar a todos." },
      { name: "#msgcount", aliases: ["#topcount"], description: "Estadísticas de mensajes." },
      { name: "#link", aliases: ["#revoke"], description: "Enlace del grupo." },
    ],
  },
  {
    id: "nsfw",
    label: "NSFW",
    icon: <EyeOff className="h-4 w-4" />,
    color: "text-red-400",
    commands: [
      { name: "#xnxx", aliases: ["#xvideos"], description: "Descargar contenido." },
      { name: "#rule34", aliases: ["#danbooru"], description: "Buscar imágenes." },
      { name: "#fuck", aliases: ["#anal"], description: "Comandos de acción." },
      { name: "#blowjob", aliases: ["#cum"], description: "Comandos de acción." },
      { name: "#handjob", aliases: ["#footjob"], description: "Comandos de acción." },
      { name: "#undress", aliases: ["#spank"], description: "Comandos de acción." },
      { name: "#orgy", aliases: ["#69"], description: "Acciones grupales." },
      { name: "#yaoi", aliases: ["#yuri"], description: "Contenido temático." },
    ],
  },
  {
    id: "anime",
    label: "Anime",
    icon: <Heart className="h-4 w-4" />,
    color: "text-sky-400",
    commands: [
      { name: "#waifu", aliases: ["#neko"], description: "Imágenes aleatorias." },
      { name: "#ppcouple", description: "Fotos para parejas." },
      { name: "#hug", aliases: ["#kiss"], description: "Abrazar / Besar." },
      { name: "#pat", aliases: ["#wink"], description: "Acariciar / Guiñar." },
      { name: "#kill", aliases: ["#punch"], description: "Matar / Golpear." },
      { name: "#happy", aliases: ["#sad"], description: "Estados de ánimo." },
      { name: "#angry", aliases: ["#shy"], description: "Estados de ánimo." },
      { name: "#sleep", aliases: ["#eat"], description: "Dormir / Comer." },
      { name: "#blush", aliases: ["#wave"], description: "Sonrojarse / Saludar." },
      { name: "#cringe", aliases: ["#bonk"], description: "Otras reacciones." },
    ],
  },
];

function CommandCard({ command, accentColor }: { command: Command; accentColor: string }) {
  return (
    <div
      data-testid={`command-card-${command.name}`}
      className="flex flex-col gap-1.5 p-3 rounded-lg border border-border bg-card hover:bg-muted/40 transition-colors"
    >
      <div className="flex flex-wrap items-center gap-2">
        <code className={`px-2 py-0.5 rounded bg-bot-senko/10 text-bot-senko font-mono font-semibold text-sm border border-bot-senko/20`}>
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
                <CommandCard key={cmd.name} command={cmd} accentColor="bot-senko" />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BotSenko() {
  const totalCommands = categories.reduce((acc, c) => acc + c.commands.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-6 py-12 max-w-5xl"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-bot-senko/20 to-bot-senko/80 flex items-center justify-center flex-shrink-0 shadow-lg border border-bot-senko/30">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 flex flex-wrap items-center gap-3">
            Senko AI
            <Badge
              variant="outline"
              className="text-bot-senko border-bot-senko/50 bg-bot-senko/10"
            >
              v2.0 Beta
            </Badge>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Bot de WhatsApp inteligente con IA, economia, gacha, descargas y herramientas de grupo. Prefijo: <code className="text-bot-senko font-mono">#</code>
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
