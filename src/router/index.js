import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@view/Home.vue";
import PatientFile from "@view/PatientFile.vue";
import Settings from "@view/Settings.vue";
import NotFound from "@view/NotFound.vue";
import VisitationReport from "@view/VisitationReport.vue";
import AppointmentFormat from "@view/AppointmentFormat.vue";
import Prescription from "@view/Prescription.vue";
import PilotsLicense from "@view/PilotsLicense.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/patient-file",
        name: "Patient File",
        component: PatientFile,
        // children: [
        //     {
        //         path: "/patient-file",
        //         name: "Patient File",
        //         component: PatientFile,
        //     }
        // ]
    },
    {
        path: "/visitation-report",
        name: "Visitation Report",
        component: VisitationReport,
    },
    {
        path: "/appointment-format",
        name: "Appointment Format",
        component: AppointmentFormat,
    },
    {
        path: "/prescription",
        name: "Prescription",
        component: Prescription,
    },
    {
        path: "/pilots-license",
        name: "Pilot Examination",
        component: PilotsLicense,
    },
    // {
    //     path: "/casefile",
    //     name: "Casefile",
    //     component: CaseFile,
    // },
    // {
    //     path: "/modules",
    //     name: "Modules",
    //     component: Modules,
    // },
    {
        path: '/settings',
        name: "Settings",
        component: Settings,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        {
            path: "/:catchAll(.*)",
            name: "Not Found",
            component: NotFound,
        },
    ],
});


export default router;
