// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: new URL('./src/index.ts', import.meta.url).pathname,
      name: 'NtCabinet',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['lit', /^lit\/.*/],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
