import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 8888 },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@Layouts": "/src/Layouts",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@store": "/src/store",
      theme: "/src/theme",
      util: "/src/util",
      src: "/src",
    },
  },
});
