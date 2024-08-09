<script setup>
    import {globalStore} from '@stores/global'
    import {computed, reactive, ref} from 'vue'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'

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
                <BodyHeader
                    title="Profile Settings"
                    body="This information will be stored to your browsers localStorage. If you clear that, you'll lose your data."
                />
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
                            class="mt-4"
                        >
                            <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your saved signature</p>
                            <div class="bg-white w-full p-4">
                                <img
                                    class="mx-auto"
                                    :src="savedSignature"
                                    alt="Signature Image"
                                />
                            </div>
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
