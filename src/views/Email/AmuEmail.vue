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
    const savedTo = ref(to)
    const savedBody = ref(body)

    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateAmuEmail(amuEmailStore().data, userData, links.email, newPage)
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
                                @keydown.enter="updateState('subject', savedSubject)"
                                @focusout="updateState('subject', savedSubject)"
                            />
                        </fieldset>
                        <!-- To -->
                        <fieldset class="w-6/12 pl-2">
                            <FwbInput
                                v-model="savedTo"
                                placeholder="John Doe"
                                label="Email To"
                                size="md"
                                @focusout="updateState('to', savedTo)"
                            />
                        </fieldset>
                    </div>
                    <!-- Body of your email -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedBody"
                            placeholder="Body copy..."
                            label="Email Body"
                            size="lg"
                            rows="8"
                            @focusout="updateState('body', savedBody)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`You can include BBCode tags in here. Just be sure to close them`"
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
