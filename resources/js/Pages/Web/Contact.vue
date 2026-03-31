<template>
    <div class="bg-[var(--color-midnight)] px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-base/7 font-semibold text-[var(--color-dogelight)]">Get Involved</p>
            <h2 class="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-7xl">Contact Us</h2>
            <p class="mt-8 text-lg font-medium text-pretty text-white/60 sm:text-xl/8">Whether you're a merchant, developer, investor, or just curious — we'd love to hear from you.</p>

            <div class="mt-10 flex flex-wrap justify-center gap-3">
                <button
                    v-for="type in inquiryTypes"
                    :key="type.value"
                    @click="setType(type.value)"
                    :class="[
                        'px-4 py-2 rounded-full text-sm font-semibold transition',
                        selectedType === type.value
                            ? 'bg-[var(--color-doge)] text-[var(--color-midnight)]'
                            : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white ring-1 ring-white/10'
                    ]"
                >
                    {{ type.label }}
                </button>
            </div>
        </div>
    </div>

    <div class="relative isolate bg-[var(--color-midnight)]">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-[var(--color-tile-soft)] ring-1 ring-white/10 lg:w-1/2">
                        <svg class="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10" aria-hidden="true">
                            <defs>
                                <pattern id="contact-grid" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" stroke-width="0" fill="var(--color-tile-soft)" />
                            <svg x="100%" y="-1" class="overflow-visible fill-[var(--color-tile-muted)]">
                                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#contact-grid)" />
                        </svg>
                    </div>

                    <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ currentType.heading }}</h2>
                    <p class="mt-6 text-lg/8 text-white/60">{{ currentType.description }}</p>

                    <dl class="mt-10 space-y-4 text-base/7 text-white/60">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Address</span>
                                <BuildingOffice2Icon class="h-7 w-6 text-[var(--color-dogedark)]" aria-hidden="true" />
                            </dt>
                            <dd>8942 North Seneca St<br />Weedsport, NY 13166</dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Email</span>
                                <EnvelopeIcon class="h-7 w-6 text-[var(--color-dogedark)]" aria-hidden="true" />
                            </dt>
                            <dd><a class="hover:text-white transition" href="mailto:info@dogepay.net">info@dogepay.net</a></dd>
                        </div>
                    </dl>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <input type="hidden" name="inquiry_type" :value="selectedType" />

                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm/6 font-semibold text-white">First name</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm/6 font-semibold text-white">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm/6 font-semibold text-white">Email</label>
                            <div class="mt-2.5">
                                <input type="email" name="email" id="email" autocomplete="email" v-model="form.email" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                            </div>
                        </div>

                        <!-- Merchant fields -->
                        <template v-if="selectedType === 'merchant'">
                            <div class="sm:col-span-2">
                                <label for="business-name" class="block text-sm/6 font-semibold text-white">Business name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="business-name" id="business-name" v-model="form.businessName" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="monthly-volume" class="block text-sm/6 font-semibold text-white">Estimated monthly transaction volume</label>
                                <div class="mt-2.5">
                                    <select name="monthly-volume" id="monthly-volume" v-model="form.monthlyVolume" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]">
                                        <option value="" class="bg-[var(--color-tile-accent)]">Select a range</option>
                                        <option value="under-10k" class="bg-[var(--color-tile-accent)]">Under $10,000</option>
                                        <option value="10k-50k" class="bg-[var(--color-tile-accent)]">$10,000 – $50,000</option>
                                        <option value="50k-250k" class="bg-[var(--color-tile-accent)]">$50,000 – $250,000</option>
                                        <option value="250k-plus" class="bg-[var(--color-tile-accent)]">$250,000+</option>
                                    </select>
                                </div>
                            </div>
                        </template>

                        <!-- Developer fields -->
                        <template v-if="selectedType === 'developer'">
                            <div class="sm:col-span-2">
                                <label for="github" class="block text-sm/6 font-semibold text-white">GitHub profile URL</label>
                                <div class="mt-2.5">
                                    <input type="url" name="github" id="github" placeholder="https://github.com/username" v-model="form.github" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="stack" class="block text-sm/6 font-semibold text-white">Primary stack</label>
                                <div class="mt-2.5">
                                    <input type="text" name="stack" id="stack" placeholder="e.g. Laravel, Vue, Node" v-model="form.stack" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                                </div>
                            </div>
                        </template>

                        <!-- Investor fields -->
                        <template v-if="selectedType === 'investor'">
                            <div class="sm:col-span-2">
                                <label for="investment-range" class="block text-sm/6 font-semibold text-white">Investment range</label>
                                <div class="mt-2.5">
                                    <select name="investment-range" id="investment-range" v-model="form.investmentRange" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]">
                                        <option value="" class="bg-[var(--color-tile-accent)]">Select a range</option>
                                        <option value="25k-50k" class="bg-[var(--color-tile-accent)]">$25,000 – $50,000</option>
                                        <option value="50k-100k" class="bg-[var(--color-tile-accent)]">$50,000 – $100,000</option>
                                        <option value="100k-250k" class="bg-[var(--color-tile-accent)]">$100,000 – $250,000</option>
                                        <option value="250k-plus" class="bg-[var(--color-tile-accent)]">$250,000+</option>
                                    </select>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="accredited" class="block text-sm/6 font-semibold text-white">Are you an accredited investor?</label>
                                <div class="mt-2.5">
                                    <select name="accredited" id="accredited" v-model="form.accredited" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]">
                                        <option value="" class="bg-[var(--color-tile-accent)]">Select</option>
                                        <option value="yes" class="bg-[var(--color-tile-accent)]">Yes</option>
                                        <option value="no" class="bg-[var(--color-tile-accent)]">No</option>
                                        <option value="unsure" class="bg-[var(--color-tile-accent)]">Not sure</option>
                                    </select>
                                </div>
                            </div>
                        </template>

                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm/6 font-semibold text-white">Message</label>
                            <div class="mt-2.5">
                                <textarea name="message" id="message" rows="4" v-model="form.message" :placeholder="currentType.placeholder" class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-doge)]" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex justify-end">
                        <button type="submit" class="rounded-md bg-[var(--color-doge)] px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--color-midnight)] shadow-xs hover:bg-[var(--color-dogelight)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-doge)]">
                            Send message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const inquiryTypes = [
    { value: 'merchant',  label: '🏪 Merchant' },
    { value: 'developer', label: '💻 Developer' },
    { value: 'investor',  label: '💰 Investor' },
    { value: 'other',     label: '✉️ Other' },
]

