<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from "@/stores/global";
    import {publicRequestStore} from "@/stores/public-request";
    import {generatePublicRequest} from "@/templates/patient/public-request";
    import {reactive, ref} from "vue";
    import router from "@/router";

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from "flowbite-vue";
    import VueTailwindDatepicker from "vue-tailwind-datepicker";

    const {links, userData} = globalStore();
    const store = publicRequestStore();
    const {
        data,
        defaultData,
    } = reactive({
        ...store.$state,
    });

    const {
        fullName,
        contactDate,
        contactMethod,
        details,
    } = reactive(data)

    const formatter = ref({
        date: 'DD/MMM/YYYY HH:ss',
        month: 'MMM',
    })

    const updateState = (field, value) => store.data[field] = value
    const setupContents = (newPage = false) => generatePublicRequest(store.data, userData, links.publicRequest, newPage)
    const copyContents = () => setupContents()
    const copyContentsForGov = () => setupContents(true)
    const reset = () => {
        store.data = defaultData
        router.go('/public-request')
    };

</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Create Public Request</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
                        This page is used to create a public request response.
                    </p>
                </div>
                <div class="pb-4">
                    <p class="mt-1 leading-6 text-gray-600 dark:text-white">
                        The dates will be converted to UTC
                    </p>
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput v-model="fullName"
                                  placeholder="FName LName"
                                  label="Patients Name"
                                  size="md"
                                  @focusout="updateState('fullName', fullName)"
                        />
                    </fieldset>
                    <!-- Contact Date -->
                    <fieldset class="my-8">
                        <label for="start-date"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <VueTailwindDatepicker
                            v-model="contactDate"
                            id="start-date"
                            placeholder="DD/MMM/YYYY HH:ss"
                            as-single
                            :formatter="formatter"
                            @focusout="updateState('contactDate', contactDate)"/>
                    </fieldset>
                    <!-- Contact Method -->
                    <fieldset class="my-8">
                        <FwbInput v-model="contactMethod"
                                  placeholder="Email"
                                  label="Contact Type"
                                  size="md"
                                  @focusout="updateState('contactMethod', contactMethod)"
                        />
                    </fieldset>
                    <!-- Details -->
                    <fieldset class="my-8">
                        <FwbTextarea v-model="details"
                                     placeholder="Patient has..."
                                     label="Contact Details"
                                     size="md"
                                     row="4"
                                     @focusout="updateState('details', details)"
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
