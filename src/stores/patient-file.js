import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/patient-file/state'
import patientFieldActions from '@/stores/patient/patient-file/actions'

const defaultValues = state

export const patientFileStore = defineStore('patientFileStore', {
    state: () => ({
        ...state,
        defaults: {
            ...defaultValues,
        },
    }),
    actions: {
        ...globalActions,
        ...patientFieldActions,
    },
})
