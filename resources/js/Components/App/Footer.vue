<script setup>
import ApplicationLogo from '@/Components/General/ApplicationLogo.vue';
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3 border-t border-white/5 bg-[var(--color-tile-muted)]">
        <ApplicationLogo class="h-4 w-auto text-[var(--color-dogedark)]" />
        <span class="text-xs text-[var(--color-dogedark)]">&#169; DogePay - {{ currentYear }}</span>
    </div>
</template>
