import {createRouter, createWebHashHistory} from 'vue-router'

// Home is the landing page, so it ships in the main bundle; every other page
// is lazy-loaded into its own chunk the first time it is visited.
import Home from '@view/Home.vue'

export const routes = [
    {
        path: '/patient',
        name: 'AMU',
        lowerName: 'patient-file',
        children: [
            {
                path: '/patient/patient-file',
                name: 'Patient File',
                component: () => import('@view/Patient/PatientFile.vue'),
            },
            {
                path: '/patient/leo-patient-file',
                name: 'LEO Examination',
                component: () => import('@view/Patient/LeoFile.vue'),
            },
            {
                path: '/patient/pilots-license',
                name: 'Pilot Examination',
                component: () => import('@view/Patient/PilotsLicense.vue'),
            },
            {
                path: '/patient/appointment-format',
                name: 'Appointments',
                component: () => import('@view/Patient/AppointmentFormat.vue'),
            },
            {
                path: '/patient/public-request',
                name: 'Public Request',
                component: () => import('@view/Patient/PublicRequest.vue'),
            },
            {
                path: '/patient/visitation-report',
                name: 'Visitation Report',
                component: () => import('@view/Patient/VisitationReport.vue'),
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
                component: () => import('@view/Prescriptions/Prescription.vue'),
            },
            {
                path: '/prescription/methadone',
                name: 'Methadone',
                component: () => import('@view/Prescriptions/Methadone.vue'),
            },
            {
                path: '/prescription/eye-prescription',
                name: 'Eye Prescription',
                component: () => import('@view/Prescriptions/EyePrescription.vue'),
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
                component: () => import('@view/Email/Email.vue'),
            },
            {
                path: '/email/amu-email',
                name: 'Amu Email',
                component: () => import('@view/Email/AmuEmail.vue'),
            },
        ],
    },
    //    {
    //        path: '/general',
    //        name: 'General',
    //        lowerName: 'general',
    //        children: [
    //            {
    //                path: '/general/duty-report',
    //                name: 'Duty Report',
    //                component: () => import('@view/General/DutyReport.vue'),
    //            },
    //        ],
    //    },
    // {
    //     path: '/field-training',
    //     name: 'Field Trianing',
    //     lowerName: 'field-training',
    //     children: [
    //         {
    //             path: '/ride-along',
    //             name: 'Ride Along',
    //             component: () => import('@view/FieldTraining/RideAlong.vue'),
    //         },
    //     ],
    // },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@view/Settings.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({top: 0}),
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
            component: () => import('@view/NotFound.vue'),
        },
    ],
})

export default router
