import {persisted} from '@/stores/persisted'

const defaultData = {
    fullName: '',
    phoneNumber: '',
    drugsFound: '',
    prescription: 'Methadone',
    amountIssued: 10,
    educated: false,
}

export default () => ({
    data: persisted('methadoneData', defaultData),
    defaultData,
})
