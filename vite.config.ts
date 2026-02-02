import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  optimizeDeps: {
    exclude: ['@coderline/alphatab'],

    include: []
  },

  ssr: {
    noExternal: ['@coderline/alphatab']
  },
  server: {
    fs: {
      allow: ['node_modules/@coderline/alphatab']
    }
  }
});