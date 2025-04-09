<script setup>
import ProductCard from './product/productCard.vue'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'

const productStore = useProductStore()
const products = ref([])
const fetchProducts = async () => {
  try {
    await productStore.getProducts()
    products.value = productStore.products
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <section>
    <div class="product-section">
      <h1>Products</h1>
      <span class="pi pi-arrow-right" style="font-size: x-large"></span>
    </div>
    <div class="grid-container">
      <ProductCard v-for="product in products" :key="product.id" :product="product" :cart="false"></ProductCard>
    </div>
  </section>
</template>
<style scoped>

section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
}
.product-section {
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}
.product-section h1 {
  font-size: 2rem;
  color: black;
  text-align: left;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 2 items per row */
  gap: 20px; /* Space between items */
  padding: 20px;
}
/* Responsive: 1 column on small screens */
@media (max-width: 700px) {
}
</style>
