import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [vue(), vueJsx(), svgLoader()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@asset': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@component': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@view': fileURLToPath(new URL('./src/views', import.meta.url)),
        },
    },
})
