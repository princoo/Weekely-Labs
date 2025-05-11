import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/Weekely-Labs/lab-5/movie-explore-app/',
  plugins: [react(), tailwindcss()],
});
