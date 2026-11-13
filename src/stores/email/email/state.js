import {persisted} from '@/stores/persisted'

const defaultData = {
    body: '',
    subject: '',
    to: '',
}

export default () => ({
    data: persisted('emailData', defaultData),
    defaultData,
})
