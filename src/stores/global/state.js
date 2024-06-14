import {useStorage} from '@vueuse/core'

export default () => ({
    darkMode: useStorage('darkMode', true),
    loading: false,
    links: {
        patientFile: 'https://gov.eclipse-rp.net/viewforum.php?f=1223',
        publicRequest: 'https://gov.eclipse-rp.net/viewforum.php?f=3641',
        saaaCert: 'https://gov.eclipse-rp.net/viewforum.php?f=3462',
    },
    siteLogo: 'https://i.imgur.com/9uGiPqF.png',
    userData: useStorage('userdata', {
        internalRank: '',
        name: 'FirstName LastName',
        rank: 'Rank',
        signature: '',
    }),
})
