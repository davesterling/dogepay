<template>
    <div class="bg-[var(--color-tile-base)] text-white font-[var(--font-doge)]">
        <main class="isolate">
            <div class="relative isolate -z-10">
                <svg
                    class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern id="dogepay-hero-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none" stroke="var(--color-grid-line)" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible">
                        <path d="M-200 0h201v201h-201Z" fill="var(--color-tile-highlight)" />
                        <path d="M600 0h201v201h-201Z" fill="var(--color-tile-muted)" />
                        <path d="M-400 600h201v201h-201Z" fill="var(--color-tile-highlight)" />
                        <path d="M200 800h201v201h-201Z" fill="var(--color-tile-highlight)" />
                        <path d="M900 500h201v201h-201Z" fill="var(--color-tile-highlight)" />
                        <path d="M-600 900h201v201h-201Z" fill="var(--color-tile-highlight)" />
                    </svg>
                    <rect width="100%" height="100%" fill="var(--color-doge)" fill-opacity="0.05" />
                    <rect width="100%" height="100%" fill="url(#dogepay-hero-grid)" />
                </svg>

                <div class="overflow-hidden">
                    <div class="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                        <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div class="relative w-full lg:max-w-xl xl:max-w-2xl">
                                <h1 class="text-5xl sm:text-7xl font-[var(--font-doge)] tracking-tight text-[var(--color-dogedark)]">
                                    The 3% Bank Fee Ends Now
                                </h1>

                                <p class="mt-8 text-lg sm:text-xl text-white/70">
                                    Traditional payment networks were built in the 1970s. They are slow, expensive, and extract billions from merchants. DogePay is building the modern settlement layer—instant, secure, and 3X cheaper than any credit card.
                                </p>

                                <p class="mt-6 text-lg sm:text-xl text-white/70">
                                    We aren't just building a wallet; we're building the infrastructure that allows cryptocurrency to finally function as real, everyday money for businesses and consumers alike.
                                </p>

                                <div class="mt-10 flex items-center gap-x-6">
                                    <a href="/contact#merchant" class="rounded-md bg-[var(--color-doge)] px-4 py-2.5 text-sm font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)]">
                                        Pre-Register Merchant
                                    </a>
                                    <a href="/contact#investor" class="text-sm font-semibold text-[var(--color-dogelight)]">
                                        Investor Relations →
                                    </a>
                                </div>
                            </div>

                            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                                    <div class="relative">
                                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=80" alt="Payment terminal" class="aspect-2/3 w-full rounded-xl object-cover shadow-lg" />
                                        <div class="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                                    </div>
                                </div>
                                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div class="relative">
                                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80" alt="Data center infrastructure" class="aspect-2/3 w-full rounded-xl object-cover shadow-lg" />
                                        <div class="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                                    </div>
                                </div>
                                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div class="relative">
                                        <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&auto=format&fit=crop&q=80" alt="Blockchain and cryptocurrency" class="aspect-2/3 w-full rounded-xl object-cover shadow-lg" />
                                        <div class="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <h2 class="text-4xl sm:text-5xl font-semibold text-[var(--color-doge)]">Our Mission</h2>
                <p class="mt-6 text-xl text-white/70 max-w-2xl">
                    To capture the global payment market by offering a flat 1% merchant fee and instant, non-reversible settlements.
                </p>
                <p class="mt-6 text-base text-white/60 max-w-2xl">
                    DogePay is designed to scale. We are currently recruiting Senior Developers for equity-based roles and opening our first strategic investment round (minimum $25k) to fund our national MSB licensing roadmap.
                </p>
                <div class="mt-8 flex items-center gap-x-6">
                    <a href="/contact#developer" class="rounded-md bg-[var(--color-doge)] px-4 py-2.5 text-sm font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)]">
                        Apply as a Developer
                    </a>
                    <a href="/contact#investor" class="text-sm font-semibold text-[var(--color-dogelight)]">
                        Seed Round Details →
                    </a>
                </div>
            </div>

            <Faqs />

            <!-- Values section with gradient fade into footer -->
            <div class="relative">
                <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-48">
                    <h2 class="text-4xl sm:text-5xl font-semibold text-[var(--color-doge)]">Our Values</h2>
                    <p class="mt-6 text-lg text-white/70 max-w-2xl">
                        We are building a multi-billion dollar company by staying lean, fast, and relentlessly focused on merchant margins.
                    </p>

                    <dl class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div v-for="value in values" :key="value.name">
                            <dt class="font-semibold text-[var(--color-dogedark)]">{{ value.name }}</dt>
                            <dd class="mt-1 text-white/70">{{ value.description }}</dd>
                        </div>
                    </dl>
                </div>

                <!-- Gradient fade from tile-base into midnight (footer color) -->
                <div
                    class="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
                    style="background: linear-gradient(to bottom, transparent, var(--color-midnight));"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
import Faqs from '@/Components/Web/Faqs.vue'

const values = [
    {
        name: 'Efficiency First',
        description: 'Legacy processors charge 3% because they are bloated. We operate at 1% because we are built on code, not bureaucracy.',
    },
    {
        name: 'Merchant Obsession',
        description: 'If the merchant wins, we win. Every feature we build is designed to put more money back into the hands of business owners.',
    },
    {
        name: 'Institutional Grade',
        description: 'Meme-coins brought the community, but DogePay brings the tech. We are building a platform stable enough for Fortune 500 integration.',
    },
    {
        name: 'Radical Transparency',
        description: 'No hidden fees. No $0.30 per-transaction "taxes." Just a flat, predictable 1% fee for every merchant, every time.',
    },
    {
        name: 'Speed as a Feature',
        description: 'In payments, speed is trust. Our settlement watcher ensures that crypto is finally fast enough for the checkout counter.',
    },
    {
        name: 'High-Impact Ownership',
        description: 'Our team consists of founders and senior talent who work for equity because they believe in the multi-billion dollar potential of the interchange shift.',
    },
]
</script>
