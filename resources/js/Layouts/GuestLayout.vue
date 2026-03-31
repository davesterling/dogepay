<script setup>
import ApplicationLogo from '@/Components/General/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="flex min-h-screen flex-col items-center bg-[var(--color-midnight)] pt-6 sm:justify-center sm:pt-0">
        <div class="mt-6 w-full overflow-hidden bg-[var(--color-midnight)] px-6 py-4 shadow-md sm:max-w-mlg sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
