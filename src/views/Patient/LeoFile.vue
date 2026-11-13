<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {leoPatientFileStore} from '@stores/leo-patient-file'
    import {generatePatientFile} from '@templates/patient/leo-patient'
    import {convertHeightToCm, convertWeightToKg} from '@util/mixins'
    import {useFormPage} from '@/composables/useFormPage'
    import {conversionHeightHelper, conversionHelperText} from '@util/helper-text'
    import {columnWrapper, halfLeftColumn, halfRightColumn, thirdLeftColumn, thirdMiddleColumn, thirdRightColumn} from '@util/css-classes'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'
    import SectionTitle from '@component/SectionTitle/SectionTitle.vue'

    const {links} = globalStore()
    const store = leoPatientFileStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generatePatientFile, links.patientFile)
</script>

<template>
    <div class="patient-file w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="LEO Examination File"
                    body="This page is used to for Law Enforcement Examinations. All values will be given their appropriate suffix where applicable. The <b>BMI</b> will be auto-calculated. Do not add any metric types to fields like cm, kg, or mmHg."
                />
                <div class="pb-4">
                    <SectionTitle title="General Information" />
                    <div :class="columnWrapper">
                        <!-- Full Name -->
                        <fieldset :class="thirdLeftColumn">
                            <FwbInput
                                v-model="data.fullName"
                                placeholder="FName LName"
                                label="Full Name"
                                size="md"
                            />
                        </fieldset>
                        <!-- Phone Number -->
                        <fieldset :class="thirdMiddleColumn">
                            <FwbInput
                                v-model="data.phoneNumber"
                                placeholder="5551234"
                                label="Phone Number"
                                size="md"
                            />
                        </fieldset>
                        <!-- Profession -->
                        <fieldset :class="thirdRightColumn">
                            <FwbInput
                                v-model="data.profession"
                                placeholder="EMT"
                                label="Profession"
                                size="md"
                            />
                        </fieldset>
                    </div>
                    <div :class="columnWrapper">
                        <!-- Height -->
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="data.height"
                                placeholder="150"
                                label="Height"
                                size="md"
                                @focusout="data.height = convertHeightToCm(data.height)"
                            />
                            <p
                                class="text-sm mt-1"
                                v-html="`${conversionHelperText} Do not use ft or in. ${conversionHeightHelper}`"
                            />
                        </fieldset>
                        <!-- Weight -->
                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="data.weight"
                                placeholder="75"
                                label="Weight"
                                size="md"
                                @focusout="data.weight = convertWeightToKg(data.weight)"
                            />
                            <p
                                class="text-sm mt-1"
                                v-html="`${conversionHelperText} Use lbs or pounds for Imperial with a space.`"
                            />
                        </fieldset>
                    </div>
                    <div :class="columnWrapper">
                        <!-- Blood Type -->
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="data.bloodType"
                                placeholder="AB-"
                                label="Blood Type"
                                size="md"
                            />
                        </fieldset>
                        <!-- Allergies -->
                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="data.allergies"
                                placeholder="List of allergies..."
                                label="Allergies"
                                size="md"
                            />
                        </fieldset>
                    </div>
                </div>

                <div class="pb-4">
                    <SectionTitle title="Physical Examination" />
                    <div :class="columnWrapper">
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="data.ecgBand"
                                placeholder="55"
                                min="0"
                                step="1"
                                type="number"
                                label="ECG Band"
                                size="md"
                            />
                            <p class="text-sm mt-1">"BPM" will be suffixed when the data is copied.</p>
                        </fieldset>
                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="data.oximetry"
                                placeholder="98"
                                label="Oximetry"
                                size="md"
                            />
                        </fieldset>
                    </div>
                    <div :class="columnWrapper">
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="data.temperature"
                                placeholder="37"
                                label="Temperature"
                                type="number"
                                min="0"
                                step="1"
                                size="md"
                            />
                            <p
                                class="text-sm mt-1"
                                v-html="conversionHelperText"
                            />
                        </fieldset>
                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="data.bloodPressure"
                                placeholder="120/80"
                                label="Blood Pressure"
                                size="md"
                            />
                            <p class="text-sm mt-1">"mmHg" will be suffixed when the data is copied.</p>
                        </fieldset>
                    </div>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.auscultation"
                            placeholder="Auscultation notes"
                            label="Auscultation"
                            size="md"
                            rows="4"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.coverTest"
                            placeholder="Exam Results..."
                            label="Eye Exam (Cover Test)"
                            size="md"
                            rows="3"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="data.audioMeterTest"
                            placeholder="Hearing range was..."
                            label="Audio-Meter Test"
                            size="md"
                            rows="3"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.ecg"
                            placeholder="Test results indicate..."
                            label="ECG Test"
                            size="md"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.urinalysis"
                            placeholder="Urinalysis test results indicate..."
                            label="Urinalysis Test"
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
