<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'


const form = useForm({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Create an Account" />

    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[var(--color-midnight)]">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-10 w-auto" src="/branding/logo.svg" alt="DogePay" />
            <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">Create an Account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-[var(--color-tile-soft)] px-6 py-12 outline -outline-offset-1 outline-white/10 sm:rounded-lg sm:px-12">
                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <label for="username" class="block text-sm/6 font-medium text-white">Username</label>
                        <div class="mt-2">
                            <input
                                v-model="form.username"
                                id="username"
                                name="username"
                                autocomplete="username"
                                required
                                autofocus
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)] sm:text-sm/6"
                            />
                        </div>
                        <p v-if="form.errors.username" class="mt-2 text-sm text-red-400">{{ form.errors.username }}</p>
                    </div>

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

                    <div>
                        <label for="password" class="block text-sm/6 font-medium text-white">New password</label>
                        <div class="mt-2">
                            <input
                                v-model="form.password"
                                type="password"
                                id="password"
                                name="password"
                                autocomplete="new-password"
                                required
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)] sm:text-sm/6"
                            />
                        </div>
                        <p v-if="form.errors.password" class="mt-2 text-sm text-red-400">{{ form.errors.password }}</p>
                    </div>

                    <div>
                        <label for="password_confirmation" class="block text-sm/6 font-medium text-white">Confirm new password</label>
                        <div class="mt-2">
                            <input
                                v-model="form.password_confirmation"
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                autocomplete="new-password"
                                required
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)] sm:text-sm/6"
                            />
                        </div>
                        <p v-if="form.errors.password_confirmation" class="mt-2 text-sm text-red-400">{{ form.errors.password_confirmation }}</p>
                    </div>

                    <div class="flex items-center gap-4 justify-end">
                        <Link
                            :href="route('login')"
                            class="rounded-md text-sm text-[var(--color-doge)] underline"
                        >
                            Sign In
                        </Link>
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="flex justify-center rounded-md bg-[var(--color-doge)] px-4 py-1.5 text-sm/6 font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Create Free Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



