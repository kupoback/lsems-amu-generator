import {persisted} from '@/stores/persisted'

const defaultData = {
    fullName: '',
    contactMethod: '',
    details: '',
}

export default () => ({
    data: persisted('publicRequestData', defaultData),
    defaultData,
})
