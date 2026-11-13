<script setup>
    import {ref, watch} from 'vue'
    import {RouterLink, useRoute} from 'vue-router'
    import {onClickOutside} from '@vueuse/core'

    defineProps({
        children: {
            type: Array,
            default: () => [],
        },
        lowerName: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        path: {
            type: String,
            default: '',
        },
    })

    const isOpen = ref(false)
    const root = ref(null)
    const route = useRoute()

    onClickOutside(root, () => (isOpen.value = false))
    watch(() => route.fullPath, () => (isOpen.value = false))
</script>

<template>
    <li
        ref="root"
        class="flex items-center"
        @keydown.esc="isOpen = false"
    >
        <div
            v-if="children.length"
            class="relative w-full md:w-auto"
        >
            <button
                :id="lowerName"
                type="button"
                aria-haspopup="true"
                :aria-expanded="isOpen"
                :aria-controls="`${lowerName}-children`"
                class="flex items-center justify-between w-full py-2 px-3 rounded text-sm font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-gray-400 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                @click="isOpen = !isOpen"
            >
                {{ name }}
                <svg
                    class="w-2.5 h-2.5 ms-2.5 transition-transform"
                    :class="{'rotate-180': isOpen}"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <div
                v-show="isOpen"
                :id="`${lowerName}-children`"
                class="z-10 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:absolute md:left-0 md:top-full dark:bg-gray-700 dark:divide-gray-600"
            >
                <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    :aria-labelledby="lowerName"
                >
                    <li
                        v-for="child in children"
                        :key="child.path"
                    >
                        <RouterLink
                            :to="child.path"
                            class="block rounded-md p-2 md:px-3 md:py-2 text-sm font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            {{ child.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <RouterLink
            v-else
            :to="path"
            class="rounded-md p-2 md:px-3 md:py-2 text-sm font-bold md:hover:text-gray-400 dark:text-white md:dark:hover:text-gray-400"
        >
            {{ name }}
        </RouterLink>
    </li>
</template>
