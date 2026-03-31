<script setup>
import { computed } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
    status: {
        type: String,
    },
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}

const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
</script>

<template>
    <Head title="Email Verification" />

    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[var(--color-midnight)]">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="/branding/logo.svg" alt="DogePay" />
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">Verify your email</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-[var(--color-tile-soft)] px-6 py-12 outline -outline-offset-1 outline-white/10 sm:rounded-lg sm:px-12">
                <p class="text-sm text-white/60">
                    Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </p>

                <div v-if="verificationLinkSent" class="mt-4 text-sm font-medium text-[var(--color-doge)]">
                    A new verification link has been sent to the email address you provided during registration.
                </div>

                <form @submit.prevent="submit" class="mt-6">
                    <div class="flex items-center justify-between">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="flex justify-center rounded-md bg-[var(--color-doge)] px-4 py-1.5 text-sm/6 font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Resend Verification Email
                        </button>

                        <Link
                            :href="route('logout')"
                            method="post"
                            as="button"
                            class="text-sm font-semibold text-white/50 hover:text-white transition"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
