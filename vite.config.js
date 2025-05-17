import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Zeelus',
        short_name: 'Zeelus',
        description: 'Plataforma de Gestão para Acompanhantes de Pessoas Atípicas',
        theme_color: '#004777',
        background_color: '#F5F3EF',
        display: 'standalone',
        icons: [
          {
            src: './src/img/zeelusLogo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/img/zeelusLogo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
