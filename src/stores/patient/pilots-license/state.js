import {persisted} from '@/stores/persisted'

const defaultData = {
    // General Information
    fullName: '',
    phoneNumber: '',
    // Physical Examination
    auscultation: '',
    coverTest: '',
    audioMeterTest: '',
    drugTest: '',
}

export default () => ({
    data: persisted('pilotsLicenseData', defaultData),
    defaultData,
})
