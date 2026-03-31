<script setup>
import AppTopbar from '@/Components/App/Topbar.vue';
import AppFooter from '@/Components/App/Footer.vue';


import Toast from 'primevue/toast';


</script>

<template>
    <div class="layout-wrapper">

            <div class="layout-content-wrapper-inside">
                <AppTopbar />
                <div class="pt-14 pb-12">
                    <slot />
                </div>
                <AppFooter />
            </div>

        <Toast />
        <div class="layout-mask" />
    </div>
</template>
