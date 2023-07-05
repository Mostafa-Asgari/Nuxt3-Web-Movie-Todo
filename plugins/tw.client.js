import * as twElements from '~/node_modules/tw-elements/dist/js/tw-elements.umd.min.js'

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.use(twElements)
})