const typeConfig = {
    merchant: {
        heading: 'Pre-register your business',
        description: 'Lock in the 1% flat rate before we go live. Tell us about your business and expected volume.',
        placeholder: 'Tell us about your business and how you accept payments today...',
    },
    developer: {
        heading: 'Join the core team',
        description: 'We offer early-stage equity to senior developers who want to build the future of payments.',
        placeholder: 'Tell us about your experience and what excites you about DogePay...',
    },
    investor: {
        heading: 'Investor relations',
        description: 'Seed round open. Minimum $25k investment. We\'re building the infrastructure to rival Visa.',
        placeholder: 'Tell us about your investment background and interest in fintech...',
    },
    other: {
        heading: 'Get in touch',
        description: 'Have a question, idea, or partnership proposal? We\'d love to hear from you.',
        placeholder: 'What\'s on your mind?',
    },
}

const selectedType = ref('other')
const currentType = computed(() => typeConfig[selectedType.value])

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    businessName: '',
    monthlyVolume: '',
    github: '',
    stack: '',
    investmentRange: '',
    accredited: '',
})

function setType(value) {
    selectedType.value = value
    window.location.hash = value
}

function handleSubmit() {
    // Wire up to your backend here
    console.log({ type: selectedType.value, ...form.value })
}

onMounted(() => {
    const hash = window.location.hash.replace('#', '')
    if (inquiryTypes.find(t => t.value === hash)) {
        selectedType.value = hash
    }
})
</script>
