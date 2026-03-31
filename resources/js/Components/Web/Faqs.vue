<template>
    <div class="bg-[var(--color-tile-base)]">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="mx-auto max-w-4xl">
                <h2 class="text-4xl font-semibold tracking-tight text-[var(--color-dogelight)] sm:text-5xl">
                    Frequently asked questions
                </h2>

                <dl class="mt-16 divide-y divide-[var(--color-dogedark)]/50">
                    <Disclosure
                        as="div"
                        v-for="faq in faqs"
                        :key="faq.question"
                        class="py-6 first:pt-0 last:pb-0"
                        v-slot="{ open }"
                    >
                        <dt>
                            <DisclosureButton
                                class="flex w-full items-start justify-between text-left text-[var(--color-doge)]"
                            >
                                <span class="text-white/80 font-semibold">
                                    {{ faq.question }}
                                </span>
                                <span class="ml-6 flex h-7 items-center">
                                    <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                                    <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                                </span>
                            </DisclosureButton>
                        </dt>

                        <DisclosurePanel as="dd" class="mt-2 pr-12">
                            <p class="text-base/7 text-white/70">
                                {{ faq.answer }}
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
    {
        question: 'How is DogePay 3X cheaper than a credit card?',
        answer: 'Standard credit card processors charge between 2.9% and 3.5% plus a per-transaction fee (usually $0.30). DogePay charges a flat 1% merchant fee with no hidden costs. For a small business, this effectively triples your profit margin on every digital sale.',
    },
    {
        question: 'Is it really as fast as a card swipe?',
        answer: 'Yes. Our proprietary "Watcher" technology monitors the mempool in real-time. We provide merchants with an instant "Payment Confirmed" signal so they can fulfill orders immediately without waiting for slow blockchain block confirmations.',
    },
    {
        question: 'Why is there a $25,000 minimum for investors?',
        answer: 'We are focused on rapid, professional growth. By setting a $25k minimum, we ensure our cap table remains clean and our investors are sophisticated partners who can help us navigate the complex regulatory roadmap of national MSB licensing.',
    },
    {
        question: 'What do you mean by "Senior Developers for Equity"?',
        answer: 'We are looking for full-stack experts who recognize the multi-billion dollar potential of disrupting the payments industry. We offer significant early-stage equity to developers who can contribute to our Laravel/Vue architecture and high-scale settlement systems.',
    },
    {
        question: 'Is pre-registration for merchants really free?',
        answer: 'Yes. Pre-registering costs nothing and places you on the priority list for our rollout. Early sign-ups will also be locked into our 1% rate indefinitely, protecting you from future industry price hikes.',
    },
    {
        question: 'Does DogePay handle the legal/tax side for merchants?',
        answer: 'We are currently raising capital specifically to finalize our national money transmitter licenses (MSB). Our goal is to provide merchants with seamless USD cash-outs and automated 1099-K reporting, making crypto as easy to handle as a standard bank deposit.',
    },
    {
        question: 'How does DogePay preserve user privacy?',
        answer: 'While we focus on merchant efficiency, we use anonymous account identifiers so that customers can pay without exposing their entire wallet history or personal identity to every merchant they interact with.',
    },
    {
        question: 'Why use Doge instead of other cryptocurrencies?',
        answer: 'Doge has one of the largest, most active communities in the world and incredibly low network fees. It is the perfect candidate for a "People\'s Currency," and our layer provides the professional speed it needs for mass adoption.',
    },
]
</script>
