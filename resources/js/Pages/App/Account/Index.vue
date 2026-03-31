<script setup>
import { usePage } from '@inertiajs/vue3'

const user = usePage().props.auth.user

const checklist = [
    { icon: '🔍', text: 'Verifying you are, in fact, a person and not a golden retriever on a keyboard.' },
    { icon: '📋', text: 'Cross-referencing your vibe with our internal "good boy" criteria.' },
    { icon: '☕', text: 'Sipping coffee while looking very official and important.' },
    { icon: '📊', text: 'Running advanced algorithms (reading your name out loud twice).' },
    { icon: '✅', text: 'Preparing to be very impressed by you, probably.' },
]
</script>
<template>
    <div class="min-h-screen flex items-center justify-center px-6 py-24 font-[var(--font-doge)]">
        <div class="max-w-lg w-full text-center">

            <!-- Animated dog emoji -->
            <div class="text-8xl mb-6 select-none" style="animation: wiggle 1.2s ease-in-out infinite;">
                🐕
            </div>

            <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
                Good news: you're in the system.
            </h1>

            <p class="text-lg text-white/60 mb-3">
                Bad news: a very serious team of humans is currently reviewing your account with the intensity of someone reading a 47-page terms of service.
            </p>

            <p class="text-base text-white/40 mb-8">
                We're checking that you're not a bot, a time traveler, or suspiciously named "admin123."
            </p>

            <!-- Status bar -->
            <div class="bg-white/5 rounded-full overflow-hidden h-2 mb-2 mx-auto max-w-sm">
                <div
                    class="h-full rounded-full bg-[var(--color-doge)]"
                    style="width: 38%; animation: pulse-bar 2s ease-in-out infinite;"
                ></div>
            </div>
            <p class="text-xs text-white/30 mb-10">Review progress: definitely happening</p>

            <!-- What's happening -->
            <div class="bg-white/5 rounded-2xl ring-1 ring-white/10 p-6 text-left mb-8 space-y-3">
                <p class="text-sm font-semibold text-[var(--color-dogelight)] mb-2">What our review team is doing right now:</p>
                <div v-for="item in checklist" :key="item.text" class="flex items-start gap-3 text-sm text-white/60">
                    <span class="text-lg leading-none mt-0.5">{{ item.icon }}</span>
                    <span>{{ item.text }}</span>
                </div>
            </div>

            <!-- ETA -->
            <p class="text-sm text-white/40 mb-6">
                Expected wait time: <span class="text-white/70 font-semibold">1–3 business days</span> (or one coffee, depending on the reviewer's mood).
            </p>

            <p class="text-xs text-white/25">
                You'll get an email at <span class="text-white/50">{{ user?.email }}</span> when you're approved. Or not. Check your spam just in case.
            </p>
        </div>
    </div>
</template>



<style scoped>
@keyframes wiggle {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
}

@keyframes pulse-bar {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
</style>
