import {useStorage} from '@vueuse/core'

const defaultData = {
    dateOfVisit: '',
    reasonForVisit: '',
    diagnosis: '',
    personalPresent: '',
    visitReport: '',
}

export default () => ({
    data: useStorage('visitationData', defaultData),
    defaultData,
})
