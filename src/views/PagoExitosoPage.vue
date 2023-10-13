<template>
    <div class="pagoexitoso">
        <i class="bi bi-check-circle-fill compra_check"></i>
        <h1>Su compra ha sido realizada con exito</h1>
        <router-link class="volver" to="/" style="text-decoration: none;">
            <h2>Regresar al inicio</h2> 
        </router-link>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
export default {
    name: 'PagoExitosoPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    }
}
</script>

<style scoped>
@import '../assets/css/PagoExitosoPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>