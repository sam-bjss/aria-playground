// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        { path: "~/components/", extensions: ["vue"] },
        { path: "~/components/ui", extensions: ["vue"] },
        { path: "~/components/tabs", extensions: ["vue"] },
    ],
    modules: ["@nuxtjs/eslint-module"],
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
