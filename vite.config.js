import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
    base: "./", // ESSENCIAL p/ Netlify
    plugins: [react()],
});
