<script setup>
    import {globalStore} from '@/stores/global'
    import {computed, ref} from 'vue'
    import {FwbButton, FwbInput} from "flowbite-vue";

    let buttonText = "Save Data";
    let savingText = "Saving Data";

    const store = globalStore();
    const {department, departments, internalRank, name, rank, signature, updateState} = store

    const savedDept = ref(department)
    const savedInternalRank = ref(internalRank)
    const savedName = ref(name)
    const savedRank = ref(rank)
    const savedSignature = ref(signature)

    const isLoading = computed(() => globalStore().loading);

    const updateInternalRank = () => store.internalRank = savedInternalRank.value;
    const updateName = () => store.name = savedName.value;
    const updateRank = () => store.rank = savedRank.value;
    const updateSignature = () => store.signature = savedSignature.value;
    const updateDepartment = (elm) => {
        store.department = savedDept.value
        store.rank = elm.target.selectedOptions[0].label
        store.siteLogo = store.logos[savedDept.value]
    }

    /**
     * Just disables the save button while the store state is completed
     * @returns {Promise<void>}
     */
    const saveFields = () => {
        store.loading = true
        setTimeout(async () => {
            await updateState({
                department: savedDept.value,
                internalRank: savedInternalRank.value,
                name: savedName.value,
                rank: savedRank.value,
                signature: savedSignature.value,
                siteLogo: store.logos[savedDept.value],
            })
            store.loading = false
        }, 500);
    }
</script>

<template>
    <div class="page-settings w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Profile Settings</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
                        This information will be stored to your browsers localStorage.
                        If you clear that, you'll lose your data.
                    </p>
                </div>

                <div class="sm:mx-auto sm:w-full sm:max-w-sm">

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedName"
                            placeholder="FName LName"
                            label="Your name"
                            size="md"
                            @keydown.enter="updateName"
                            @focusout="updateName"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedRank"
                            placeholder="Department Rank"
                            label="Your Rank"
                            size="md"
                            @keydown.enter="updateRank"
                            @focusout="updateRank"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedInternalRank"
                            placeholder="Doctor"
                            label="AMU Rank"
                            size="md"
                            @keydown.enter="updateInternalRank"
                            @focusout="updateInternalRank"
                        />
                    </fieldset>

                    <fieldset class="my-8">
                        <FwbInput
                            v-model="savedSignature"
                            label="Signature Url"
                            size="md"
                            @keydown.enter="updateSignature"
                            @focusout="updateSignature"
                        />
                        <div v-if="savedSignature"
                             class="bg-white p-2 mt-4">
                            <p>Your saves signature</p>
                            <img class="mx-auto"
                                 :src="savedSignature"
                                 alt="Signature Image"
                            />
                        </div>
                    </fieldset>

<!--                    <fieldset class="my-8">-->
<!--                        <label for="department"-->
<!--                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">-->
<!--                        <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"-->
<!--                              v-html="`Select a department`"/>-->
<!--                            <select v-model="savedDept"-->
<!--                                    id="department"-->
<!--                                    class="w-full text-gray-900 focus:ring-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer border-l-0 border-t-0 border-r-0"-->
<!--                                    @change="updateDepartment">-->
<!--                                <option v-for="{disabled, name, value} in departments"-->
<!--                                        :key="value"-->
<!--                                        :selected="savedDept === value"-->
<!--                                        :value="value"-->
<!--                                        :disabled="disabled || false"-->
<!--                                        v-html="name"/>-->
<!--                            </select>-->
<!--                        </label>-->
<!--                    </fieldset>-->
                    <fieldset class="my-8">
                        <fwb-button v-if="isLoading"
                                    disabled
                                    color="alternative"
                                    size="lg">
                            {{ savingText }}
                        </fwb-button>
                        <fwb-button v-else
                                    size="lg"
                                    @click="saveFields">
                            {{ buttonText }}
                        </fwb-button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
