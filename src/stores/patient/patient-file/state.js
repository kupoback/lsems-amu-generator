import {persisted} from '@/stores/persisted'

const defaultData = {
    // General Information
    fullName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    address: '',
    phoneNumber: '',
    profession: '',
    height: '',
    weight: '',
    bloodType: '',
    allergies: '',
    // Regular Examination
    generalScreening: '',
    ecgBand: '',
    oximetry: '',
    temperature: '',
    bloodPressure: '',
    auscultation: '',
    bmi: '',
    coverTest: '',
    refractionTest: '',
    audioMeterTest: '',
    additionalNotes: '',
    // Pre-Operative Examination
    completeBloodCount: '',
    xRay: '',
    ecg: '',
    urinalysis: '',
}

export default () => ({
    data: persisted('patientData', defaultData),
    defaultData,
})
