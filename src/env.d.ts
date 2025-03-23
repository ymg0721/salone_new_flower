/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NUXT_PUBLIC_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {}; 