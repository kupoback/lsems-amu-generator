<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {pilotsLicenseStore} from '@/stores/pilots-license'
    import {generateSaaaPilots} from '@/templates/patient/saaa-pilots'
    import {generateSaaaPilotsCert} from '@/templates/patient/saaa-pilots-cert'
    import {reactive, ref} from 'vue'
    import router from '@/router'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'

    const {links, userData} = globalStore()
    const store = pilotsLicenseStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {
        fullName,
        phoneNumber,
        medications,
        height,
        weight,
        oximetry,
        temperature,
        bloodPressure,
        auscultation,
        coverTest,
        audioMeterTest,
        drugTest,
        historyOfDiabetes,
        historyOfEpilepsy,
        historyOfHeartAttack,
        historyOfBlackOuts,
        historyOfPsychosis,
    } = reactive(data)

    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateSaaaPilots(data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const copyContentsForSaaa = () => generateSaaaPilotsCert(data, userData, links.saaaCert, true)
    const reset = () => {
        store.data = defaultData
        router.go('/patient-file')
    }

    const conversionHelperText = 'If an imperial value is entered, this will be converted to metric.'
</script>

<template>
    <div class="pilots-license w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Pilot's Evaluation File</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This page is used to create a pilot's evaluation file. </p>
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> All values will be given their appropriate suffix where applicable. The <b>BMI</b> will be auto-calculated. </p>
                </div>
                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Patient Information</h3>
                    </div>
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="fullName"
                            placeholder="FName LName"
                            label="Full Name"
                            size="md"
                            @focusout="updateState('fullName', fullName)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="phoneNumber"
                            placeholder="5551234"
                            label="Phone Number"
                            size="md"
                            @focusout="updateState('phoneNumber', phoneNumber)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="medications"
                            placeholder="Drug listing"
                            label="Medications"
                            size="md"
                            @focusout="updateState('medications', medications)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Physical Examination</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="height"
                            placeholder="150cm"
                            label="Height"
                            size="md"
                            @focusout="updateState('height', height)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`${conversionHelperText} Do not use ft or in.`"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="weight"
                            placeholder="75"
                            label="Weight"
                            size="md"
                            @focusout="updateState('weight', weight)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`${conversionHelperText} Use lbs or pounds for Imperial.`"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="oximetry"
                            placeholder="98%"
                            label="Oximetry"
                            size="md"
                            @focusout="updateState('oximetry', oximetry)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="temperature"
                            placeholder="37C"
                            label="Temperature"
                            size="md"
                            @focusout="updateState('temperature', temperature)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="conversionHelperText"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="bloodPressure"
                            placeholder="120/80"
                            label="Blood Pressure"
                            size="md"
                            @focusout="updateState('bloodPressure', bloodPressure)"
                        />
                        <p class="text-sm mt-1">"mmHg" will be suffixed when the data is copied.</p>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="auscultation"
                            placeholder="Lungs are... Heart is..."
                            label="Auscultation"
                            size="md"
                            @focusout="updateState('auscultation', auscultation)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="coverTest"
                            placeholder="Exam Results..."
                            label="Eye Exam (Cover Test)"
                            size="md"
                            @focusout="updateState('coverTest', coverTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="audioMeterTest"
                            placeholder="Hearing range was..."
                            label="Audio-Meter Test"
                            size="md"
                            @focusout="updateState('audioMeterTest', audioMeterTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="drugTest"
                            placeholder="Urinalysis results were..."
                            label="Drug Test Results"
                            size="md"
                            @focusout="updateState('drugTest', drugTest)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Survey</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="historyOfDiabetes"
                            placeholder="N/A"
                            label="Have you had a diagnosis or symptoms of diabetes?"
                            size="md"
                            @focusout="updateState('historyOfDiabetes', historyOfDiabetes)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="historyOfEpilepsy"
                            placeholder="N/A"
                            label="Have experienced any seizures or had symptoms or diagnosis of epilepsy in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfEpilepsy', historyOfEpilepsy)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="historyOfHeartAttack"
                            placeholder="N/A"
                            label="Have you experienced a heart attack in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfHeartAttack', historyOfHeartAttack)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="historyOfBlackOuts"
                            placeholder="N/A"
                            label="Have you had any disturbance or loss of consciousness in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfBlackOuts', historyOfBlackOuts)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="historyOfPsychosis"
                            placeholder="N/A"
                            label="Have you had a diagnosis or symptoms of psychosis, bipolar disorder, or other personality disorders?"
                            size="md"
                            @focusout="updateState('historyOfPsychosis', historyOfPsychosis)"
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
                        color="green"
                        size="lg"
                        class="md:mx-4"
                        @click="copyContentsForSaaa"
                    >
                        Copy Certificate
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
