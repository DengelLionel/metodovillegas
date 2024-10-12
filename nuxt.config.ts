// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Merezco la Vida de Mis Sueños',  // Título predeterminado
      titleTemplate: '%s | Merezco la Vida de Mis Sueños',  // Template con sufijo
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Transforma tu vida en menos de un mes con técnicas universales.' }
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kurale&family=Protest+Strike&display=swap'
        },
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
        }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
