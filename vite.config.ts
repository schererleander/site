import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://schererleander.de",
      dynamicRoutes: [ "/", "/gear", "/projects", "/homelab", "/printing" ]
    })
  ],
})
