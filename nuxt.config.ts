// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        { path: "~/components/", extensions: ["vue"] },
        { path: "~/components/layout", extensions: ["vue"] },
        { path: "~/components/ui", extensions: ["vue"] },
        { path: "~/components/forms", extensions: ["vue"] },
        { path: "~/components/forms/checkboxes", extensions: ["vue"] },
        { path: "~/components/tabs", extensions: ["vue"] },
    ],
    modules: ["@nuxtjs/eslint-module", "@nuxtjs/sitemap"],
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            htmlAttrs: { lang: "en" },
        },
    },
    site: {
        url: "http://localhost:10667",
    },
})
