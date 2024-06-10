import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    rollupOptions: {
      external: [
        'firebase/auth',
        'firebase/firestore',
        'firebase/storage',
        'react-toastify',
      ],
    },
  },
});
