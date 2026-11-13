import {persisted} from '@/stores/persisted'

const defaultData = {
    fullName: '',
    phoneNumber: '',
    profession: '',
    height: '',
    weight: '',
    bloodType: '',
    allergies: '',
    ecgBand: '',
    oximetry: '',
    temperature: '',
    bloodPressure: '',
    auscultation: '',
    coverTest: '',
    audioMeterTest: '',
    additionalNotes: '',
    ecg: '',
    urinalysis: '',
}

export default () => ({
    data: persisted('leoPatientData', defaultData),
    defaultData,
})
