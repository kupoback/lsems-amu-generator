import {defineStore} from 'pinia'

import globalActions from '@/stores/global/actions'
import state from '@/stores/patient/public-request/state'
import publicRequestFieldActions from '@/stores/patient/public-request/actions'

const defaultValues = state

export const publicRequestStore = defineStore('publicRequestStore', {
    state: () => ({
        ...state,
        defaults: {
            ...defaultValues,
        },
    }),
    actions: {
        ...globalActions,
        ...publicRequestFieldActions,
    },
})
