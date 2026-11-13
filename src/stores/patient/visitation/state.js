import {persisted} from '@/stores/persisted'

const defaultData = {
    dateOfVisit: '',
    reasonForVisit: '',
    diagnosis: '',
    personalPresent: '',
    visitReport: '',
}

export default () => ({
    data: persisted('visitationData', defaultData),
    defaultData,
})
