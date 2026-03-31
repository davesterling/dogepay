<template>
    <!-- Hero + Privileges — single unified section -->
    <div class="relative isolate overflow-hidden bg-[var(--color-midnight)]">

        <!-- Single grid for entire section -->
        <svg class="absolute inset-0 -z-10 size-full stroke-white/5" aria-hidden="true">
            <defs>
                <pattern id="genesis-grid" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M0.5 0V200M200 0.5L0 0.499983" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#genesis-grid)" />
        </svg>

        <!-- Top-left blob -->
        <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
            <div class="aspect-801/1036 w-200.25 opacity-10" style="background: linear-gradient(to top right, var(--color-dogelight), var(--color-dogedark)); clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"></div>
        </div>

        <!-- Bottom-right blob -->
        <div class="absolute -z-10 transform-gpu blur-3xl" style="top: calc(50% + 6rem); right: -10rem;" aria-hidden="true">
            <div class="aspect-1155/678 w-144.5 opacity-10" style="background: linear-gradient(to top right, var(--color-dogelight), var(--color-dogedark)); clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>

        <!-- Hero content -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 pt-32 pb-16">
                <div class="mb-6 inline-flex items-center gap-x-3 rounded-full bg-white/5 px-4 py-1.5 text-sm ring-1 ring-[var(--color-dogedark)]">
                    <span class="size-2 rounded-full bg-[var(--color-doge)] animate-pulse"></span>
                    <span class="font-semibold text-[var(--color-dogelight)]">Genesis Program — Pre-Hype Window Open</span>
                </div>

                <p class="text-base/7 font-semibold text-[var(--color-dogelight)]">Founding Member Tier</p>
                <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-6xl font-[var(--font-doge)]">
                    You Either Get In Now<br />Or You Watch From Outside.
                </h1>
                <p class="mt-6 text-xl/8 text-white/60">
                    The window to become a Founding Member closes permanently when we hit 10,000 registrations — or the moment a Tier-1 Catalyst event occurs. This tier is reserved for the pre-hype architects who saw the vision first.
                </p>

                <div class="mt-8 flex items-center gap-x-4">
                    <div class="flex-1 max-w-xs">
                        <div class="flex justify-between text-sm mb-1">
                            <span class="text-white/50">Founding slots claimed</span>
                            <span class="font-semibold text-[var(--color-doge)]">{{ slotsUsedFormatted }} / 10,000</span>
                        </div>
                        <div class="h-2 rounded-full bg-white/10 overflow-hidden">
                            <div class="h-full rounded-full bg-[var(--color-doge)] transition-all duration-700" :style="`width: ${slotsPct}%`"></div>
                        </div>
                    </div>
                    <span class="text-sm text-white/40">{{ slotsRemainingFormatted }} remaining</span>
                </div>

                <div class="mt-10 flex items-center gap-x-6">
                    <a href="/register" class="rounded-md bg-[var(--color-doge)] px-5 py-3 text-sm font-semibold text-[var(--color-midnight)] shadow-xs hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)]">
                        Claim Your Founding Member Badge — Free
                    </a>
                    <a href="#good-boy" class="text-sm/6 font-semibold text-white/60 hover:text-white">See how it works <span aria-hidden="true">→</span></a>
                </div>
            </div>
        </div>

        <!-- Privileges content -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <p class="text-base/7 font-semibold text-[var(--color-dogelight)]">The Alpha Access</p>
                <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl font-[var(--font-doge)]">Founding Member Privileges</h2>
                <p class="mt-6 text-xl/8 text-white/60">While registration is free, the status of a Founding Member grants access that money cannot buy once the network scales.</p>
            </div>

            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                <div class="relative lg:order-last lg:col-span-5">
                    <figure class="border-l border-[var(--color-doge)] pl-8">
                        <blockquote class="text-xl/8 font-semibold tracking-tight text-white">
                            <p>"If a major institutional milestone or a global billionaire-level endorsement of DogePay occurs, the Founding Member program closes instantly."</p>
                        </blockquote>
                        <figcaption class="mt-8 flex gap-x-4">
                            <div class="flex size-10 flex-none items-center justify-center rounded-full bg-[var(--color-dogedark)]">
                                <span class="text-lg">⚡</span>
                            </div>
                            <div class="text-sm/6">
                                <div class="font-semibold text-white">The Billionaire Clause</div>
                                <div class="text-white/40">Top Dog Exclusion Protocol</div>
                            </div>
                        </figcaption>
                    </figure>

                    <div class="mt-12 space-y-6">
                        <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-x-4 rounded-xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                            <span class="text-2xl">{{ stat.icon }}</span>
                            <div>
                                <div class="text-2xl font-bold text-[var(--color-doge)]">{{ stat.value }}</div>
                                <div class="text-sm text-white/50">{{ stat.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-xl text-base/7 text-white/60 lg:col-span-7">
                    <p>This isn't a loyalty program. This is an ownership opportunity. The people who join now, before the network achieves critical mass, are the architects of the infrastructure. Every Founding Member becomes a permanent part of the DogePay origin story.</p>

                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-white/60">
                        <li v-for="privilege in privileges" :key="privilege.title" class="flex gap-x-3">
                            <component :is="privilege.icon" class="mt-1 size-5 flex-none text-[var(--color-doge)]" aria-hidden="true" />
                            <span>
                                <strong class="font-semibold text-white">{{ privilege.title }}.</strong>
                                {{ privilege.description }}
                            </span>
                        </li>
                    </ul>

                    <h2 class="mt-16 text-2xl font-bold tracking-tight text-white font-[var(--font-doge)]">Your signal is the network.</h2>
                    <p class="mt-6">Every time you share, tag, or refer a merchant, you aren't just posting. You are increasing the Utility Density of Dogecoin. Visibility creates Liquidity. Liquidity creates Stability. Stability creates Moon Shots.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Good Boy Architecture Table -->
    <div id="good-boy" class="bg-[var(--color-midnight)] py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center mb-16">
                <p class="text-base/7 font-semibold text-[var(--color-dogelight)]">Rank System</p>
                <h2 class="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl font-[var(--font-doge)]">The Good Boy Architecture</h2>
                <p class="mt-6 text-lg text-white/60">Your rank isn't just a number — it's a measure of your impact on the Dogecoin ecosystem. As you climb the tiers, you increase the velocity of the network.</p>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="(tier, index) in tiers" :key="tier.rank"
                     :class="[
                        'relative rounded-2xl p-6 ring-1 transition',
                        index === 3
                            ? 'bg-[var(--color-doge)]/10 ring-[var(--color-doge)]'
                            : 'bg-white/5 ring-white/10'
                    ]"
                >
                    <div class="text-3xl mb-3">{{ tier.emoji }}</div>
                    <div class="font-bold text-lg text-white font-[var(--font-doge)]">{{ tier.rank }}</div>
                    <div class="mt-2 text-sm text-white/50">{{ tier.requirement }}</div>
                    <div class="mt-4 pt-4 border-t border-white/10 text-sm font-semibold" :class="index === 3 ? 'text-[var(--color-doge)]' : 'text-[var(--color-dogelight)]'">
                        {{ tier.perk }}
                    </div>
                </div>
            </div>

            <!-- Network value section -->
            <div class="mt-24 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 lg:flex lg:items-center lg:justify-between">
                <div class="max-w-xl">
                    <h3 class="text-2xl font-semibold text-white font-[var(--font-doge)]">Your Social Signal = Network Value</h3>
                    <p class="mt-3 text-white/60">By participating in the Good Boy system, you are directly contributing to the Network Effect that drives the underlying value of the assets we use. You are the marketing department. You are the PR firm. You are the reason this explodes.</p>
                    <div class="mt-6 flex flex-wrap gap-3">
                        <span v-for="tag in networkTags" :key="tag" class="rounded-full bg-[var(--color-dogedark)]/30 px-3 py-1 text-sm font-medium text-[var(--color-dogelight)] ring-1 ring-[var(--color-dogedark)]">{{ tag }}</span>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0 lg:ml-8 flex flex-col gap-4">
                    <a href="/register" class="rounded-md bg-[var(--color-doge)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-midnight)] hover:bg-[var(--color-dogelight)]">
                        Claim Your Founding Member Badge
                    </a>
                    <a href="/contact#investor" class="rounded-md bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10">
                        Investor Relations →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ShieldCheckIcon, BoltIcon, CurrencyDollarIcon, TrophyIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'

const slotsUsed = ref(0)

onMounted(async () => {
    try {
        const response = await axios.post('/api/user-count')
        slotsUsed.value = Number(response.data) || 0
    } catch {
        slotsUsed.value = 0
    }
})

const slotsUsedFormatted = computed(() => slotsUsed.value.toLocaleString())
const slotsRemainingFormatted = computed(() => (10000 - slotsUsed.value).toLocaleString())
const slotsPct = computed(() => Math.min((slotsUsed.value / 10000) * 100, 100))

const stats = [
    { icon: '🏅', value: '10,000', label: 'Total Founding slots' },
    { icon: '⚡', value: 'Genesis ×2', label: 'Early contribution multiplier' },
    { icon: '💰', value: '1% flat', label: 'Lifetime fee suppression' },
]

const privileges = [
    {
        icon: ShieldCheckIcon,
        title: 'The "Founding Member" Hard-Coded Badge',
        description: 'A permanent, non-transferable digital mark on your profile and on the public leaderboard. This identifies you as an original architect of the network.',
    },
    {
        icon: BoltIcon,
        title: 'Beta-Stream Access',
        description: 'Priority access to new features, merchant tools, and the DogePay Alpha-voter circle. You don\'t just use the product — you influence the roadmap.',
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Lifetime Fee Suppression',
        description: 'Founding Members will be eligible for the lowest possible transaction withdrawal tiers once the payment gateway goes live. As the network grows, your cost stays grounded.',
    },
    {
        icon: TrophyIcon,
        title: 'Genesis Multiplier on the Leaderboard',
        description: 'Early members get a Genesis Multiplier on all social contributions, meaning your early work carries more weight than those who join later.',
    },
]

const tiers = [
    {
        emoji: '🐶',
        rank: 'Puppy',
        requirement: 'Initial Registration',
        perk: 'Early Access + Founding Member Badge',
    },
    {
        emoji: '🦮',
        rank: 'Good Boy',
        requirement: 'Social Sync & Outreach (Posts/Tags)',
        perk: 'Beta Access + Score Multiplier',
    },
    {
        emoji: '🐕',
        rank: 'Alpha Dog',
        requirement: 'Merchant Referrals & Tech Contributions',
        perk: 'Voting rights on UI/UX features',
    },
    {
        emoji: '👑',
        rank: 'Top Dog',
        requirement: 'High-Volume Network Growth',
        perk: 'Community Elder & Equity Holder',
    },
]

const networkTags = [
    'Visibility → Liquidity',
    'Liquidity → Stability',
    'Stability → Moon Shots',
    'You are the network',
]
</script>
