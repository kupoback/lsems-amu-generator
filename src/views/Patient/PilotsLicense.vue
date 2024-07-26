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

    const conversionHelperText = 'If an imperial value is entered, this will be converted to metric.'
    const conversionHeightHelper = `Example: 6'3"`

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

    //region Saved Data
    const savedFullName = ref(fullName)
    const savedPhoneNumber = ref(phoneNumber)
    const savedMedications = ref(medications)
    const savedHeight = ref(height)
    const savedWeight = ref(weight)
    const savedOximetry = ref(oximetry)
    const savedTemperature = ref(temperature)
    const savedBloodPressure = ref(bloodPressure)
    const savedAuscultation = ref(auscultation)
    const savedCoverTest = ref(coverTest)
    const savedAudioMeterTest = ref(audioMeterTest)
    const savedDrugTest = ref(drugTest)
    const savedHistoryOfDiabetes = ref(historyOfDiabetes)
    const savedHistoryOfEpilepsy = ref(historyOfEpilepsy)
    const savedHistoryOfHeartAttack = ref(historyOfHeartAttack)
    const savedHistoryOfBlackOuts = ref(historyOfBlackOuts)
    const savedHistoryOfPsychosis = ref(historyOfPsychosis)
    //endregion

    //region Actions
    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateSaaaPilots(pilotsLicenseStore().data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const copyContentsForSaaa = () => generateSaaaPilotsCert(pilotsLicenseStore().data, userData, links.saaaCert, true)
    const reset = () => {
        store.data = defaultData
        router.go('/patient-file')
    }
    //endregion
</script>

<template>
    <div class="pilots-license w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Pilot's Evaluation File</h2>
                    <div class="mt-1 leading-6 text-gray-600 dark:text-white">
                        <p>This page is used to create a pilot's evaluation file. All values will be given their appropriate suffix where applicable. The <b>BMI</b> will be auto-calculated. Do not add any metric types to fields like cm, kg, or mmHg.</p>
                    </div>
                </div>
                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Patient Information</h3>
                    </div>
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedFullName"
                            placeholder="FName LName"
                            label="Full Name"
                            size="md"
                            @focusout="updateState('fullName', savedFullName)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedPhoneNumber"
                            placeholder="5551234"
                            label="Phone Number"
                            size="md"
                            @focusout="updateState('phoneNumber', savedPhoneNumber)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedMedications"
                            placeholder="Drug listing"
                            label="Medications"
                            size="md"
                            @focusout="updateState('medications', savedMedications)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Physical Examination</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHeight"
                            placeholder="150"
                            label="Height"
                            size="md"
                            @focusout="updateState('height', savedHeight)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`${conversionHelperText} Do not use ft or in. ${conversionHeightHelper}`"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedWeight"
                            placeholder="75"
                            label="Weight"
                            size="md"
                            @focusout="updateState('weight', savedWeight)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`${conversionHelperText} Use lbs or pounds for Imperial with a space.`"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedOximetry"
                            placeholder="98%"
                            label="Oximetry"
                            size="md"
                            @focusout="updateState('oximetry', savedOximetry)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedTemperature"
                            placeholder="37C"
                            label="Temperature"
                            size="md"
                            @focusout="updateState('temperature', savedTemperature)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="conversionHelperText"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedBloodPressure"
                            placeholder="120/80"
                            label="Blood Pressure"
                            size="md"
                            @focusout="updateState('bloodPressure', savedBloodPressure)"
                        />
                        <p class="text-sm mt-1">"mmHg" will be suffixed when the data is copied.</p>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedAuscultation"
                            placeholder="Lungs are... Heart is..."
                            label="Auscultation"
                            size="md"
                            rows="3"
                            @focusout="updateState('auscultation', savedAuscultation)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedCoverTest"
                            placeholder="Exam Results..."
                            label="Eye Exam (Cover Test)"
                            size="md"
                            rows="3"
                            @focusout="updateState('coverTest', savedCoverTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedAudioMeterTest"
                            placeholder="Hearing range was..."
                            label="Audio-Meter Test"
                            size="md"
                            rows="3"
                            @focusout="updateState('audioMeterTest', savedAudioMeterTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedDrugTest"
                            placeholder="Urinalysis results were..."
                            label="Drug Test Results"
                            size="md"
                            rows="3"
                            @focusout="updateState('drugTest', savedDrugTest)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Survey</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHistoryOfDiabetes"
                            placeholder="N/A"
                            label="Have you had a diagnosis or symptoms of diabetes?"
                            size="md"
                            @focusout="updateState('historyOfDiabetes', savedHistoryOfDiabetes)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHistoryOfEpilepsy"
                            placeholder="N/A"
                            label="Have experienced any seizures or had symptoms or diagnosis of epilepsy in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfEpilepsy', savedHistoryOfEpilepsy)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHistoryOfHeartAttack"
                            placeholder="N/A"
                            label="Have you experienced a heart attack in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfHeartAttack', savedHistoryOfHeartAttack)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHistoryOfBlackOuts"
                            placeholder="N/A"
                            label="Have you had any disturbance or loss of consciousness in the last 12 months?"
                            size="md"
                            @focusout="updateState('historyOfBlackOuts', savedHistoryOfBlackOuts)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHistoryOfPsychosis"
                            placeholder="N/A"
                            label="Have you had a diagnosis or symptoms of psychosis, bipolar disorder, or other personality disorders?"
                            size="md"
                            @focusout="updateState('historyOfPsychosis', savedHistoryOfPsychosis)"
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
