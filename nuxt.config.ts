// https://nuxt.com/docs/api/configuration/nuxt-config
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_API_URL: process.env.NUXT_PUBLIC_API_URL,
    }
  },
  ssr: false,
  vite: {
    plugins: [Components({ resolvers: [NaiveUiResolver()] })],
  },
  srcDir: "src/",
  css: ["@/assets/css/tailwind.css"],
  compatibilityDate: "2024-04-03",
  modules: ["@unocss/nuxt"],
});
