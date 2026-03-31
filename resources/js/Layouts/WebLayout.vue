<script setup>
import Header from "@/Components/Web/Header.vue";
import Footer from "@/Components/Web/Footer.vue";
</script>

<template>
    <div class="bg-[var(--color-midnight)] text-white">
        <Header/>
            <slot/>
        <Footer/>
    </div>
</template>

<style scoped>

</style>
