<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {methadoneStore} from '@stores/methadone'
    import {generateMethadone} from '@templates/prescriptions/methadone'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
        thirdLeftColumn,
        thirdMiddleColumn,
        thirdRightColumn,
    } from "@/util/css-classes"

    /**
     * Vue Components
     */
    import {FwbButton, FwbCheckbox, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = methadoneStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateMethadone, links.prescription)
</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Methadone Prescription"
                    body="This page is used to create a prescription for methadone."
                />
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> The dates will be converted to UTC </p>
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
                        <!-- Phone Number -->
                        <fieldset :class=halfRightColumn>
                            <FwbInput
                                v-model="data.phoneNumber"
                                placeholder="5551234"
                                label="Patients Phone Number"
                                size="md"
                            />
                        </fieldset>
                    </div>
                    <!-- Drugs Found -->
                    <fieldset class="my-2 md:my-8">
                        <FwbTextarea
                            v-model="data.drugsFound"
                            placeholder="Patient tested positive for..."
                            label="Drugs Found"
                            size="md"
                            rows="2"
                        />
                    </fieldset>
                    <div :class=columnWrapper>
                        <!-- Prescription -->
                        <fieldset :class=thirdLeftColumn>
                            <FwbInput
                                v-model="data.prescription"
                                placeholder="Methadone"
                                label="Prescription"
                                size="md"
                            />
                        </fieldset>
                        <!-- Amount Prescribed -->
                        <fieldset :class=thirdMiddleColumn>
                            <FwbInput
                                v-model="data.amountIssued"
                                placeholder="10"
                                label="Amount Prescribed"
                                size="md"
                            />
                        </fieldset>
                        <fieldset :class=thirdRightColumn>
                            <p class="block mb-5 text-sm font-medium text-gray-900 dark:text-white">
                                Was the patient educated?
                            </p>
                            <FwbCheckbox
                                v-model="data.educated"
                                label="Patient Educated"
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
