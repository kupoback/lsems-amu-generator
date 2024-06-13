import { createRouter, createWebHistory } from "vue-router";

import Home from "@view/Home.vue";
import CaseFile from "@view/CaseFile.vue";
import Modules from "@view/Modules.vue";
import Settings from "@view/Settings.vue";
import NotFound from "@view/NotFound.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
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
    history: createWebHistory(import.meta.env.BASE_URL),
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
