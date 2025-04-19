// https://nuxt.com/docs/api/configuration/nuxt-config
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Venere Emi Flower Salone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'プリザーブドフラワーのアトリエ。オリジナルの作品制作からレッスンまで、花のある暮らしをご提案します。' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Venere Emi Flower Salone' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://venere-emi.com' },
        { hid: 'og:title', property: 'og:title', content: 'Venere Emi Flower Salone' },
        { hid: 'og:description', property: 'og:description', content: 'プリザーブドフラワーのアトリエ。オリジナルの作品制作からレッスンまで、花のある暮らしをご提案します。' },
        { hid: 'og:image', property: 'og:image', content: '/ogp.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
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
  ssr: true,
  vite: {
    plugins: [Components({ resolvers: [NaiveUiResolver()] })],
  },
  srcDir: "src/",
  css: ["@/assets/css/tailwind.css"],
  compatibilityDate: "2024-04-03",
  modules: [
    "@unocss/nuxt"
  ],
  build: {
    transpile: [
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer'
    ]
  },
});
