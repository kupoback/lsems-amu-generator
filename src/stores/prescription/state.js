import { useStorage } from "@vueuse/core";

const defaultData = {
    fullName: '',
    phoneNumber: '',
    diagnosis: '',
    prescription: '',
    startDate: '',
    duration: '',
}

export default ({
    data: useStorage(
        'prescriptionData',
        defaultData
    ),
    defaultData,
})
