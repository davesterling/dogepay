<script setup lang="ts">
const timeline = [
    {
        name: 'Merchant Alpha (500+ Signups)',
        description: 'Opening the waitlist for high-volume merchants to lock in the 1% lifetime transaction rate and testing the "Watcher" prototype.',
        date: 'Q1 2026',
        dateTime: '2026-03',
    },
    {
        name: 'Core Team Expansion',
        description: 'Recruiting Senior Full-Stack Developers for equity roles to scale our settlement infrastructure and API stability.',
        date: 'Q2 2026',
        dateTime: '2026-06',
    },
    {
        name: 'Architecture Finalized',
        description: 'Completed the non-custodial "Watcher" logic and Laravel/Vue core architecture for real-time mempool monitoring.',
        date: 'Q3 2026',
        dateTime: '2026-09',
    },
    {
        name: 'Licensing & Seed Round',
        description: 'Finalizing national MSB licensing and closing the $500k seed round (min $25k per seat) to unlock USD cash-outs.',
        date: 'Q4 2026',
        dateTime: '2026-12',
    },
]
</script>

<template>
    <div class="bg-[var(--color-midnight)]">
        <div class="relative">
            <div class="mx-auto max-w-7xl">
                <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                    <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-[var(--color-midnight)] lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>

                    <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <div class="hidden sm:mb-10 sm:flex">
                                <div class="relative rounded-full px-3 py-1 text-sm/6 text-[var(--color-doge)] ring-1 ring-white/10 hover:ring-white/20">
                                    Our 2026 roadmap is live |
                                    <a href="#roadmap" class="font-semibold whitespace-nowrap text-[var(--color-doge)]">
                                        <span class="absolute inset-0" aria-hidden="true" />View milestones <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 class="text-5xl font-semibold tracking-tight text-[var(--color-doge)] sm:text-7xl">Build the Future of Payments</h1>
                            <p class="mt-8 text-lg font-medium text-white/70 sm:text-xl/8">We are disrupting the 3% interchange fee. DogePay is looking for merchants to lead our beta, developers to build the core, and investors to fuel the license acquisition.</p>
                            <div class="mt-10 flex items-center gap-x-6">
                                <a href="/contact#merchant" class="rounded-md bg-[var(--color-doge)] px-3.5 py-2.5 text-sm font-semibold text-[var(--color-midnight)] shadow-xs hover:bg-[var(--color-dogelight)]">Pre-Register Merchant</a>
                                <a href="/contact#developer" class="text-sm/6 font-semibold text-white">Join the Dev Team <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[var(--color-tile-muted)] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="aspect-3/2 object-cover lg:aspect-auto lg:size-full opacity-60" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" alt="Blockchain technology visualization" />
            </div>
        </div>
    </div>

    <div class="bg-[var(--color-midnight)]">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div class="relative isolate overflow-hidden bg-[var(--color-tile-accent)] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 ring-1 ring-white/10">
                <h2 class="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">Stop giving 3% to the banks.</h2>
                <p class="mx-auto mt-6 max-w-xl text-lg/8 text-white/70">Join 500+ merchants waiting to use the first instant-settlement Doge layer. No monthly fees, no hidden costs—just a flat 1% rate.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/contact#merchant" class="rounded-md bg-[var(--color-doge)] px-3.5 py-2.5 text-sm font-semibold text-[var(--color-midnight)] shadow-xs hover:bg-[var(--color-dogelight)]">Reserve your spot</a>
                    <a href="/contact#investor" class="text-sm/6 font-semibold text-white">Investor Relations <span aria-hidden="true">→</span></a>
                </div>
                <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#doge-gradient)" fill-opacity="0.3" />
                    <defs>
                        <radialGradient id="doge-gradient">
                            <stop stop-color="var(--color-dogelight)" />
                            <stop offset="1" stop-color="var(--color-midnight)" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>

    <div id="roadmap" class="bg-[var(--color-midnight)] py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-16">The Road to $1B Volume</h2>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <div v-for="item in timeline" :key="item.name">
                    <time :datetime="item.dateTime" class="flex items-center text-sm/6 font-semibold text-[var(--color-doge)]">
                        <svg viewBox="0 0 4 4" class="mr-4 size-1 flex-none" aria-hidden="true">
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                        </svg>
                        {{ item.date }}
                        <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-white/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
                    </time>
                    <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">{{ item.name }}</p>
                    <p class="mt-1 text-base/7 text-white/50">{{ item.description }}</p>
                </div>
            </div>

            <div class="mt-24 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 lg:flex lg:items-center lg:justify-between">
                <div>
                    <h3 class="text-xl font-semibold text-white">Ready to partner?</h3>
                    <p class="text-white/60">We are vetting Senior Developers for equity stakes and accredited investors for our seed round.</p>
                </div>
                <div class="mt-6 flex gap-4 lg:mt-0">
                    <a href="/contact#developer" class="text-sm font-semibold text-[var(--color-doge)] hover:text-[var(--color-dogelight)]">Apply as Dev</a>
                    <span class="text-white/20">|</span>
                    <a href="/contact#investor" class="text-sm font-semibold text-[var(--color-doge)] hover:text-[var(--color-dogelight)]">Investor Relations</a>
                </div>
            </div>
        </div>
    </div>
</template>
