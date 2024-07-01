import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/prescription/state'
import prescriptionFieldActions from '@/stores/patient/prescription/actions'

export const prescriptionStore = defineStore('prescriptionStore', {
    state,
    actions: {
        ...globalActions,
        ...prescriptionFieldActions,
    },
})
