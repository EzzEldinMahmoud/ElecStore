<script setup lang="ts">


</script>

<template>
  <footer>
    <div class="footer">
      <div class="footer-content">
        <h1>fakeshop</h1>
        <p>Fake Shop is a demo e-commerce application built with Vue.js and PrimeVue.</p>
        <p>Explore our wide range of products and enjoy a seamless shopping experience.</p>
        <div class="social-icons">
            <span class="pi pi-facebook"></span>
        <span class="pi pi-whatsapp"></span>
        <span class="pi pi-instagram"></span>
        </div>
        

        <p>© 2023 fakeshop. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>

 
</template>
<style scoped>
.footer {
    position: relative;
  background-color: #04045a;
  padding: 1rem;
  text-align: center;
  width: 100%;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-content h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.footer-content p {
  color: white;
  margin: 0.25rem 0;
}
.footer-content .social-icons {
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
  flex-direction: row;
}
.footer-content .social-icons span {
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

</style>