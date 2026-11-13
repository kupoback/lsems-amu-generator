import {persisted} from '@/stores/persisted'

const defaultData = {
    fullName: '',
    summary: '',
    leftStrength: '',
    rightStrength: '',
    leftCylinder: '',
    rightCylinder: '',
    leftAxis: '',
    rightAxis: '',
}

export default () => ({
    data: persisted('eyePrescriptionData', defaultData),
    defaultData,
})
