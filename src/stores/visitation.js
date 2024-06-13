import { defineStore } from "pinia";

import globalActions from "@/stores/global/actions";
import state from "@/stores/visitation/state";
import visitationFieldActions from "@/stores/visitation/actions";

const defaultValues = state;

export const visitationStore = defineStore(
    'visitationStore',
    {
        state: () => ({
            ...state,
            defaults: {
                ...defaultValues,
            }
        }),
        actions: {
            ...globalActions,
            ...visitationFieldActions
        }
    }
)
