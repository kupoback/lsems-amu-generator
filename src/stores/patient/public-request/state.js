import {useStorage} from '@vueuse/core'

const defaultData = {
    fullName: '',
    contactDate: '',
    contactMethod: '',
    details: '',
}

export default {
    data: useStorage('publicRequestData', defaultData),
    defaultData,
}
