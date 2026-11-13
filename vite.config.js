import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const src = path => fileURLToPath(new URL(`./src${path}`, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': src(''),
            '@asset': src('/assets'),
            '@component': src('/components'),
            '@stores': src('/stores'),
            '@templates': src('/templates'),
            '@util': src('/util'),
            '@view': src('/views'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
        target: 'es2020',
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                // Framework code rarely changes, so keep it in its own long-cached chunk
                // and let page chunks change independently between deploys.
                manualChunks: id => {
                    if (/node_modules[\\/](@vue|vue|vue-router|pinia|@vueuse)[\\/]/.test(id)) return 'vendor'
                    // Only the form pages use flowbite-vue, so it stays out of the initial load.
                    if (/node_modules[\\/]flowbite-vue[\\/]/.test(id)) return 'flowbite-vue'
                },
            },
        },
    },
})
