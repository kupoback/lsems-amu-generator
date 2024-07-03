<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {patientFileStore} from '@/stores/patient-file'
    import {generatePatientFile} from '@/templates/patient/patient-file'
    import {reactive, ref} from 'vue'
    import router from '@/router'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'

    const conversionHelperText = 'If an imperial value is entered, this will be converted to metric.'

    const {links, userData} = globalStore()
    const store = patientFileStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {
        fullName,
        dateOfBirth,
        placeOfBirth,
        address,
        phoneNumber,
        profession,
        height,
        weight,
        bloodType,
        allergies,
        generalScreening,
        ecgBand,
        oximetry,
        temperature,
        bloodPressure,
        auscultation,
        coverTest,
        refractionTest,
        audioMeterTest,
        additionalNotes,
        completeBloodCount,
        xRay,
        ecg,
        urinalysis,
    } = reactive(data)

    //region Saved Data
    const formatter = ref({
        date: 'DD/MMM/YYYY',
        month: 'MMM',
    })
    const savedFullName = ref(fullName)
    const savedDateOfBirth = ref(dateOfBirth)
    const savedPlaceOfBirth = ref(placeOfBirth)
    const savedAddress = ref(address)
    const savedPhoneNumber = ref(phoneNumber)
    const savedProfession = ref(profession)
    const savedHeight = ref(height)
    const savedWeight = ref(weight)
    const savedBloodType = ref(bloodType)
    const savedAllergies = ref(allergies)
    const savedGeneralScreening = ref(generalScreening)
    const savedEcgBand = ref(ecgBand)
    const savedOximetry = ref(oximetry)
    const savedTemperature = ref(temperature)
    const savedBloodPressure = ref(bloodPressure)
    const savedAuscultation = ref(auscultation)
    const savedCoverTest = ref(coverTest)
    const savedRefractionTest = ref(refractionTest)
    const savedAutoMeterTest = ref(audioMeterTest)
    const savedAdditionalNotes = ref(additionalNotes)
    const savedCompleteBloodCount = ref(completeBloodCount)
    const savedXRay = ref(xRay)
    const savedEcg = ref(ecg)
    const savedUrinalysis = ref(urinalysis)
    //endregion

    //region Actions
    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generatePatientFile(data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/patient-file')
    }
    //endregion
</script>

<template>
    <div class="patient-file w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Patient File</h2>
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> This page is used to create a patient file. </p>
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> All values will be given their appropriate suffix where applicable. The <b>BMI</b> will be auto-calculated. </p>
                </div>
                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">General Information</h3>
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
                    <!-- Date of Birth -->
                    <fieldset class="my-8">
                        <label
                            for="dob"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Date of Birth</label
                        >
                        <VueTailwindDatepicker
                            v-model="savedDateOfBirth"
                            id="dob"
                            placeholder="DD/MMM/YYYY"
                            as-single
                            :formatter="formatter"
                            @focusout="updateState('dateOfBirth', savedDateOfBirth)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedPlaceOfBirth"
                            placeholder="Place of Birth"
                            label="Place of Birth"
                            size="md"
                            @focusout="updateState('placeOfBirth', savedPlaceOfBirth)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedAddress"
                            placeholder="Address"
                            label="Address"
                            size="md"
                            @focusout="updateState('address', savedAddress)"
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
                            v-model="savedProfession"
                            placeholder="EMT"
                            label="Profession"
                            size="md"
                            @focusout="updateState('profession', savedProfession)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedHeight"
                            placeholder="150cm"
                            label="Height"
                            size="md"
                            @focusout="updateState('height', savedHeight)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`${conversionHelperText} Do not use ft or in.`"
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
                            v-model="savedBloodType"
                            placeholder="AB-"
                            label="Blood Type"
                            size="md"
                            @focusout="updateState('bloodType', savedBloodType)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedAllergies"
                            placeholder="List of allergies..."
                            label="Allergies"
                            size="md"
                            @focusout="updateState('allergies', savedAllergies)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Regular Examination</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedGeneralScreening"
                            placeholder="Enter general screening..."
                            label="General Screening"
                            size="md"
                            @focusout="updateState('narrative', savedGeneralScreening)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedEcgBand"
                            placeholder="55"
                            type="number"
                            label="ECG Band"
                            size="md"
                            @focusout="updateState('ecgBand', savedEcgBand)"
                        />
                        <p class="text-sm mt-1">"BMP" will be suffixed when the data is copied.</p>
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
                            placeholder="37"
                            label="Temperature"
                            type="number"
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
                            placeholder="Auscultation notes"
                            label="Auscultation"
                            size="md"
                            rows="2"
                            @focusout="updateState('auscultation', savedAuscultation)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedCoverTest"
                            placeholder="Exam Results..."
                            label="Eye Exam (Cover Test)"
                            size="md"
                            @focusout="updateState('coverTest', savedCoverTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedRefractionTest"
                            placeholder="Refraction results..."
                            label="Refraction Test"
                            size="md"
                            @focusout="updateState('refractionTest', savedRefractionTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedAutoMeterTest"
                            placeholder="Hearing range was..."
                            label="Audio-Meter Test"
                            size="md"
                            @focusout="updateState('audioMeterTest', savedAutoMeterTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedAdditionalNotes"
                            placeholder="Additional information"
                            label="Additional Notes"
                            size="md"
                            @focusout="updateState('additionalNotes', savedAdditionalNotes)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Pre-Operative Tests</h3>
                    </div>

                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedCompleteBloodCount"
                            placeholder="Test results indicate..."
                            label="Complete Blood Count"
                            size="md"
                            @focusout="updateState('completeBloodCount', savedCompleteBloodCount)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedXRay"
                            placeholder="Test results indicate..."
                            label="X-Ray Test"
                            size="md"
                            @focusout="updateState('xRay', savedXRay)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedEcg"
                            placeholder="Test results indicate..."
                            label="ECG Test"
                            size="md"
                            @focusout="updateState('ecg', savedEcg)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedUrinalysis"
                            placeholder="Test results indicate..."
                            label="Urinalysis Test"
                            size="md"
                            @focusout="updateState('urinalysis', savedUrinalysis)"
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
