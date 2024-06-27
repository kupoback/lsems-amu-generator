import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/pilots-license/state'
import pilotsLicenseFieldActions from '@/stores/patient/pilots-license/actions'

const defaultValues = state

export const pilotsLicenseStore = defineStore('pilotsLicenseStore', {
    state: () => ({
        ...state,
        defaults: {
            ...defaultValues,
        },
    }),
    actions: {
        ...globalActions,
        ...pilotsLicenseFieldActions,
    },
})
