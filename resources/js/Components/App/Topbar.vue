<script setup>
import { useLayout } from "@/Composables/useLayoutState.js";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { router, Link, usePage } from "@inertiajs/vue3";
import Chip from 'primevue/chip';
import ApplicationLogo from "@/Components/General/ApplicationLogo.vue";

const page = usePage();
const user = page.props.auth.user;
const userRoles = page.props.auth.user.roles || [];

const logout = () => {
    router.post("/logout");
};

const isDropdownVisible = ref(false);

onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick);
});

function handleOutsideClick(e) {
    const dropdown = document.querySelector('.profile-item');
    if (dropdown && !dropdown.contains(e.target)) {
        closeDropdown();
    }
}

function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
}

function closeDropdown() {
    isDropdownVisible.value = false;
}

const { layoutState, onMenuToggle } = useLayout();


</script>

<template>
    <div class="fixed top-0 left-0 right-0 z-50 flex items-center px-4 h-14 bg-[var(--color-tile-muted)] border-b border-white/5">
        <div class="flex items center h-8">
        <ApplicationLogo  class="text-[var(--color-dogedark)]" /></div>
        <span class="flex-1" />

        <div class="profile-item relative flex items-center">
            <a class="cursor-pointer flex items-center justify-center" @click="toggleDropdown">
                <div class="w-10 h-10 rounded-full bg-[var(--color-tile-accent)] ring-1 ring-white/10 flex items-center justify-center hover:ring-[var(--color-doge)] transition">
                    <i class="mdi mdi-account text-2xl text-[var(--color-dogedark)]"></i>
                </div>
            </a>

            <div
                v-show="isDropdownVisible"
                class="absolute right-0 top-full mt-2 z-[999] w-64 rounded-2xl bg-[var(--color-tile-soft)] ring-1 ring-white/10 shadow-2xl overflow-hidden p-2"
            >
                <ul class="flex flex-col gap-1">
                    <li>
                        <Link :href="route('account.edit', { id: user.id })" @click="closeDropdown" class="flex gap-2 py-2 px-2.5 rounded-lg items-center text-white/70 hover:bg-white/5 hover:text-[var(--color-doge)] transition text-sm cursor-pointer">
                            <i class="mdi mdi-account-edit text-[var(--color-dogedark)]"></i>
                            <span>Edit Account</span>
                        </Link>
                    </li>
                    <li>
                        <p class="flex gap-2 py-2 px-2.5 rounded-lg items-center text-white/70 text-sm">
                            <i class="mdi mdi-badge-account text-[var(--color-dogedark)]"></i>
                            <span class="truncate">{{ user.username }}</span>
                        </p>
                    </li>
                    <li>
                        <Link :href="route('account.index')" @click="closeDropdown" class="flex gap-2 py-2 px-2.5 rounded-lg items-center text-white/70 hover:bg-white/5 hover:text-[var(--color-doge)] transition text-sm cursor-pointer">
                            <i class="mdi mdi-wallet text-[var(--color-dogedark)]"></i>
                            <span>Wallets</span>
                        </Link>
                    </li>
                    <li class="border-t border-white/10 mt-1 pt-1">
                        <a class="flex gap-2 py-2 px-2.5 rounded-lg items-center text-white/70 hover:bg-white/5 hover:text-[var(--color-doge)] transition text-sm cursor-pointer" @click="logout(); closeDropdown()">
                            <i class="mdi mdi-logout text-[var(--color-dogedark)]"></i>
                            <span>Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
