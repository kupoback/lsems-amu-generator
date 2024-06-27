import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/prescription/state'
import prescriptionFieldActions from '@/stores/patient/prescription/actions'

const defaultValues = state

export const prescriptionStore = defineStore('prescriptionStore', {
    state: () => ({
        ...state,
        defaults: {
            ...defaultValues,
        },
    }),
    actions: {
        ...globalActions,
        ...prescriptionFieldActions,
    },
})
