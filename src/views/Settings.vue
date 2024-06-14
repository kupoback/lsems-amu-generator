<script setup>
    import {globalStore} from '@/stores/global'
    import {computed, reactive, ref} from 'vue'
    import {FwbButton, FwbInput} from 'flowbite-vue'

    let buttonText = 'Save Data'
    let savingText = 'Saving Data'

    const store = globalStore()
    const {userData, updateState} = store

    const {internalRank, name, rank, signature} = reactive(userData)

    const savedInternalRank = ref(internalRank)
    const savedName = ref(name)
    const savedRank = ref(rank)
    const savedSignature = ref(signature)

    const isLoading = computed(() => globalStore().loading)

    const updateInternalRank = () => (store.userData.internalRank = savedInternalRank.value)
    const updateName = () => (store.userData.name = savedName.value)
    const updateRank = () => (store.userData.rank = savedRank.value)
    const updateSignature = () => (store.userData.signature = savedSignature.value)

    /**
     * Just disables the save button while the store state is completed
     * @returns {Promise<void>}
     */
    const saveFields = () => {
        store.loading = true
        setTimeout(async () => {
            updateState({
                userData: {
                    internalRank: savedInternalRank.value,
                    name: savedName.value,
                    rank: savedRank.value,
                    signature: savedSignature.value,
                },
            })
            store.loading = false
        }, 500)
    }
</script>

<template>
    <div class="page-settings w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <div class="max-w-2xl mx-auto text-center pb-8">
                    <h2 class="text-4xl font-bold leading-7 text-gray-900 dark:text-white pb-4">Profile Settings</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white"> This information will be stored to your browsers localStorage. If you clear that, you'll lose your data. </p>
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
                        <div
                            v-if="savedSignature"
                            class="bg-white p-2 mt-4"
                        >
                            <p>Your saves signature</p>
                            <img
                                class="mx-auto"
                                :src="savedSignature"
                                alt="Signature Image"
                            />
                        </div>
                    </fieldset>
                    <fieldset class="my-8">
                        <fwb-button
                            v-if="isLoading"
                            disabled
                            color="alternative"
                            size="lg"
                        >
                            {{ savingText }}
                        </fwb-button>
                        <fwb-button
                            v-else
                            size="lg"
                            @click="saveFields"
                        >
                            {{ buttonText }}
                        </fwb-button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
