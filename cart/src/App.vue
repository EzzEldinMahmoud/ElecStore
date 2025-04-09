<script setup >
import { RouterLink, RouterView } from 'vue-router'
import Headersection from '@/components/headersection.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <header>
    <Headersection />
  </header>
  <main>
    <RouterView ></RouterView>
  </main>
  <footer>
    <div class="footer">
      <Footer />
    </div>
 
  </footer>
</template>

<style scoped>

  
  header {
    padding: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    padding: 0;
  }
  footer {
    background-color: var(--color-footer);
    padding: 0;
    text-align: center;
    position: relative;
  }

  #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the container takes full viewport height */
}
</style>
