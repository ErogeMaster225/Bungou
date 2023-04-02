// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Bungou',
            meta: [
                { name: 'description', content: 'My amazing site.' },
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Fredoka&family=Inter:wght@400;500;700&display=swap',
                },
            ],
        },
    },
    modules: ['@pinia/nuxt', '@nuxt/devtools', '@vueuse/nuxt', '@huntersofbook/naive-ui-nuxt'],
})
