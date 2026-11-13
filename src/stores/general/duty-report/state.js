import {persisted} from '@/stores/persisted'

const defaultData = {
    startDateTime: '',
    endDateTime: '',
    fieldTreated: 0,
    hospitalized: 0,
    notes: [],
}

export default () => ({
    data: persisted('dutyReportData', defaultData),
    defaultData,
})
