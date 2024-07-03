import {useLocalStorage} from '@vueuse/core'

const defaultData = {
    body: '',
    subject: '',
    to: '',
}

export default () => ({
    data: useLocalStorage('amuEmailData', defaultData),
    defaultData,
})
