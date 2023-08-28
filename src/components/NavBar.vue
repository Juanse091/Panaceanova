<template>
  <header>
    <div class="logo">
      <img src="../assets/img/LogoPanaceaNova.png" alt="#">
    </div>

    <div class="nav">
      <div class="search_container">
        <input type="text" class="search_bar" maxlength="45">
        <i class="bi bi-search search_icon"></i>
      </div>
    </div>

    <div class="log">
      <div class="login_container">
        <button class="login" style="border: none;">
          <p class="texto_login">Iniciar sesión</p>
          <i class="bi bi-person-circle login_icon"></i>
        </button>
      </div>

      <router-link to="/Carrito">
        <div class="shop_container">
          <button class="shoppingcart" style="border: none;">
              <i class="bi bi-cart-fill shop_icon"></i>
          </button>
          <div class="counter">
              <p class="quant">0</p>
          </div>
        </div>
      </router-link>
    </div>

  </header>
  <div class="division"></div>

</template>

<script>
import { RouterLink } from 'vue-router';

  export default {
    name: 'NavBar',
    props: {},
    components: { RouterLink }
}
</script>

<style scoped>
  @import '../assets/css/NavBar.css';
</style>