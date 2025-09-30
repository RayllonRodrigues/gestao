import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",              // evita 404 de assets no Netlify
  plugins: [react()],
});
