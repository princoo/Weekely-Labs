import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/Weekely-Labs/lab-5/movie-explore-app/',
  plugins: [react(), tailwindcss()],
});
// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   // Load env file based on the current mode (e.g., development, production)
//   const env = loadEnv(mode, process.cwd());

//   return {
//     base: env.VITE_APP_BASE_URL || '/',
//     plugins: [react(), tailwindcss()],
//   };
// });
