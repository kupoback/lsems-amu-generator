import {defineStore} from "pinia";

import state from "@/stores/modules/state";
import actions from "@/stores/modules/actions";
import globalActions from "@/stores/global/actions";

const defaultValues = state.defaults

export const modulesStore = defineStore('modulesStore', {
	state: () => ({
		defaults: {
			...defaultValues
		},
		...state,
	}),
	actions: {
		...globalActions,
		...actions,
	},
})
