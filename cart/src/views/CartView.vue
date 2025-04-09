<script setup lang="ts">
import ProductCard from '@/components/product/productCard.vue'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import { useToast } from 'primevue/usetoast'

import Toast from 'primevue/toast'

const cartStore = useCartStore()

const toast = useToast()
const visible = ref(false)

const showTemplate = () => {
  if (!visible.value) {
    toast.add({
      severity: 'success',
      summary: 'Success! Please wait until your order gets delivered',
      group: 'bc',
    })
    visible.value = true
  }
}

const onClose = () => {
  visible.value = false
}
</script>

<template>
  <section>
    <div class="product-section">
      <h1>My Cart</h1>
    </div>
    <p
      v-if="cartStore.getcart.length == 0"
      style="text-align: center; font-size: 1.5rem; color: black"
    >
      Your cart is empty. <br /><a href="/" style="text-decoration: none">Start shopping now!</a>
    </p>
    <div class="grid-container">
      <ProductCard
        v-for="product in cartStore.getcart"
        :key="product.id"
        :product="product"
        :cart="true"
      ></ProductCard>
    </div>
    <div class="checkoutbox">
      <Panel
        header="Checkout"
        style="
          height: 250px;
          width: 50%;
          justify-content: center;
          padding: 1%;
          margin: 5px auto;
          align-items: center;
        "
        class="checkout-panel"
      >
        <div class="checkout">
          <p style="">Total Amount: ${{ Math.round(cartStore.gettotalPrice) }}</p>
          <p style="font-size: 1.5rem; color: black; text-align: center">
            Total Items: {{ cartStore.getitemCount }}
          </p>
        </div>
        <Toast position="bottom-center" group="bc" @close="onClose">
          <template #message="slotProps">
            <div class="flex flex-col items-start flex-auto">
              <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
            </div>
          </template>
        </Toast>
        <Button
          label="Checkout"
          style="float: right; background-color: #04045a; border-color: #04045a"
          @click="showTemplate"
        />
      </Panel>
    </div>
  </section>
</template>
<style scoped>

.checkoutbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
.checkout {
  margin: 5%;
  font-size: 1.5rem;
  color: black;
  text-align: center;
}
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 5%;
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
@media screen and (max-width: 768px) {
    .checkout-panel{
    width: 100% !important;
    margin: 5% !important;
}
}
</style>
