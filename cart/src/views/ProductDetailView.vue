<script setup lang="ts">
type productItem = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    rating: {
        rate: number,
        count: number
    },
    category: string;
}

import { ref, onMounted } from 'vue'
import Rating from 'primevue/rating';

import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const productStore = useProductStore()
    const cartStore = useCartStore()
    const toast = useToast()
    const route = useRoute()
onMounted(() => {
    
    
    productStore.getProductDetail(route.params.id as string )
    
    
})

const doneCounting = computed(() => {
    if (productStore.getcurrentProduct.rating) {
        return productStore.getcurrentProduct.rating['count']
    } else {
        return 0
    }
   
})
const doneRating = computed(() => {
    if (productStore.getcurrentProduct.rating) {
        return productStore.getcurrentProduct.rating['rate']
    } else {
        return 0
    }
   
})

const addAndToast = () => {
    cartStore.addToCart(productStore.getcurrentProduct)
    toast.add({ severity: 'success', summary: 'Success', detail: 'Product added to cart', life: 3000 });
}
</script>
<template>
    <section class="product-detail-container">
        <Toast ref="toast"  position="bottom-center"/>
        <div class="product-detail">
            <img :src="productStore.getcurrentProduct.image" alt="Product Image" />
            <h1>{{ productStore.getcurrentProduct.title }}</h1>
            <p>Category: {{ productStore.getcurrentProduct.category }}</p>
            <Rating v-model="doneRating" readonly />
            <p>({{ doneCounting }})</p>
            

            <p>{{ productStore.getcurrentProduct.description }}</p>
            <p>Price: {{ productStore.getcurrentProduct.price }}</p>
            <Button @click="addAndToast" class="buttonAdd" label="Add to Cart" />
        </div>
    </section>
</template>
<style scoped>
.product-detail-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 2%;
    background-color: #f5f5f5;
}

.product-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}
.product-detail img {
    max-width: 300px;
    margin-bottom: 20px;
}
.product-detail h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}
.product-detail p {
    font-size: 1.2rem;
    margin-bottom: 10px;
}
.buttonAdd {
    background-color:  #04045a;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;

}

</style>