import { motion } from "framer-motion";
import { Cpu, Terminal, Network, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-12 max-w-4xl"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cómo funcionan los bots de WhatsApp</h1>
        <p className="text-xl text-muted-foreground">
          Entiende la magia técnica detrás de tus asistentes de chat favoritos.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">¿Qué es un bot de WhatsApp?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Un bot de WhatsApp es un programa automatizado que se conecta directamente a la infraestructura de WhatsApp. Usando bibliotecas como Baileys o whatsapp-web.js, estos programas simulan un cliente real de WhatsApp Web. Leen los mensajes entrantes, los procesan con lógica personalizada y envían respuestas inteligentes en tiempo real.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">El proceso de conexión</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Los bots no tienen acceso mágico a WhatsApp. Se conectan igual que tú cuando vinculas un dispositivo. El servidor del bot genera un código QR, que se escanea con una cuenta de WhatsApp principal. Una vez autenticada, la sesión se guarda de forma segura. Esta persistencia permite que el bot se reinicie y reconecte de forma inmediata sin necesidad de escanear el QR de nuevo.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Manejo de mensajes y comandos</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cuando llega un mensaje, el bot escucha. Comprueba si el mensaje comienza con un disparador específico llamado <strong className="text-foreground">prefijo</strong> (normalmente <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">!</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">/</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">.</code> o <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">#</code>).
          </p>
          <div className="p-4 bg-muted rounded-lg border border-border font-mono text-sm">
            <div className="text-green-500 mb-1">// Ejemplo de flujo</div>
            <div className="text-muted-foreground">Usuario: <span className="text-foreground">.play Hatsune Miku - World is Mine</span></div>
            <div className="text-muted-foreground">Bot: <span className="text-blue-400">Extrae el comando 'play' y el argumento 'Hatsune Miku - World is Mine'</span></div>
            <div className="text-muted-foreground">Bot: <span className="text-yellow-400">Busca y descarga el audio de YouTube</span></div>
            <div className="text-muted-foreground">Bot: <span className="text-foreground">Envía el archivo de audio al chat</span></div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Bots en grupos vs. chats privados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border rounded-xl bg-card">
              <h3 className="font-semibold mb-2">En grupos</h3>
              <p className="text-sm text-muted-foreground">
                En los grupos, los bots suelen restringir ciertos comandos (como expulsar miembros o cambiar ajustes del grupo) solo a administradores. Son ideales para dar la bienvenida a nuevos miembros y moderar spam.
              </p>
            </div>
            <div className="p-5 border rounded-xl bg-card">
              <h3 className="font-semibold mb-2">En chats privados</h3>
              <p className="text-sm text-muted-foreground">
                En mensajes directos, los bots actúan como herramientas personales: descargan multimedia, responden preguntas mediante IA o realizan traducciones sin el ruido de un grupo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
