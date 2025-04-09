<script setup lang="ts">
import HeroSection from '@/components/herosection.vue'
import ProductSection from '@/components/productsection.vue'
import Footer from '@/components/footer.vue'
import { useCartStore } from '@/stores/cart'
</script>

<template>
    <HeroSection />
    <ProductSection />
</template>
