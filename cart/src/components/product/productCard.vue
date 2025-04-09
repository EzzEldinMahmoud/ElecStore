<script setup>
import Card from 'primevue/card'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cart' // Import the cart store
import routerRedirect from '@/utils/util_service.ts'
import { useRouter } from 'vue-router' // Import the router for navigation
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast' // Import the toast for notifications

defineProps({
  product: Object, // Define the prop
  cart: Boolean,
})
const toast = useToast() // Create an instance of the toast for notifications
const cartStore = useCartStore() // Create an instance of the cart store
const router = useRouter() // Create an instance of the router
const addToCart = (product) => {
  cartStore.addToCart(product)

  console.log('Current cart:', cartStore.getcart) // Log the current cart items
}
const removeFromCart = (id) => {
  cartStore.removeFromCart(id)
}
const addAndToast = (product) => {
  cartStore.addToCart(product)
  toast.add({ severity: 'success', summary: 'Success', detail: 'Product added to cart', life: 3000 })
}

</script>

<template>
  <Toast     position="bottom-center"/>
  <div class="productcard">
    <div class="productimg" @click="router.push('/product/' + product.id)">
      <img :alt="product.title" :src="product.image" width="100%" height="100%" />
    </div>
    <div class="product-detail">
      <h3 class="productcard-title" @click="router.push('/product/' + product.id)">{{ product.title }}</h3>
      <p class="productcard-subtitle">$ {{ product.price }}</p>
      <p class="productcard-content">{{ product.description?.slice(0, 200) }}...</p>




      <div v-if="cart" class="cart-control-result">
        <div class="cart-quantity-control">
          <span class="pi pi-minus span-icons-quantity" @click="removeFromCart(product.id)"></span>
          <p class="productcard-subtitle ">{{ product.quantity }}</p>
          <span class="pi pi-plus span-icons-quantity" @click="addToCart(product)"></span>
        </div>
        <p class="cart-quantity-control-total">Total ${{Math.round(product.price * product.quantity) }}</p>
      </div>

      <button class="buttonCart" @click="addAndToast(product)" v-else>
        Add To Cart
        <span class="pi pi-shopping-cart" style="font-size: x-large; color: white"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.span-icons-quantity {
    font-size: 1.5rem;
    margin: 5px;
    color: black;
    cursor: pointer;
}
.cart-quantity-control-total {
  font-size: 1.5rem;
  color: black;
  text-align: left;
  font-weight: bold;
}
.cart-control-result{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
}
.cart-quantity-control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}
.product-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}
.productcard {
  width: 100%;
  height: 250px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: start;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;

  .productcard-title {
    font-size: 1.5rem;
    color: black;
    text-align: left;
    font-weight: bold;
  }
  .productcard-subtitle {
    font-size: 1.2rem;
    color: black;
    text-align: left;
  }
  .productcard-content {
    font-size: 1rem;
    color: black;
    text-align: left;
  }
}
.productimg {
  width: 300px;
  height: 200px;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.buttonCart {
  background-color: black; /* Bootstrap primary color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: x-large;
  margin: 2px 1px;
  cursor: pointer;

  width: 200px;
  height: 50px;
}
@media only screen and (max-width: 700px) {
  .productcard {
    flex-direction: column;
    height: fit-content;
    padding: 5px;
  }
  .productimg {
    width: 100px;
    height: 100px;
    object-fit: cover;

    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}

.buttonCart:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

</style>
