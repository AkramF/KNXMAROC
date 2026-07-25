import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Déploiement Vercel : Nitro compile le serveur SSR en Vercel Function et
// Vercel détecte la configuration automatiquement — pas de build command ni
// d'output directory à renseigner dans le dashboard.
//
// Le rendu se fait côté serveur à chaque requête : le code du site doit rester
// SSR-safe. Ne jamais toucher window, document, localStorage ou navigator
// pendant le rendu ou au niveau module — seulement dans un effet, un handler,
// ou derrière `typeof window !== "undefined"`.
export default defineConfig({
  plugins: [
    // Le plugin TanStack Start doit s'exécuter avant celui de React.
    tanstackStart(),
    nitro(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
