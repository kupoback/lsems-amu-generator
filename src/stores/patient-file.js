import { defineStore } from "pinia";

import state from "@/stores/patient-file/state";
import globalActions from "@/stores/global/actions";
import patientFieldActions from "@/stores/patient-file/actions";

const defaultValues = state;

export const patientFileStore = defineStore(
    'patientFileStore',
    {
        state: () => ({
            ...state,
            defaults: {
                ...defaultValues,
            }
        }),
        actions: {
            ...globalActions,
            ...patientFieldActions
        }
    }
)
