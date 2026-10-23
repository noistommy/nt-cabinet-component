// vite.config.ts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({ 
      insertTypesEntry: true,
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: {
        index: new URL('./src/index.ts', import.meta.url).pathname,
        'nt-cabinet-react': new URL('./src/nt-cabinet-react.ts', import.meta.url).pathname
      },
      name: 'NtCabinet',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        'lit', 
        /^lit\/.*/,
        'react', 
        'react-dom'
      ],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
