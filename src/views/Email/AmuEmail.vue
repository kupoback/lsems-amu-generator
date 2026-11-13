<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {amuEmailStore} from '@stores/amu-email'
    import {generateAmuEmail} from '@templates/email/amu-email'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
    } from "@/util/css-classes"

    /**
     * Vue Components
     */
    import {FwbButton, FwbCheckbox, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = amuEmailStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateAmuEmail, links.email)
</script>

<template>
    <div class="email w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create An AMU Email"
                    body="This page is used to create a formatted email from AMU."
                />
                <div class="pb-4">
                    <div :class=columnWrapper>
                        <!-- Subject Line -->
                        <fieldset :class=halfLeftColumn>
                            <FwbInput
                                v-model="data.subject"
                                placeholder="Subject Line"
                                label="Subject Line"
                                size="md"
                            />
                        </fieldset>
                        <!-- To -->
                        <fieldset :class=halfRightColumn>
                            <FwbInput
                                v-model="data.to"
                                placeholder="John Doe"
                                label="Email To"
                                size="md"
                                autocomplete="off"
                            />
                        </fieldset>
                    </div>
                    <!-- Body of your email -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.body"
                            placeholder="Body copy..."
                            label="Email Body"
                            size="lg"
                            rows="8"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`You can include BBCode tags in here. Just be sure to close them`"
                        />
                    </fieldset>

                    <div :class="columnWrapper">
                        <h3 class="mb-4 w-full">Adds the follow from Settings to the bottom of your email automatically</h3>
                        <fieldset :class="halfLeftColumn">
                        <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Append Date Schedule from Settings
                            </p>
                            <FwbCheckbox
                                v-model="data.addDate"
                                label="Append Your Date Schedule to Email"
                                />
                        </fieldset>
                        <fieldset :class="halfRightColumn">
                        <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Append Phone Number from Settings
                            </p>
                            <FwbCheckbox
                                v-model="data.addPhone"
                                label="Append Your Phone Number to Call/Text"
                                />
                        </fieldset>
                    </div>
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
