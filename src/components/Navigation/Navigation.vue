<script setup>
    import {computed, ref, watch, watchEffect} from 'vue'
    import {RouterLink, useRoute} from 'vue-router'
    import {globalStore} from '@/stores/global'
    import {routes} from '@/router'
    import NavItems from '@/components/Navigation/Components/NavItems.vue'
    import logoWebp from '@asset/images/lsems-logo.webp'
    import logoPng from '@asset/images/lsems-logo.png'

    const store = globalStore()
    const route = useRoute()

    // index.html applies the saved theme before first paint; this keeps it in sync afterwards.
    watchEffect(() => document.body.classList.toggle('dark', store.darkMode))

    const toggleLightDark = () => (store.darkMode = !store.darkMode)
    const isDark = computed(() => store.darkMode)
    const name = computed(() => store.userData.name || '')

    // Mobile menu (always visible from the md breakpoint up via CSS)
    const isMenuOpen = ref(false)
    watch(() => route.fullPath, () => (isMenuOpen.value = false))
</script>

<template>
    <nav class="border-gray-200 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <RouterLink
                to="/"
                class="flex items-center flex-shrink-0"
            >
                <picture class="mr-3 flex-shrink-0">
                    <source
                        :srcset="logoWebp"
                        type="image/webp"
                    />
                    <img
                        :src="logoPng"
                        alt="Los Santos Emergency Medical Services"
                        width="40"
                        height="40"
                        class="h-6 w-6 sm:h-10 sm:w-10"
                    />
                </picture>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> AMU Paperwork Generator </span>
            </RouterLink>

            <button
                type="button"
                aria-controls="main-menu"
                :aria-expanded="isMenuOpen"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                @click="isMenuOpen = !isMenuOpen"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    aria-hidden="true"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <div
                id="main-menu"
                class="flex-1 w-full justify-center md:block md:w-auto mx-auto md:mx-2 md:px-2 nav-items"
                :class="isMenuOpen ? 'flex' : 'hidden'"
            >
                <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <NavItems
                        v-for="item in routes"
                        :key="item.name"
                        :children="item.children"
                        :lower-name="item.lowerName"
                        :name="item.name"
                        :path="item.path"
                    />
                </ul>
            </div>

            <div class="hidden md:order-2 md:flex">
                <div class="ml-4 flex items-center md:ml-6">
                    <p v-if="name">Welcome, {{ name }}!</p>
                    <button
                        id="theme-toggle"
                        type="button"
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        class="relative p-1 text-gray-400 hover:text-yellow-200 focus:outline-none dark:text-white dark:hover:text-gray-500 dark:ring-white"
                        @click="toggleLightDark"
                    >
                        <svg
                            v-if="isDark"
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <svg
                            v-else
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
