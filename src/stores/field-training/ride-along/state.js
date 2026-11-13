import {persisted} from '@/stores/persisted'

const defaultData = {
    rideAlongType: 'Mandatory',
    startTime: '',
    endTime: '',
    feedBackConcerns: '',
    departmentCalls: '',
    transportSuspect: '',
    suspectNotes: '',
    rideAlongNotes: '',
    additionalMandatoriesNeeded: '',
}

export default () => ({
    data: persisted('rideAlongData', defaultData),
    defaultData,
    rideAlongTypes: [
        {
            value: 'Mandatory',
            name: 'Mandatory'
        },
        {
            value: 'Optional',
            name: 'Optional'
        }
    ],
})
