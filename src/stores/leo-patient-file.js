import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/leo-format/state'
import leoPatientFieldActions from '@/stores/patient/leo-format/actions'

export const leoPatientFileStore = defineStore('leoPatientFileStore', {
    state,
    actions: {
        ...globalActions,
        ...leoPatientFieldActions,
    },
})
