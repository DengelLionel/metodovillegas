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
      ],
      script: [
        {
          hid: 'facebook-pixel',
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1622502308612732');  // Reemplaza con tu Pixel ID real
            fbq('track', 'PageView');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      noscript: [
        {
          hid: 'facebook-pixel-noscript',
          innerHTML: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1298547537801212&ev=PageView&noscript=1"/>`,
          body: true
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'facebook-pixel': ['innerHTML'],
        'facebook-pixel-noscript': ['innerHTML']
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
