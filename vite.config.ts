import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    // SPA fallback for clean URLs (/features, /pricing, etc.)
    historyApiFallback: true,
  },
});
