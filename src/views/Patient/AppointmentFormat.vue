<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@/stores/global'
    import {appointmentFormatStore} from '@/stores/appointment-format'
    import {generateAppointmentFormat} from '@/templates/patient/appointment-format'
    import {reactive, ref} from 'vue'
    import router from '@/router'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'

    const {links, userData} = globalStore()
    const store = appointmentFormatStore()
    const {data, defaultData} = reactive({
        ...store.$state,
    })

    const {reasonForVisit, dateOfAppointment, timeScheduled} = reactive(data)

    const formatter = ref({
        date: 'DD/MMM/YYYY',
        month: 'MMM',
    })

    //region savedData
    const savedReasonForVisit = ref(reasonForVisit)
    const savedDateOfAppointment = ref(dateOfAppointment)
    const savedTimeScheduled = ref(timeScheduled)
    //endregion

    //region Actions
    const updateState = (field, value) => (store.data[field] = value)
    const setupContents = (newPage = false) => generateAppointmentFormat(appointmentFormatStore().data, userData, links.patientFile, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/appointment-format')
    }
    //endregion
</script>

<template>
    <div class="appointment-format w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Appointment Format</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This page is used to create an appointment format. </p>
                </div>
                <div class="pb-4">
                    <!-- Date of Appointment -->
                    <fieldset class="my-8">
                        <label
                            for="dob"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Date of Appointment</label
                        >
                        <VueTailwindDatepicker
                            v-model="savedReasonForVisit"
                            id="dob"
                            placeholder="DD/MMM/YYYY"
                            as-single
                            :formatter="formatter"
                            @focusout="updateState('dateOfAppointment', savedReasonForVisit)"
                        />
                    </fieldset>
                    <!-- Reason for the Visit -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="savedDateOfAppointment"
                            placeholder="Patient stated that..."
                            label="Reason for the Visit"
                            size="md"
                            @focusout="updateState('reasonForVisit', savedDateOfAppointment)"
                        />
                    </fieldset>
                    <!-- Time Scheduled -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedTimeScheduled"
                            placeholder="20:00"
                            label="Time Scheduled"
                            size="md"
                            max="4"
                            @focusout="updateState('timeScheduled', savedTimeScheduled)"
                        />
                        <p
                            class="text-sm mt-1"
                            v-html="`You can include BBCode tags in here. Just be sure to close them`"
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

<style scoped lang="scss"></style>
