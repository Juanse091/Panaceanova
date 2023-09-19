<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <section class="particularhub_opcion">

        <router-link class="particularhub_card particularhub_envios" to="/MisPedidos">
            <h2>ENVIOS</h2>
            <p class="particularhub_description">REVISA TUS PEDIDOS Y EL STATUS DE ESTOS</p>
        </router-link>

        <router-link class="particularhub_card particularhub_logout" to="/">
            <h2>SALIR</h2>
            <p class="particularhub_description">CIERRA TU SESIÓN</p>
        </router-link>

    </section>

    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
export default {
    name: 'ParticularHubPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    }
}
</script>

<style scoped>
@import '../assets/css/ParticularHubPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>