import { defineStore } from "pinia";

import state from "@/stores/pilots-license/state";
import globalActions from "@/stores/global/actions";
import pilotsLicenseFieldActions from "@/stores/pilots-license/actions";

const defaultValues = state;

export const pilotsLicenseStore = defineStore(
    'pilotsLicenseStore',
    {
        state: () => ({
            ...state,
            defaults: {
                ...defaultValues,
            }
        }),
        actions: {
            ...globalActions,
            ...pilotsLicenseFieldActions
        }
    }
)
