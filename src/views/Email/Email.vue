<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {emailStore} from '@stores/email'
    import {generateEmail} from '@templates/email/email'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
    } from "@/util/css-classes"

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = emailStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateEmail, links.email)
</script>

<template>
    <div class="email w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create An Email"
                    body="This page is used to create a formatted email."
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
