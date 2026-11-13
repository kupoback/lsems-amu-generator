import {persisted} from '@/stores/persisted'

const defaultData = {
    reasonForVisit: '',
    dateOfAppointment: '',
    timeScheduled: '',
}

export default () => ({
    data: persisted('appointmentFormatData', defaultData),
    defaultData,
})
