<template>
    <NavBar></NavBar>
    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <section class="tool_bar">
        <div class="admin_product_search">
            <div class="admin_search_container">
                <input type="text" class="admin_search_bar" maxlength="45">
                <i class="bi bi-search admin_search_icon"></i>
            </div>
        </div>

        <label for="categorie"></label>
        <select name="categorie" id="categorie" class="select_categorie">
            <option value="" disabled selected hidden>Categorías</option>
            <option value="medicamentos">Medicamentos</option>
            <option value="salud_sexual">Salud sexual</option>
            <option value="asistencia_medica">Asistencia Medica</option>
            <option value="bebes">Bebes</option>
        </select>

        <button class="add_product">
            <p>Agregar Producto</p>
        </button>
    </section>

    <ProductoAdmin></ProductoAdmin>
    <ProductoAdmin></ProductoAdmin>
    <Footer></Footer>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue';
import ProductoAdmin from '@/components/ProductoAdmin.vue';
export default {
    name: 'ProductoAdminPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
        ProductoAdmin,
    }
}
</script>

<style scoped>
@import '../assets/css/ProductoAdminPage.css';
</style>