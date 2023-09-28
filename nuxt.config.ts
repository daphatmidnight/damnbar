// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ["@/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/clash-display",
        },
      ],
    },
  },

  modules: ["nuxt-icon"],
})
