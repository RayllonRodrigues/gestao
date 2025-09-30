import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Configuração para Netlify
export default defineConfig({
  base: "./",
  plugins: [react()],
});
