# WA Bots Docs

Sitio de documentación oficial para los bots de WhatsApp Senko AI y Hatsune MikuWabot.

## Run & Operate

- `pnpm --filter @workspace/botdocs run dev` — correr el sitio de documentación (usa PORT y BASE_PATH del workflow)
- `pnpm --filter @workspace/botdocs run build` — compilar para producción (genera `artifacts/botdocs/dist/public/`)
- `pnpm run typecheck` — typecheck completo

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Routing: wouter
- Animaciones: framer-motion
- UI Components: shadcn/ui + Radix UI
- Dark mode: toggle manual con localStorage

## Where things live

- `artifacts/botdocs/src/` — código fuente del sitio
- `artifacts/botdocs/src/pages/` — páginas: Home, HowItWorks, BotSenko, BotMiku
- `artifacts/botdocs/src/components/` — Layout, Sidebar, ThemeProvider, etc.
- `artifacts/botdocs/vercel.json` — configuración para deploy en Vercel
- `artifacts/botdocs/vite.config.ts` — PORT y BASE_PATH son opcionales (compatibilidad con Vercel)

## Vercel Deployment

Para subir a Vercel:
1. Copia el enlace del repo
2. Importar en Vercel
3. En la configuración del proyecto en Vercel:
   - **Root Directory:** `artifacts/botdocs`
   - **Build Command:** `pnpm install && pnpm run build`
   - **Output Directory:** `dist/public`
4. O bien usar el `vercel.json` en la raíz del proyecto apuntando al artifact

## Architecture decisions

- Sitio 100% estático — sin backend, sin API calls
- Un `vercel.json` con rewrite `/* → /index.html` para manejar rutas SPA
- `vite.config.ts` hace PORT y BASE_PATH opcionales para que `vite build` funcione sin variables de entorno

## Product

Documentación para los bots de WhatsApp:
- Página de inicio con introducción a los bots de WhatsApp
- Página "Cómo funciona" con explicación técnica
- Página dedicada a Senko AI (con sección de comandos lista para llenar)
- Página dedicada a Hatsune MikuWabot (con sección de comandos lista para llenar)

## Gotchas

- Al hacer build para Vercel, no usar `pnpm run build` desde la raíz (necesita PORT y BASE_PATH). Usar el Root Directory de Vercel apuntando a `artifacts/botdocs`.
- El `vercel.json` debe estar en la carpeta `artifacts/botdocs/` si se usa Root Directory en Vercel.
