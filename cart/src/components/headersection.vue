<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import InputText from 'primevue/inputtext'

import Button from 'primevue/button'

import Drawer from 'primevue/drawer'
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const cartStore = useCartStore()
const value = ref('')
const router = useRouter()


function routerRedirect(url: string) {

  if (url == '/cart' && cartCount.value == 0) {
    return router.replace('/')
  } else if (url == '/cart' && cartCount.value > 0) {
    return router.replace('/cart')
  } else {
    return router.replace(url)
  }
}

const visible = ref(false)
</script>

<template>
  <nav class="navgroupsection">
    <div class="logosection">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.png"
        width="75"
        height="75"
        @click="routerRedirect('/')"
      />
      <h1 @click="routerRedirect('/')"  v-if="width >= 900" style="color: aliceblue;">fakeshop</h1>
    </div>
    <div class="searchCart">
      <IconField style="width: 100%">
      <InputText v-model="value" placeholder="Search" fluid  style="height: 50px;"/>

      <InputIcon class="pi pi-search" />
    </IconField>
      <RouterLink to="/cart">
        
        <OverlayBadge :value="cartStore.getitemCount">
            <i class="pi pi-shopping-cart piconsize" style="font-size: 2rem" />
        </OverlayBadge>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.piconsize {
  font-size: 2rem;
  color: white;
}
.searchicon {
  color: black;
}
.logosection {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  flex-direction: row;
  h1 {
    margin-left: 0.5rem;
    color: black;
    font-size: 2rem;
    font-weight: bold;
  }
}
.searchCart {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: end;
  gap: 1rem;
  margin-left: auto;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.navgroupsection {
  position: fixed;
  background-color: #04045a;
  right: 0;
  left: 0;
  top: 0;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  

}

</style>
