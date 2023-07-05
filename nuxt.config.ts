// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/all.min.css',
        "vuetify/lib/styles/main.sass"
    ],
    build: {
        transpile: ["vuetify"]
      },
      vite: {
        define: {
          "process.env.DEBUG": false
          }
      },

    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    plugins: ['~/plugins/tw.client.js'],
    
    app: {
        head: {
            script: [
                {src: "_nuxt/assets/js/jquery-3.6.1.min.js", body: true},
                {src: "_nuxt/assets/js/app.js", body: true},
                {src: "_nuxt/node_modules/tw-elements/dist/js/tw-elements.umd.min.js", body: true},
            ]
        }
    }
});
