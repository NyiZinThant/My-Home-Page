import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import manifest from './manifest.json';
import { crx } from '@crxjs/vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: { port: 3000, hmr: { port: 3000 } },
});
