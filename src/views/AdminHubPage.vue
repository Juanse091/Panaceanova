<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <section class="adminhub_opcion">
        <div class="product_user_container">
            <router-link class="adminhub_card adminhub_productos" to="/ProductoAdminPage">
                <h2>PRODUCTOS</h2>
                <p class="adminhub_description">ADMINISTRA, AGREGA O ELIMINA PRODUCTOS</p>
            </router-link>

            <router-link class="adminhub_card adminhub_usuarios" to="/UsuarioAdminPage">
                <h2>USUARIOS</h2>
                <p class="adminhub_description">ADMINISTRA, AGREGA O ELIMINA USUARIOS</p>
            </router-link>
        </div>

        <div class="envios_logout_container">
            <router-link class="adminhub_card adminhub_envios" to="/UsuarioAdminPage">
                <h2>ENVIOS</h2>
                <p class="adminhub_description">ADMINISTRA Y CAMBIA DE STATUS LOS ENVIOS</p>
            </router-link>

            <router-link class="particularhub_card particularhub_logout" to="/">
                <h2>SALIR</h2>
                <p class="particularhub_description">CIERRA TU SESIÓN</p>
            </router-link>
        </div>
    </section>


    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
export default {
    name: 'AdminHubPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    }
}
</script>

<style scoped>
@import '../assets/css/AdminHubPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>