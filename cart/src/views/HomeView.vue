<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProductSection from '@/components/ProductSection.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
</script>

<template>
    <HeroSection />
    <ProductSection />
</template>
