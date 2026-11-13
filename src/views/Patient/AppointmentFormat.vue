<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {appointmentFormatStore} from '@stores/appointment-format'
    import {generateAppointmentFormat} from '@templates/patient/appointment-format'
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
    const store = appointmentFormatStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateAppointmentFormat, links.patientFile)
</script>

<template>
    <div class="appointment-format w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100 md:pb-20">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Appointment Format"
                    body="This page is used to create an appointment format."
                />
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white"> The dates will be converted to UTC. Time is used to convert to UTC and will not be included in the copy. </p>
                    <div :class=columnWrapper>
                        <!-- Date of Appointment -->
                        <fieldset :class=halfLeftColumn>
                            <label
                                for="dob"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Date of Appointment</label
                            >
                            <VueTailwindDatepicker
                                v-model="data.dateOfAppointment"
                                id="dob"
                                placeholder="DD/MMM/YYYY"
                                as-single
                                :formatter="dateTimeFormat"
                            />
                        </fieldset>
                        <!-- Time Scheduled -->
                        <fieldset :class=halfRightColumn>
                            <FwbInput
                                v-model="data.timeScheduled"
                                placeholder="20:00"
                                label="Time Scheduled"
                                size="md"
                                max="4"
                            />
                            <p
                                class="text-sm mt-1"
                            >
                                Convert this to UTC. You can use <a href="https://www.utctime.net/" class="underline text-red-500 dark:text-red-200">UTC Time</a> to help.
                            </p>
                        </fieldset>
                    </div>
                    <!-- Reason for the Visit -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.reasonForVisit"
                            placeholder="Patient stated that..."
                            label="Reason for the Visit"
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
