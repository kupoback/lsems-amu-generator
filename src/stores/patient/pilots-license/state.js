import {useStorage} from '@vueuse/core'

const defaultData = {
    // General Information
    fullName: '',
    phoneNumber: '',
    medications: '',
    // Physical Examination
    height: '',
    weight: '',
    oximetry: '',
    temperature: '',
    bloodPressure: '',
    auscultation: '',
    coverTest: '',
    audioMeterTest: '',
    drugTest: '',
    // Survey
    historyOfDiabetes: '',
    historyOfEpilepsy: '',
    historyOfHeartAttack: '',
    historyOfBlackOuts: '',
    historyOfPsychosis: '',
}

export default () => ({
    data: useStorage('pilotsLicenseData', defaultData),
    defaultData,
})
