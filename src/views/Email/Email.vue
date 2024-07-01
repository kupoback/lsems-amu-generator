<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {emailStore} from '@/stores/email'
    import {generateEmail} from '@/templates/email/email'
    import {reactive} from 'vue'
    import router from '@/router'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'

    const {links, userData} = globalStore()
    const store = emailStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {subject, to, body} = reactive(data)

    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateEmail(data, userData, links.email, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/email')
    }
</script>

<template>
    <div class="email w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create An Email</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This page is used to create a formatted email. </p>
                </div>
                <div class="pb-4">
                    <div class="flex">
                        <!-- Subject Line -->
                        <fieldset class="w-6/12 pr-2">
                            <FwbInput
                                v-model="subject"
                                placeholder="Subject Line"
                                label="Subject Line"
                                size="md"
                                @focusout="updateState('subject', subject)"
                            />
                        </fieldset>
                        <!-- To -->
                        <fieldset class="w-6/12 pl-2">
                            <FwbInput
                                v-model="to"
                                placeholder="John Doe"
                                label="Email To"
                                size="md"
                                @focusout="updateState('to', to)"
                            />
                        </fieldset>
                    </div>
                    <!-- Reason for the Visit -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="body"
                            placeholder="Body copy..."
                            label="Email Body"
                            size="lg"
                            rows="8"
                            @focusout="updateState('body', body)"
                        />
                    </fieldset>
                </div>

                <div class="max-w-2xl flex md:block justify-between">
                    <FwbButton
                        color="default"
                        size="lg"
                        class="md:mr-4"
                        @click="copyContentsForGov"
                    >
                        Copy to Gov
                    </FwbButton>
                    <FwbButton
                        color="yellow"
                        size="lg"
                        class="md:mx-4"
                        @click="copyContents"
                    >
                        Copy
                    </FwbButton>
                    <FwbButton
                        color="red"
                        size="lg"
                        class="md:ml-4"
                        @click="reset"
                    >
                        Clear
                    </FwbButton>
                </div>
            </div>
            <div id="output"></div>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss"></style>
