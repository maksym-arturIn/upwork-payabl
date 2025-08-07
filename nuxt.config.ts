import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  css: [join(currentDir, './app/assets/css/tailwind.css')],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
    },
    langDir: join(currentDir, './i18n/locales'),
    locales: [
      { code: 'uk', language: 'uk-UA', file: 'uk.json' },
      { code: 'en', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
});