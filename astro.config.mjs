import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
//  adapter: node({
//    mode: "standalone"
//  }),
  adapter: vercel(),
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000, // Usa el puerto de Render o el 3000 por defecto
  }
}); 