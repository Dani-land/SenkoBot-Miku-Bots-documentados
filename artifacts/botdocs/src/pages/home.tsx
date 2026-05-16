import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield, Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-12 md:py-24 max-w-5xl"
    >
      <div className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="inline-flex items-center justify-center p-3 bg-wa-green/10 rounded-full mb-6"
        >
          <MessageSquare className="h-8 w-8 text-wa-green" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Potencia tu experiencia en <span className="text-wa-green">WhatsApp</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Documentación oficial de bots de WhatsApp inteligentes y potentes. Aprende a usar Senko AI y Hatsune MikuWabot para transformar tus chats grupales y tu productividad personal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/how-it-works">
            <div data-testid="link-how-it-works" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 cursor-pointer">
              Cómo funciona
            </div>
          </Link>
          <Link href="/bots/senko-ai">
            <div data-testid="link-senko-ai" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 cursor-pointer">
              Conoce Senko AI
            </div>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-24">
        <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
          <Zap className="h-10 w-10 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Respuestas automáticas</h3>
          <p className="text-muted-foreground">Responde preguntas frecuentes, juega o busca información al instante sin que tengas que hacer nada.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
          <Shield className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestión de grupos</h3>
          <p className="text-muted-foreground">Mantén tu comunidad segura y organizada con moderación automática y mensajes de bienvenida.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
          <Smartphone className="h-10 w-10 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multimedia interactivo</h3>
          <p className="text-muted-foreground">Envía y recibe imágenes, audios, documentos y stickers de forma interactiva en tus chats.</p>
        </div>
      </div>
    </motion.div>
  );
}
