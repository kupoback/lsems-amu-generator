import {persisted} from '@/stores/persisted'

const defaultData = {
    body: '',
    subject: '',
    to: '',
    addDate: false,
    addPhone: false,
}

export default () => ({
    data: persisted('amuEmailData', defaultData),
    defaultData,
})
