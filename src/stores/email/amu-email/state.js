import {useStorage} from '@vueuse/core'

const defaultData = {
    body: '',
    subject: '',
    to: '',
}

export default () => ({
    data: useStorage('amuEmailData', defaultData),
    defaultData,
})
