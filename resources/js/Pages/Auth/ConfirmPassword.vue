<script setup>
import { Head, useForm } from '@inertiajs/vue3'

const form = useForm({
    password: '',
})

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    })
}
</script>

<template>
    <Head title="Confirm Password" />

    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[var(--color-midnight)]">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="/branding/logo.svg" alt="DogePay" />
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">Confirm your password</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-[var(--color-tile-soft)] px-6 py-12 outline -outline-offset-1 outline-white/10 sm:rounded-lg sm:px-12">
                <p class="mb-6 text-sm text-white/60">
                    This is a secure area of the application. Please confirm your password before continuing.
                </p>

                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
                        <div class="mt-2">
                            <input
                                v-model="form.password"
                                type="password"
                                id="password"
                                name="password"
                                autocomplete="current-password"
                                required
                                autofocus
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)] sm:text-sm/6"
                            />
                        </div>
                        <p v-if="form.errors.password" class="mt-2 text-sm text-red-400">{{ form.errors.password }}</p>
                    </div>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="flex justify-center rounded-md bg-[var(--color-doge)] px-4 py-1.5 text-sm/6 font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
