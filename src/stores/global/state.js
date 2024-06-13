import {useStorage} from '@vueuse/core'

export default () => ({
	darkMode: useStorage('darkMode', true),
    internalRank: useStorage('internalRank', ''),
	loading: false,
	name: useStorage('name', 'FirstName LastName'),
	rank: useStorage('rank', 'Rank'),
	signature: useStorage('signature', ''),
	siteLogo: 'https://i.imgur.com/9uGiPqF.png'
})
