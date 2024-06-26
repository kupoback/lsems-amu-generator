<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from "@/stores/global";
    import {patientFileStore} from "@/stores/patient-file";
    import {generatePatientFile} from "@/templates/patient/patient-file";
    import {reactive, ref} from "vue";
    import router from "@/router";

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from "flowbite-vue";
    import VueTailwindDatepicker from "vue-tailwind-datepicker";
    import InputField from "@component/FormComponents/InputField.vue";
    import FormButton from "@component/FormComponents/FormButton.vue";

    const {links, userData} = globalStore();
    const store = patientFileStore();
    const {
        data,
        defaultData,
    } = reactive({
        ...store.$state,
    });

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
        bmi,
        coverTest,
        refractionTest,
        audioMeterTest,
        additionalNotes,
        completeBloodCount,
        xRay,
        ecg,
        urinalysis,
    } = reactive(data)

    const formatter = ref({
        date: 'DD/MMM/YYYY',
        month: "MMM"
    })

    const updateState = (field, value) => store.data[field] = value
    const setupContents = (newPage = false) => generatePatientFile(data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/patient-file')
    };

    const conversionHelperText = "If an imperial value is entered, this will be converted to metric."
</script>

<template>
    <div class="patient-file w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Patient File</h2>
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white">
                        This page is used to create a patient file.
                    </p>
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white">
                        All values will be given their appropriate suffix where applicable. The <b>BMI</b> will be
                        auto-calculated.
                    </p>
                </div>
                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">General
                            Information</h3>
                    </div>
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput v-model="fullName"
                                  placeholder="FName LName"
                                  label="Full Name"
                                  size="md"
                                  @focusout="updateState('fullName', fullName)"
                        />
                    </fieldset>
                    <!-- Date of Birth -->
                    <fieldset class="my-8">
                        <label for="dob"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of
                            Birth</label>
                        <VueTailwindDatepicker
                            v-model="dateOfBirth"
                            id="dob"
                            placeholder="DD/MMM/YYYY"
                            as-single
                            :formatter="formatter"
                            @focusout="updateState('dateOfBirth', dateOfBirth)"/>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="placeOfBirth"
                                  placeholder="Place of Birth"
                                  label="Place of Birth"
                                  size="md"
                                  @focusout="updateState('placeOfBirth', placeOfBirth)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="address"
                                  placeholder="Address"
                                  label="Address"
                                  size="md"
                                  @focusout="updateState('address', address)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="phoneNumber"
                                  placeholder="5551234"
                                  label="Phone Number"
                                  size="md"
                                  @focusout="updateState('phoneNumber', phoneNumber)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="profession"
                                  placeholder="EMT"
                                  label="Profession"
                                  size="md"
                                  @focusout="updateState('profession', profession)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="height"
                                  placeholder="150cm"
                                  label="Height"
                                  size="md"
                                  @focusout="updateState('height', height)"
                        />
                        <p class="text-sm mt-1"
                           v-html="`${conversionHelperText} Do not use ft or in.`"/>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="weight"
                                  placeholder="75"
                                  label="Weight"
                                  size="md"
                                  @focusout="updateState('weight', weight)"
                        />
                        <p class="text-sm mt-1"
                           v-html="`${conversionHelperText} Use lbs or pounds for Imperial.`"/>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="bloodType"
                                  placeholder="AB-"
                                  label="Blood Type"
                                  size="md"
                                  @focusout="updateState('bloodType', bloodType)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="allergies"
                                  placeholder="List of allergies..."
                                  label="Allergies"
                                  size="md"
                                  @focusout="updateState('allergies', allergies)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Regular Examination</h3>
                    </div>
                    <fieldset class="my-8">
                        <FwbTextarea v-model="generalScreening"
                                     placeholder="Enter general screening..."
                                     label="General Screening"
                                     size="md"
                                     @focusout="updateState('narrative', generalScreening)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="ecgBand"
                                  placeholder="55"
                                  type="number"
                                  label="ECG Band"
                                  size="md"
                                  @focusout="updateState('ecgBand', ecgBand)"
                        />
                        <p class="text-sm mt-1">"BMP" will be suffixed when the data is copied.</p>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="oximetry"
                                  placeholder="98%"
                                  label="Oximetry"
                                  size="md"
                                  @focusout="updateState('oximetry', oximetry)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="temperature"
                                  placeholder="37"
                                  label="Temperature"
                                  type="number"
                                  size="md"
                                  @focusout="updateState('temperature', temperature)"
                        />
                        <p class="text-sm mt-1"
                           v-html="conversionHelperText"/>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="bloodPressure"
                                  placeholder="120/80"
                                  label="Blood Pressure"
                                  size="md"
                                  @focusout="updateState('bloodPressure', bloodPressure)"
                        />
                        <p class="text-sm mt-1">"mmHg" will be suffixed when the data is copied.</p>
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea v-model="additionalNotes"
                                     placeholder="Auscultation notes"
                                     label="Auscultation"
                                     size="md"
                                     rows="2"
                                     @focusout="updateState('auscultation', auscultation)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea v-model="coverTest"
                                     placeholder="Exam Results..."
                                     label="Eye Exam (Cover Test)"
                                     size="md"
                                     @focusout="updateState('coverTest', coverTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea v-model="refractionTest"
                                     placeholder="Refraction results..."
                                     label="Refraction Test"
                                     size="md"
                                     @focusout="updateState('refractionTest', refractionTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput v-model="audioMeterTest"
                                  placeholder="Hearing range was..."
                                  label="Audio-Meter Test"
                                  size="md"
                                  @focusout="updateState('audioMeterTest', audioMeterTest)"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea v-model="additionalNotes"
                                     placeholder="Additional information"
                                     label="Additional Notes"
                                     size="md"
                                     @focusout="updateState('additionalNotes', additionalNotes)"
                        />
                    </fieldset>
                </div>

                <div class="pb-4">
                    <div class="mx-auto">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white underline">Pre-Operative Tests</h3>
                    </div>

                    <fieldset class="my-8">
                        <FwbTextarea v-model="completeBloodCount"
                                     placeholder="Test results indicate..."
                                     label="Complete Blood Count"
                                     size="md"
                                     @focusout="updateState('completeBloodCount', completeBloodCount)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea v-model="xRay"
                                     placeholder="Test results indicate..."
                                     label="X-Ray Test"
                                     size="md"
                                     @focusout="updateState('xRay', xRay)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea v-model="ecg"
                                     placeholder="Test results indicate..."
                                     label="ECG Test"
                                     size="md"
                                     @focusout="updateState('ecg', ecg)"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea v-model="urinalysis"
                                     placeholder="Test results indicate..."
                                     label="Urinalysis Test"
                                     size="md"
                                     @focusout="updateState('urinalysis', urinalysis)"
                        />
                    </fieldset>
                </div>

                <div class="max-w-2xl flex md:block justify-between">
                    <FwbButton color="default"
                               size="lg"
                               class="md:mr-4"
                               @click="copyContentsForGov">
                        Copy to Gov
                    </FwbButton>
                    <FwbButton color="yellow"
                               size="lg"
                               class="md:mx-4"
                               @click="copyContents">
                        Copy
                    </FwbButton>
                    <FwbButton color="red"
                               size="lg"
                               class="md:ml-4"
                               @click="reset">
                        Clear
                    </FwbButton>
                </div>
            </div>
            <div id="output"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "pinia";
    import {patientFileStore} from "@/stores/patient-file";

    export default {
        computed: {
            ...mapState(patientFileStore, {})
        }
    }
</script>

<style scoped lang="scss">

</style>
