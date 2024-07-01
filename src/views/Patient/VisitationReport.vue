<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {visitationStore} from '@/stores/visitation'
    import {generateVisitationReport} from '@/templates/patient/visitation-report'
    import {reactive, ref} from 'vue'
    import router from '@/router'

    /**
     * Vue components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'

    const {links, userData} = globalStore()
    const store = visitationStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {dateOfVisit, reasonForVisit, diagnosis, personalPresent, visitReport} = reactive(data)

    const formatter = ref({
        date: 'DD/MMM/YYYY',
        month: 'MMM',
    })

    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateVisitationReport(data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/visitation-report')
    }
</script>

<template>
    <div class="visitation-report w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Visitation Report</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This page is used to create a visitation report. </p>
                </div>
                <div class="pb-4">
                    <!-- Date of Visit -->
                    <fieldset class="my-8">
                        <label
                            for="dob"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Date of Visit</label>
                        <VueTailwindDatepicker
                            v-model="dateOfVisit"
                            id="dob"
                            placeholder="DD/MMM/YYYY"
                            as-single
                            :formatter="formatter"
                            @focusout="updateState('dateOfVisit', dateOfVisit)"
                        />
                    </fieldset>
                    <!-- Reason for Visit -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="reasonForVisit"
                            placeholder="Patient stated that..."
                            label="Reason for the Visit"
                            size="md"
                            @focusout="updateState('reasonForVisit', reasonForVisit)"
                        />
                    </fieldset>
                    <!-- Diagnosis -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="diagnosis"
                            placeholder="Patient is diagnosed with..."
                            label="Patient Diagnosis"
                            size="md"
                            @focusout="updateState('diagnosis', diagnosis)"
                        />
                    </fieldset>
                    <!-- Personal Present -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="personalPresent"
                            placeholder="Doctor Names..."
                            label="Personal Present"
                            size="md"
                            @focusout="updateState('personalPresent', personalPresent)"
                        />
                    </fieldset>
                    <!-- Visit Report Summary -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="visitReport"
                            placeholder="Visit summary..."
                            label="Visit Report"
                            size="md"
                            @focusout="updateState('visitReport', visitReport)"
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
