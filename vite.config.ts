import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/RobustImage/RobustImage.tsx'), // Entry point for your component
      name: 'RobustImage', // The name of your component
      fileName: (format) => `robustimage.${format}.js`,
      formats: ['es', 'umd'] // Build both ES module and UMD formats
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          return 'assets/[name][extname]';
        }
      }
    },
    emptyOutDir: true, // Ensure dist is empty before build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: false,
});