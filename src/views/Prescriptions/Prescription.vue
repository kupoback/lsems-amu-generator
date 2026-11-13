<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {prescriptionStore} from '@stores/prescription'
    import {generatePrescription} from '@templates/prescriptions/prescription'
    import {useFormPage} from '@/composables/useFormPage'
    import {dateTimeFormat} from '@util/date-formats'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
    } from "@/util/css-classes"

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = prescriptionStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generatePrescription, links.prescription)
</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Prescription"
                    body="This page is used to create a prescription."
                />
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> The dates will be converted to UTC </p>
                    <div :class=columnWrapper>
                        <!-- Start Date -->
                        <fieldset :class=halfLeftColumn>
                            <label
                                for="start-date"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Start Date</label
                            >
                            <VueTailwindDatepicker
                                v-model="data.startDate"
                                id="start-date"
                                placeholder="DD/MMM/YYYY HH:mm"
                                as-single
                                :formatter="dateTimeFormat"
                            />
                        </fieldset>
                        <!-- Expiration Date -->
                        <fieldset :class=halfRightColumn>
                            <label
                                for="end-date"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >End Date</label
                            >
                            <VueTailwindDatepicker
                                v-model="data.endDate"
                                id="end-date"
                                placeholder="DD/MMM/YYYY HH:mm"
                                as-single
                                :formatter="dateTimeFormat"
                            />
                        </fieldset>
                    </div>
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
                    <!-- Diagnosis -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.diagnosis"
                            placeholder="Patient has..."
                            label="Diagnosis for prescription"
                            size="md"
                        />
                    </fieldset>
                    <!-- Prescription -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.prescription"
                            placeholder="Medication: strength"
                            label="Medication(s) Prescribed"
                            size="md"
                            rows="4"
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
