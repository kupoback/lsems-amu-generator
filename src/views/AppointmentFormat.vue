<script setup>
    import {globalStore} from "@/stores/global";
    import {appointmentFormatStore} from "@/stores/appointment-format";
    import {FwbButton, FwbInput, FwbTextarea} from "flowbite-vue";
    import {reactive} from "vue";
    import router from "@/router";
    import InputField from "@component/FormComponents/InputField.vue";
    import FormButton from "@component/FormComponents/FormButton.vue";

    const {internalRank, name, rank, signature} = globalStore();
    const store = appointmentFormatStore();
    const {
        data,
        defaultData,
    } = reactive({
        ...store.$state,
    });

    const {
        reasonForVisit,
        dateOfAppointment,
        timeScheduled,
    } = reactive(data)

    const updateState = (field, value) => store.data[field] = value
    // const setupContents = () => setupFile({additionalPersons, caseCrimeLogs, ...store.caseData}, {
    //     name,
    //     rank,
    //     signature
    // })
    // const copyContents = () => setupContents()
    // const copyContentsForGov = () => {
    //     setupContents()
    //     window.open('https://gov.eclipse-rp.net/posting.php?mode=post&f=3187', "_blank")
    // }
    // const reset = () => {
    //     store.data = defaultData
    //     router.go('/appointment-format')
    // };

</script>

<template>
    <div class="appointment-format w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Appointment Format</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
                        This page is used to create an appointment format.
                    </p>
                </div>
                <div class="pb-4">
                    <fieldset class="my-8">
                        <FwbTextarea v-model="reasonForVisit"
                                     placeholder="Patient stated that..."
                                     label="Reason for the Visit"
                                     size="md"
                                     @focusout="updateState('reasonForVisit', reasonForVisit)"
                        />
                    </fieldset>
                    <!-- Date of Birth -->
                    <fieldset class="my-8">
                        <FwbInput v-model="dateOfAppointment"
                                  placeholder="DD/MMM/YYYY"
                                  label="Date of Appointment"
                                  size="md"
                                  @focusout="updateState('dateOfAppointment', dateOfAppointment)"
                        />
                    </fieldset>
                    <!-- Date of Birth -->
                    <fieldset class="my-8">
                        <FwbInput v-model="timeScheduled"
                                  placeholder="20:00"
                                  label="Time Scheduled"
                                  size="md"
                                  @focusout="updateState('timeScheduled', timeScheduled)"
                        />
                    </fieldset>
                </div>

                <div class="max-w-2xl flex md:block justify-between">
<!--                    <FwbButton color="default"-->
<!--                               size="lg"-->
<!--                               class="md:mr-4"-->
<!--                               @click="copyContentsForGov">-->
<!--                        Copy to Gov-->
<!--                    </FwbButton>-->
<!--                    <FwbButton color="yellow"-->
<!--                               size="lg"-->
<!--                               class="md:mx-4"-->
<!--                               @click="copyContents">-->
<!--                        Copy-->
<!--                    </FwbButton>-->
<!--                    <FwbButton color="red"-->
<!--                               size="lg"-->
<!--                               class="md:ml-4"-->
<!--                               @click="reset">-->
<!--                        Clear-->
<!--                    </FwbButton>-->
                </div>
            </div>
            <div id="output"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "pinia";
    import {appointmentFormatStore} from "@/stores/appointment-format";

    export default {
        computed: {
            ...mapState(appointmentFormatStore, {
            })
        }
    }
</script>

<style scoped lang="scss">

</style>
