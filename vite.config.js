import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repository =
    env.VITE_GITHUB_REPOSITORY ||
    env.GITHUB_REPOSITORY?.split("/").at(-1) ||
    "portafolio";

  // Base condicional: aplica '/portafolio/' al buildear para producción en GitHub Pages.
  // En desarrollo local (command: 'serve') o builds independientes se mantiene '/'.
  const isProdGithub = (command === "build" && mode === "github") || (mode === "github");
  const base = isProdGithub ? `/${repository}/` : "/";

  return {
    base,
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    test: {
      environment: "jsdom",
      globals: true,
    },
  };
});
