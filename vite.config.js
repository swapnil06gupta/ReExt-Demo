import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reext from "@sencha/reext/dist/ReExt/vite-plugin-reext.js";
import path from "path";

export default defineConfig({
  plugins: [react(), reext()],
  resolve: {
    alias: {
      "@sencha/reext": path.resolve(__dirname, "node_modules/@sencha/reext"),
    },
  },
});
