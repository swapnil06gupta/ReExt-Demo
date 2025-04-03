import { defineConfig } from 'vite';

import reext from './node_modules/@sencha/reext/dist/ReExt/vite-plugin-reext.js';
export default defineConfig({
  plugins: [
    
    reext()
  ]
})