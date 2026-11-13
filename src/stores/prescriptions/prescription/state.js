import {persisted} from '@/stores/persisted'

const defaultData = {
    fullName: '',
    phoneNumber: '',
    diagnosis: '',
    prescription: '',
    startDate: '',
    endDate: '',
}

export default () => ({
    data: persisted('prescriptionData', defaultData),
    defaultData,
})
