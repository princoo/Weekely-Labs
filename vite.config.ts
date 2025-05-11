import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/week-5/movie-explorer-app/',
  plugins: [react(), tailwindcss()],
});
