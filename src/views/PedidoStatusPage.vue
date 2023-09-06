<template>
    <NavBar></NavBar>
    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <h1 class="PedidoStatus_title">PEDIDO &nbsp<span> ASH1897W</span></h1>

    <section class="status">
        <img class="img_medicamento_status" src="../assets/img/DolexGripa.png" alt="#">
        <hr>
        <h2>Total: <span>$12.200</span></h2>
        <h2>Dirección de envío</h2>
        <div class="shipping_address">
            <p>Transversal 154 #17-233 <br> Torre 2 Apto 503 - Club House 3</p>
            <p>Floridablanca, Santander</p>
        </div>
    </section>

    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '@/components/BackButton.vue';
export default {
    name: 'PedidoStatusPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton
    }
}
</script>

<style scoped>
@import '../assets/css/PedidoStatusPage.css';
</style>