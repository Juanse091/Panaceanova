<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <section class="afiliadohub_opcion">

        <router-link class="afiliadohub_card afiliadohub_formulas" to="/">
            <h2>FORMULAS</h2>
            <p class="afiliadohub_description">REVISA TUS RECETAS MEDICAS Y REALIZA LA COMPRA DE ESTOS</p>
        </router-link>

        <router-link class="afiliadohub_card afiliadohub_envios" to="/MisPedidos">
            <h2>ENVIOS</h2>
            <p class="afiliadohub_description">REVISA TUS PEDIDOS Y EL STATUS DE ESTOS</p>
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
    name: 'AfiliadoHubPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    }
}
</script>

<style scoped>
@import '../assets/css/AfiliadoHubPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>