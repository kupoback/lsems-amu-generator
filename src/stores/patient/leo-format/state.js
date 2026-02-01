import {useStorage} from '@vueuse/core'

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
    urinalysis: '',
}

export default () => ({
    data: useStorage('leoPatientData', defaultData),
    defaultData,
})
