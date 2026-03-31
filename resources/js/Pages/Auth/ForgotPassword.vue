<script setup>
import { Head, useForm } from '@inertiajs/vue3'

defineProps({
    status: {
        type: String,
    },
})

const form = useForm({
    email: '',
})

const submit = () => {
    form.post(route('password.email'))
}
</script>

<template>
    <Head title="Forgot Password" />

    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[var(--color-midnight)]">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="/branding/logo.svg" alt="DogePay" />
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">Reset your password</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-[var(--color-tile-soft)] px-6 py-12 outline -outline-offset-1 outline-white/10 sm:rounded-lg sm:px-12">
                <p class="mb-6 text-sm text-white/60">
                    Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                </p>

                <div v-if="status" class="mb-6 text-sm font-medium text-[var(--color-doge)]">
                    {{ status }}
                </div>

                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                        <div class="mt-2">
                            <input
                                v-model="form.email"
                                type="email"
                                id="email"
                                name="email"
                                autocomplete="username"
                                required
                                autofocus
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)] sm:text-sm/6"
                            />
                        </div>
                        <p v-if="form.errors.email" class="mt-2 text-sm text-red-400">{{ form.errors.email }}</p>
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="flex justify-center rounded-md bg-[var(--color-doge)] px-4 py-1.5 text-sm/6 font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Email Password Reset Link
                        </button>
                    </div>
                </form>
            </div>

            <p class="mt-10 text-center text-sm/6 text-white/50">
                Remember your password?
                <a href="/login" class="font-semibold text-[var(--color-dogelight)] hover:text-[var(--color-doge)]">Sign in</a>
            </p>
        </div>
    </div>
</template>
