<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {publicRequestStore} from '@stores/public-request'
    import {generatePublicRequest} from '@templates/patient/public-request'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
    } from "@util/css-classes"

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = publicRequestStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generatePublicRequest, links.publicRequest)

    //endregion
</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100 pb-20">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Public Request"
                    body="This page is used to create a public request response."
                />
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> Date and time will be converted to UTC from your local timezone. You can manually edit the time if you wish. Please use 24 hour formats. </p>
                    <div :class=columnWrapper>
                        <!-- Full Name -->
                        <fieldset :class=halfLeftColumn>

                            <FwbInput
                                v-model="data.fullName"
                                placeholder="FName LName"
                                label="Patients Name"
                                size="md"
                            />
                        </fieldset>
                        <!-- Contact Method -->
                        <fieldset :class=halfRightColumn>
                            <FwbInput
                                v-model="data.contactMethod"
                                placeholder="Email"
                                label="Contact Type"
                                size="md"
                            />
                        </fieldset>
                    </div>
                    <!-- Details -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.details"
                            placeholder="Patient has..."
                            label="Contact Details"
                            size="md"
                            row="4"
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
