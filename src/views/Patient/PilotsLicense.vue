<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {pilotsLicenseStore} from '@stores/pilots-license'
    import {generateSaaaPilots} from '@templates/patient/saaa-pilots'
    import {generateSaaaPilotsCert} from '@templates/patient/saaa-pilots-cert'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        halfLeftColumn,
        halfRightColumn,
    } from '@/util/css-classes'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'
    import SectionTitle from '@component/SectionTitle/SectionTitle.vue'

    const {links} = globalStore()
    const store = pilotsLicenseStore()
    const {data, copyContents, copyContentsForGov, reset, copyWith} = useFormPage(store, generateSaaaPilots, links.patientFile)

    //region Actions
    const copyContentsForSaaa = () => copyWith(generateSaaaPilotsCert, links.saaaCert, true)
    //endregion
</script>

<template>
    <div class="pilots-license w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Pilot's Evaluation File"
                    body="This page is used to create a pilot's evaluation file."
                />

                <div class="pb-4">
                    <SectionTitle title="Patient Information" />
                    <div :class="columnWrapper">
                        <!-- Full Name -->
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="data.fullName"
                                placeholder="FName LName"
                                label="Full Name"
                                size="md"
                            />
                        </fieldset>
                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="data.phoneNumber"
                                placeholder="5551234"
                                label="Phone Number"
                                size="md"
                            />
                        </fieldset>
                    </div>
                </div>

                <div class="pb-4">
                    <SectionTitle title="Physical Examination" />
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.auscultation"
                            placeholder="Lungs are... Heart is..."
                            label="Auscultation"
                            size="md"
                            rows="3"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.coverTest"
                            placeholder="Exam Results..."
                            label="Eye Exam (Cover Test) - Only if necessary"
                            size="md"
                            rows="3"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.audioMeterTest"
                            placeholder="Hearing range was..."
                            label="Audio-Meter Test - Only if necessary"
                            size="md"
                            rows="3"
                        />
                    </fieldset>
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.drugTest"
                            placeholder="Urinalysis results were..."
                            label="Drug Test Results ((/drugTest or Urinalysis))"
                            size="md"
                            rows="3"
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
