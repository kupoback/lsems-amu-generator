<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {amuEmailStore} from '@/stores/amu-email'
    import {generateAmuEmail} from '@/templates/email/amu-email'
    import {reactive, ref} from 'vue'
    import router from '@/router'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'

    const {links, userData} = globalStore()
    const store = amuEmailStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {subject, to, body} = reactive(data)

    const savedSubject = ref(subject)

    const updateSubject = () => (store.data.subject = savedSubject.value)

    // const updateState = (field, value) => (store.data[field] = value)
    const updateState = (field, value) => (alert(value))
    const setupContents = (newPage = false) => generateAmuEmail(data, userData, links.email, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/amu-email')
    }
</script>

<template>
    <div class="email w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create An AMU Email</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This page is used to create a formatted email from AMU. </p>
                </div>
                <div class="pb-4">
                    <div class="flex">
                        <!-- Subject Line -->
                        <fieldset class="w-6/12 pr-2">
                            <FwbInput
                                v-model="savedSubject"
                                placeholder="Subject Line"
                                label="Subject Line"
                                size="md"
                                @keydown.enter="updateSubject"
                                @focusout="updateSubject"
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
