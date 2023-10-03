<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <h1 class="mpedidos_title">MIS PEDIDOS</h1>

    <Pedidos></Pedidos>
    <Pedidos></Pedidos>

    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
import Pedidos from '../components/Pedidos.vue'
export default {
    name: 'MisPedidos',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
        Pedidos,
    }
}
</script>

<style scoped>
@import '../assets/css/MisPedidos.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>