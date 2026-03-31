import '../css/app.css';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import '@mdi/font/css/materialdesignicons.css'
import WebLayout from "@/Layouts/WebLayout.vue";
import AppLayout from "@/Layouts/AppLayout.vue"
import GuestLayout from '@/Layouts/GuestLayout.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

const appName = import.meta.env.VITE_APP_NAME || 'DogePay ';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
            .then((page) => {
                if (name.startsWith('Web/')) {
                    page.default.layout ??= WebLayout;
                }
                else if (name.startsWith('App/')) {
                    page.default.layout ??= AppLayout;
                }
                else {
                    page.default.layout ??= GuestLayout;
                }
                return page;
            }),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        darkModeSelector: '.app-dark',
                    },
                },
            })
            .use(ToastService)
            .use(ConfirmationService)
            .mount(el);
    },
    progress: {
        color: '#A68A2D',
    },
});
