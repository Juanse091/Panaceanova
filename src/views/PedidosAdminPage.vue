<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <section class="tool_bar">
        <div class="admin_pedido_search">
            <div class="admin_search_container">
                <input type="text" class="admin_search_bar" maxlength="45">
                <i class="bi bi-search admin_search_icon"></i>
            </div>
        </div>

        <label for="categorie"></label>
        <select name="categorie" id="categorie" class="select_categorie">
            <option value="" disabled selected hidden>Categorías</option>
            <option value="Enviado">Enviado</option>
            <option value="Entregado">Entregado</option>
            <option value="Proceso">Proceso</option>
        </select>
    </section>

    <PedidosAdmin></PedidosAdmin>
    <PedidosAdmin></PedidosAdmin>

    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
import PedidosAdmin from '../components/PedidosAdmin.vue'
export default {
    name: 'PedidosAdminPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
        PedidosAdmin,
    }
}
</script>

<style scoped>
@import '../assets/css/PedidosAdminPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>