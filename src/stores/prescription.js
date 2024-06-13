import { defineStore } from "pinia";

import globalActions from "@/stores/global/actions";
import state from "@/stores/prescription/state";
import prescriptionFieldActions from "@/stores/prescription/actions";

const defaultValues = state;

export const prescriptionStore = defineStore(
    'prescriptionStore',
    {
        state: () => ({
            ...state,
            defaults: {
                ...defaultValues,
            }
        }),
        actions: {
            ...globalActions,
            ...prescriptionFieldActions
        }
    }
)
