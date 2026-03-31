<template>
    <div class="relative isolate pt-14">
        <svg
            class="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
                <pattern id="dogepay-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" stroke="var(--color-grid-line)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="var(--color-tile-base)" />
            <svg x="50%" y="-1" class="overflow-visible">
                <path d="M-100.5 0h201v201h-201Z" fill="var(--color-tile-soft)" />
                <path d="M699.5 0h201v201h-201Z" fill="var(--color-tile-muted)" />
                <path d="M499.5 400h201v201h-201Z" fill="var(--color-tile-accent)" />
                <path d="M-300.5 600h201v201h-201Z" fill="var(--color-tile-highlight)" />
                <path d="M300.5 800h201v201h-201Z" fill="var(--color-tile-soft)" />
                <path d="M900.5 600h201v201h-201Z" fill="var(--color-tile-muted)" />
            </svg>
            <rect width="100%" height="100%" fill="url(#dogepay-grid)" />
        </svg>

        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 font-[var(--font-doge)]">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div class="flex">
                    <div class="flex items-center gap-x-4 rounded-full bg-white/5 px-4 py-1 text-sm ring-1 ring-[var(--color-dogedark)] text-[var(--color-dogelight)]">
                        <span class="font-semibold">Building Phase</span>
                        <span class="h-4 w-px bg-white/20" />
                        <span>1% Merchant Fees</span>
                    </div>
                </div>

                <h1 class="mt-10 text-5xl font-semibold tracking-tight sm:text-7xl text-[var(--color-doge)]">
                    Fast as a Credit Card. 3X Cheaper.
                </h1>

                <p class="mt-8 text-lg sm:text-xl text-white/70">
                    Stop losing 3% of every sale to legacy banks. DogePay delivers instant settlement with only a 1% merchant charge. We're building the future of global commerce—giving power back to businesses and people.
                </p>

                <div class="mt-10 flex items-center gap-x-6">
                    <a href="/contact#merchant" class="rounded-md bg-[var(--color-doge)] px-4 py-2.5 text-sm font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)]">
                        Pre-Register Merchant (Free)
                    </a>
                    <a href="/contact#investor" class="text-sm font-semibold text-[var(--color-dogelight)]">
                        Investor Relations →
                    </a>
                </div>
            </div>

            <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                <svg viewBox="0 0 366 729" role="img" class="mx-auto w-91.5 max-w-full drop-shadow-xl">
                    <title>DogePay Interface</title>
                    <defs>
                        <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                            <rect width="316" height="684" rx="36" />
                        </clipPath>
                    </defs>
                    <path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
                    <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
                    <foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
                        <img src="https://doge-01.s3.us-east-2.amazonaws.com/App-Screenshot.png" alt="App Screenshot" />
                    </foreignObject>
                </svg>
            </div>
        </div>
    </div>

    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 font-[var(--font-doge)]">
        <div class="relative overflow-hidden blur-3xl" aria-hidden="true">
            <div class="w-full h-full opacity-30" style="background: linear-gradient(to top right, var(--color-dogelight), var(--color-dogedark)); clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%);"></div>
        </div>
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold text-[var(--color-dogelight)]">The Opportunity</h2>
            <p class="mt-2 text-4xl sm:text-5xl font-semibold text-[var(--color-doge)]">
                Invest in the next Multi-Billion Dollar Fintech
            </p>
            <p class="mt-6 text-lg text-white/70">
                PayPal and Capital One disrupted the status quo. DogePay is doing it again by removing the "Interchange Tax." This is an early-stage opportunity to own equity in the layer that finally makes crypto usable for the real world.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                    <dt class="text-base font-semibold text-[var(--color-doge)]">
                        <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[var(--color-dogedark)]">
                            <component :is="feature.icon" class="size-6 text-[var(--color-midnight)]" aria-hidden="true" />
                        </div>
                        {{ feature.name }}
                    </dt>
                    <dd class="mt-2 text-base text-white/70">{{ feature.description }}</dd>
                    <a :href="feature.href" class="mt-3 inline-block text-sm font-semibold text-[var(--color-dogelight)] hover:text-[var(--color-doge)]">
                        {{ feature.cta }} →
                    </a>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup>
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Merchant Waitlist',
        description: 'Pre-register your business for free. Lock in the 1% flat rate before we go live and stop paying the 3% bank tax.',
        icon: CloudArrowUpIcon,
        href: '/contact#merchant',
        cta: 'Pre-register now',
    },
    {
        name: 'Equity for Talent',
        description: 'We are seeking Senior Developers to join our core team. Build the future of finance in exchange for early-stage equity.',
        icon: FingerPrintIcon,
        href: '/contact#developer',
        cta: 'Apply as a developer',
    },
    {
        name: 'Strategic Investment',
        description: 'Seed round open. Minimum $25k investment required to ensure focused growth and streamlined governance.',
        icon: LockClosedIcon,
        href: '/contact#investor',
        cta: 'Investor relations',
    },
    {
        name: 'Global Scale',
        description: 'From micro-payments to enterprise-grade invoicing, we are building infrastructure that rivals the speed of Visa.',
        icon: ArrowPathIcon,
        href: '/contact#other',
        cta: 'Get in touch',
    },
]
</script>
