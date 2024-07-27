import {createRouter, createWebHashHistory} from 'vue-router'

/**
 * Global Components
 */
import Home from '@view/Home.vue'
import Settings from '@view/Settings.vue'
import NotFound from '@view/NotFound.vue'

/**
 * Patient Components
 */
import PatientFile from '@view/Patient/PatientFile.vue'
import VisitationReport from '@view/Patient/VisitationReport.vue'
import AppointmentFormat from '@view/Patient/AppointmentFormat.vue'
import PilotsLicense from '@view/Patient/PilotsLicense.vue'
import PublicRequest from '@view/Patient/PublicRequest.vue'

/**
 * Prescriptions
 */
import Prescription from '@view/Prescriptions/Prescription.vue'
import Methadone from '@view/Prescriptions/Methadone.vue'
import EyePrescription from '@view/Prescriptions/EyePrescription.vue'

/**
 * Email Components
 */
import Email from '@view/Email/Email.vue'
import AmuEmail from '@view/Email/AmuEmail.vue'

/**
 * Field Training Components
 */
import RideAlong from '@view/FieldTraining/RideAlong.vue'

export const routes = [
    {
        path: '/patient',
        name: 'AMU',
        lowerName: 'patient-file',
        children: [
            {
                path: '/patient/patient-file',
                name: 'Patient File',
                component: PatientFile,
            },
            {
                path: '/patient/pilots-license',
                name: 'Pilot Examination',
                component: PilotsLicense,
            },
            {
                path: '/patient/appointment-format',
                name: 'Appointments',
                component: AppointmentFormat,
            },
            {
                path: '/patient/public-request',
                name: 'Public Request',
                component: PublicRequest,
            },
            {
                path: '/patient/visitation-report',
                name: 'Visitation Report',
                component: VisitationReport,
            },
        ],
    },
    {
        path: '/prescription',
        name: 'Prescriptions',
        lowerName: 'prescription',
        children: [
            {
                path: '/prescription/prescription',
                name: 'Prescription',
                component: Prescription,
            },
            {
                path: '/prescription/methadone',
                name: 'Methadone',
                component: Methadone,
            },
            {
                path: '/prescription/eye-prescription',
                name: 'Eye Prescription',
                component: EyePrescription,
            },
        ],
    },
    {
        path: '/email',
        name: 'Email',
        lowerName: 'email',
        children: [
            {
                path: '/email/personal-email',
                name: 'Email',
                component: Email,
            },
            {
                path: '/email/amu-email',
                name: 'Amu Email',
                component: AmuEmail,
            },
        ],
    },
    // {
    //     path: '/field-training',
    //     name: 'Field Trianing',
    //     lowerName: 'field-training',
    //     children: [
    //         {
    //             path: '/ride-along',
    //             name: 'Ride Along',
    //             component: RideAlong,
    //         },
    //     ],
    // },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/:catchAll(.*)',
            name: 'Not Found',
            component: NotFound,
        },
    ],
})

export default router
