import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mdPlugin({
      mode: [Mode.HTML, Mode.REACT, Mode.MARKDOWN],
    }),
  ],
});

