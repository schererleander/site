import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		Sitemap({
			hostname: "https://schererleander.de",
			dynamicRoutes: ["/", "/blog"]
		}),
		mdPlugin({ mode: [Mode.REACT, Mode.MARKDOWN], }),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
