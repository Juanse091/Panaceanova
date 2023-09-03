<template>
    <NavBar></NavBar>
    <body>

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
                <option value="Afiliado">Afiliado</option>
                <option value="Particular">Particular</option>
                <option value="Consorcio">Consorcio</option>
            </select>
            <button class="add_product">
                <p>Agregar Usuario</p>
            </button>
        </section>

        <UsersAdmin></UsersAdmin>
        <UsersAdmin></UsersAdmin>
        
    </body>
    <Footer></Footer>
</template>


<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import BackButton from '../components/BackButton.vue';
    import UsersAdmin from '@/components/UsersAdmin.vue';
    export default {
        name: 'UsuarioAdminPage',
        props: {},
        components: {
    NavBar,
    Footer,
    BackButton,
    UsersAdmin
}
    }
</script>

<style scoped>
    @import '../assets/css/UsuarioAdminPage.css';
</style>