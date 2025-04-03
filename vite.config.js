import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reext from "@sencha/reext/dist/ReExt/vite-plugin-reext.js"; // Use absolute path

export default defineConfig({
  plugins: [react(), reext()],
});
