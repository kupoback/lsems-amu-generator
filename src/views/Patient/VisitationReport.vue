<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {visitationStore} from '@stores/visitation'
    import {generateVisitationReport} from '@templates/patient/visitation-report'
    import {useFormPage} from '@/composables/useFormPage'
    import {dateFormat} from '@util/date-formats'

    /**
     * Vue components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

    const {links} = globalStore()
    const store = visitationStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateVisitationReport, links.patientFile)
</script>

<template>
    <div class="visitation-report w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Visitation Report"
                    body="This page is used to create a visitation report."
                />
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> The dates will be converted to UTC, time will not be added. </p>
                    <!-- Date of Visit -->
                    <fieldset class="my-8">
                        <label
                            for="dob"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Date of Visit</label>
                        <VueTailwindDatepicker
                            v-model="data.dateOfVisit"
                            id="dob"
                            placeholder="DD/MMM/YYYY"
                            as-single
                            :formatter="dateFormat"
                        />
                    </fieldset>
                    <!-- Reason for Visit -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.reasonForVisit"
                            placeholder="Patient stated that..."
                            label="Reason for the Visit"
                            size="md"
                        />
                    </fieldset>
                    <!-- Diagnosis -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.diagnosis"
                            placeholder="Patient is diagnosed with..."
                            label="Patient Diagnosis"
                            size="md"
                        />
                    </fieldset>
                    <!-- Personal Present -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="data.personalPresent"
                            placeholder="Doctor Names..."
                            label="Personal Present"
                            size="md"
                        />
                    </fieldset>
                    <!-- Visit Report Summary -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.visitReport"
                            placeholder="Visit summary..."
                            label="Visit Report"
                            size="md"
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
