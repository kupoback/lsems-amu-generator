<script setup>
    import {computed, toRef} from 'vue'
    import {globalStore} from '@stores/global'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'
    import {columnWrapper, halfLeftColumn, halfRightColumn, thirdLeftColumn, thirdMiddleColumn, thirdRightColumn} from '@util/css-classes'

    const store = globalStore()

    // Inputs write straight into the persisted profile, so every change is saved as you type.
    const userData = toRef(store, 'userData')
    const isLoading = computed(() => store.loading)

    /**
     * Data is already saved; this just gives the button some visual feedback.
     */
    const saveFields = () => {
        store.loading = true
        setTimeout(() => (store.loading = false), 500)
    }
</script>

<template>
    <div class="page-settings w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-8xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto max-w-8xl">
                <BodyHeader
                    title="Profile Settings"
                    body="This information will be stored to your browsers localStorage. If you clear that, you'll lose your data."
                />
                <div class="mx-auto max-w-3xl">
                    <div :class="columnWrapper">
                        <fieldset :class="thirdLeftColumn">
                            <FwbInput
                                v-model="userData.name"
                                placeholder="FName LName"
                                label="Your name"
                                size="md"
                            />
                        </fieldset>
                        <fieldset :class="thirdMiddleColumn">
                            <FwbInput
                                v-model="userData.rank"
                                placeholder="Department Rank"
                                label="Your Rank"
                                size="md"
                            />
                        </fieldset>
                        <fieldset :class="thirdRightColumn">
                            <FwbInput
                                v-model="userData.internalRank"
                                placeholder="Doctor"
                                label="AMU Rank"
                                size="md"
                            />
                        </fieldset>
                    </div>

                    <div :class="columnWrapper">
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="userData.signature"
                                label="Signature Url"
                                size="md"
                            />
                        </fieldset>
                        <fieldset
                             v-if="userData.signature"
                            :class="halfRightColumn"
                        >
                            <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your saved signature</p>
                            <div class="bg-white w-full p-4">
                                <img
                                    class="mx-auto"
                                    :src="userData.signature"
                                    alt="Signature Image"
                                />
                            </div>
                        </fieldset>
                    </div>

                    <div :class="columnWrapper">
                        <h3 class="mb-4 w-full">Leave empty for no availability</h3>
                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="userData.monday"
                                placeholder="01:00 - 22:00"
                                label="Monday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="userData.tuesday"
                                placeholder="01:00 - 22:00"
                                label="Tuesday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="userData.wednesday"
                                placeholder="01:00 - 22:00"
                                label="Wednesday"
                                size="md"
                            />

                        </fieldset>

                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="userData.thursday"
                                placeholder="01:00 - 22:00"
                                label="Thursday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="userData.friday"
                                placeholder="01:00 - 22:00"
                                label="Friday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="userData.saturday"
                                placeholder="01:00 - 22:00"
                                label="Saturday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfLeftColumn">
                            <FwbInput
                                v-model="userData.sunday"
                                placeholder="01:00 - 22:00"
                                label="Sunday"
                                size="md"
                            />
                        </fieldset>

                        <fieldset :class="halfRightColumn">
                            <FwbInput
                                v-model="userData.phone"
                                placeholder="5555555"
                                label="Phone Number"
                                size="md"
                            />
                        </fieldset>
                    </div>
                </div>

                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <fieldset class="my-8">
                        <FwbButton
                            v-if="isLoading"
                            disabled
                            color="alternative"
                            size="lg"
                        >
                            Saving Data
                        </FwbButton>
                        <FwbButton
                            v-else
                            size="lg"
                            @click="saveFields"
                        >
                            Save Data
                        </FwbButton>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>
