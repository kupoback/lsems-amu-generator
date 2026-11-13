<script setup>
    /**
     * Vue Scripts
     */
    import {globalStore} from '@stores/global'
    import {eyePrescriptionStore} from '@stores/eye-prescription'
    import {generateEyePrescription} from '@templates/prescriptions/eye-prescription'
    import {useFormPage} from '@/composables/useFormPage'
    import {
        columnWrapper,
        thirdLeftColumn,
        thirdMiddleColumn,
        thirdRightColumn,
    } from '@util/css-classes'

    /**
     * Vue Components
     */
    import {FwbButton, FwbInput, FwbTextarea} from 'flowbite-vue'
    import BodyHeader from '@component/BodyHeader/BodyHeader.vue'
    import SectionTitle from '@component/SectionTitle/SectionTitle.vue'

    const {links} = globalStore()
    const store = eyePrescriptionStore()
    const {data, copyContents, copyContentsForGov, reset} = useFormPage(store, generateEyePrescription, links.prescription)
</script>

<template>
    <div class="prescription w-full overflow-hidden rounded-lg ring-1 ring-slate-900 dark:ring-slate-100">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-16 lg:px-8">
            <div class="mx-auto">
                <BodyHeader
                    title="Create Eye Prescription"
                    body="This page is used to create an eye prescription."
                />
                <div class="pb-4">
                    <!-- Full Name -->
                    <fieldset class="my-8">
                        <FwbInput
                            v-model="data.fullName"
                            placeholder="FName LName"
                            label="Patients Name"
                            size="md"
                        />
                    </fieldset>
                    <!-- Summary -->
                    <fieldset class="my-8">
                        <FwbTextarea
                            v-model="data.summary"
                            placeholder="Reason for the visit"
                            label="Prescription Summary"
                            size="md"
                        />
                    </fieldset>
                    <SectionTitle title="Left Eye" />
                    <div :class=columnWrapper>
                        <!-- Left Strength -->
                        <fieldset :class=thirdLeftColumn>
                            <FwbInput
                                v-model="data.leftStrength"
                                placeholder="-3.50"
                                label="Left Strength"
                                size="md"
                            />
                        </fieldset>
                        <!-- Left Cylinder -->
                        <fieldset :class=thirdMiddleColumn>
                            <FwbInput
                                v-model="data.leftCylinder"
                                placeholder="0"
                                label="Left Cylinder"
                                size="md"
                            />
                        </fieldset>
                        <!-- Left Axis -->
                        <fieldset :class=thirdRightColumn>
                            <FwbInput
                                v-model="data.leftAxis"
                                placeholder="0"
                                label="Left Axis"
                                size="md"
                            />
                        </fieldset>
                    </div>
                    <SectionTitle title="Right Eye" />
                    <div :class=columnWrapper>
                        <!-- Right Strength -->
                        <fieldset :class=thirdLeftColumn>
                            <FwbInput
                                v-model="data.rightStrength"
                                placeholder="-3.50"
                                label="Left Strength"
                                size="md"
                            />
                        </fieldset>
                        <!-- Right Cylinder -->
                        <fieldset :class=thirdMiddleColumn>
                            <FwbInput
                                v-model="data.rightCylinder"
                                placeholder="0"
                                label="Right Cylinder"
                                size="md"
                            />
                        </fieldset>
                        <!-- Right Axis -->
                        <fieldset :class=thirdRightColumn>
                            <FwbInput
                                v-model="data.rightAxis"
                                placeholder="0"
                                label="Right Axis"
                                size="md"
                            />
                        </fieldset>
                    </div>
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
