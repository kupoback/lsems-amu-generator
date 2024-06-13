<script setup>
    import {globalStore} from "@/stores/global";
    import {prescriptionStore} from "@/stores/prescription";
    import {FwbButton, FwbInput, FwbTextarea} from "flowbite-vue";
    import {reactive} from "vue";
    import router from "@/router";
    import {generatePrescription} from "@/templates/prescription";
    import InputField from "@component/FormComponents/InputField.vue";
    import FormButton from "@component/FormComponents/FormButton.vue";

    const {internalRank, name, rank, signature} = globalStore();
    const store = prescriptionStore();
    const {
        data,
        defaultData,
    } = reactive({
        ...store.$state,
    });

    const {
        fullName,
        phoneNumber,
        diagnosis,
        prescription,
        startDate,
        duration,
    } = reactive(data)

    const updateState = (field, value) => store.data[field] = value
    const setupContents = () => generatePrescription(store.data, {
        internalRank,
        name,
        rank,
        signature
    })
    const copyContents = () => setupContents()
    // const copyContentsForGov = () => {
    //     setupContents()
    //     window.open('https://gov.eclipse-rp.net/posting.php?mode=post&f=3187', "_blank")
    // }
    const reset = () => {
        store.data = defaultData
        // router.go('/appointment-format')
    };

</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Prescription</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
                        This page is used to create a prescription.
                    </p>
                </div>
                <div class="pb-4">
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput v-model="fullName"
                                  placeholder="FName LName"
                                  label="Patients Name"
                                  size="md"
                                  @focusout="updateState('fullName', fullName)"
                        />
                    </fieldset>
                    <!-- Phone Number -->
                    <fieldset class="my-8">
                        <FwbInput v-model="phoneNumber"
                                  placeholder="5551234"
                                  label="Patients Phone Number"
                                  size="md"
                                  @focusout="updateState('phoneNumber', phoneNumber)"
                        />
                    </fieldset>
                    <!-- Diagnosis -->
                    <fieldset class="my-8">
                        <FwbTextarea v-model="diagnosis"
                                     placeholder="Patient has..."
                                     label="Diagnosis for prescription"
                                     size="md"
                                     @focusout="updateState('diagnosis', diagnosis)"
                        />
                    </fieldset>
                    <!-- Prescription -->
                    <fieldset class="my-8">
                        <FwbInput v-model="prescription"
                                  placeholder="Medication strength"
                                  label="Medication Prescribed"
                                  size="md"
                                  @focusout="updateState('prescription', prescription)"
                        />
                    </fieldset>
                    <!-- Start Date -->
                    <fieldset class="my-8">
                        <FwbInput v-model="startDate"
                                  placeholder="DD/MMM/YYYY XX:XX"
                                  label="Date of Appointment"
                                  size="md"
                                  @focusout="updateState('startDate', startDate)"
                        />
                    </fieldset>
                    <!-- Expiration Date -->
                    <fieldset class="my-8">
                        <FwbInput v-model="duration"
                                  placeholder="12"
                                  label="Number of Months Prescribed"
                                  size="md"
                                  @focusout="updateState('duration', duration)"
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
    import {prescriptionStore} from "@/stores/prescription";

    export default {
        computed: {
            ...mapState(prescriptionStore, {
            })
        }
    }
</script>

<style scoped lang="scss">

</style>
