<script setup>
    import {globalStore} from "@/stores/global";
    import {prescriptionStore} from "@/stores/prescription";
    import {FwbButton, FwbInput, FwbTextarea} from "flowbite-vue";
    import {reactive, ref} from "vue";
    import router from "@/router";
    import {generatePrescription} from "@/templates/prescription";
    import InputField from "@component/FormComponents/InputField.vue";
    import FormButton from "@component/FormComponents/FormButton.vue";
    import VueTailwindDatepicker from "vue-tailwind-datepicker";

    const {userData} = globalStore();
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
        endDate,
    } = reactive(data)

    const formatter = ref({
        date: 'DD/MMM/YYYY HH:ss',
        month: 'MMM',
    })

    const updateState = (field, value) => store.data[field] = value
    const setupContents = () => generatePrescription(store.data, userData)
    const copyContents = () => setupContents()
    // const copyContentsForGov = () => {
    //     setupContents()
    //     window.open('https://gov.eclipse-rp.net/viewforum.php?f=1223', "_blank")
    // }
    const reset = () => {
        store.data = defaultData
        router.go('/prescription')
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
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white">
                        The dates will be converted to UTC
                    </p>
                    <div class="flex">
                        <!-- Start Date -->
                        <fieldset class="my-8 w-6/12 pr-2">
                            <label for="start-date"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <VueTailwindDatepicker
                                v-model="startDate"
                                id="start-date"
                                placeholder="DD/MMM/YYYY HH:ss"
                                as-single
                                :formatter="formatter"
                                @focusout="updateState('startDate', startDate)"/>
                        </fieldset>
                        <!-- Expiration Date -->
                        <fieldset class="my-8 w-6/12 pl-2">
                            <label for="end-date"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <VueTailwindDatepicker
                                v-model="endDate"
                                id="end-date"
                                placeholder="DD/MMM/YYYY HH:ss"
                                as-single
                                :formatter="formatter"
                                @focusout="updateState('endDate', endDate)"/>
                        </fieldset>
                    </div>
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
