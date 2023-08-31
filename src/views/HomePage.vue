<template>
    <NavBar></NavBar>
    <body>
        <section class="ads">
            <img src="../assets/img/Publicidad1.jpg" alt="#">
        </section>
        <section class="categories_section">
            <h2 class="custom-font title">CATEGORIAS</h2>
            <div class="categories_container">
                <div class="arrow_container">
                    <i class="bi bi-chevron-compact-left arrow"></i>
                </div>
                <article class="categories">
                    <img src="../assets/img/medicamentos.png" alt="">
                    <p class="txt_categorie"> Categoria 1 </p>
                </article>
                <article class="categories">
                    <img src="../assets/img/medicamentos.png" alt="">
                    <p class="txt_categorie"> Categoria 2 </p>
                </article>
                <article class="categories display_none">
                    <img src="../assets/img/medicamentos.png" alt="">
                    <p class="txt_categorie"> Categoria 3 </p>
                </article>
                <article class="categories display_none">
                    <img src="../assets/img/medicamentos.png" alt="">
                    <p class="txt_categorie"> Categoria 4 </p>
                </article>
                <div class="arrow_container">
                    <i class="bi bi-chevron-compact-right arrow"></i>
                </div>
            </div>
        </section>

        <section class="featured_section">
            <h2 class="title"> PRODUCTOS DESTACADOS</h2>
            <div class="fp_container">
                <div class="arrow_container">
                    <i class="bi bi-chevron-compact-left arrow"></i>
                </div>
                <Producto></Producto>
                <Producto></Producto>
                <Producto></Producto>
                <div class="arrow_container">
                    <i class="bi bi-chevron-compact-right arrow"></i>
                </div>
            </div>
        </section>
    
        <section class="partners_section">
            <h2 class="title">NUESTROS SOCIOS</h2>
            <div class="partners_container">
                <article class="partners"><img src="../assets/img/Logo.png" alt=""> </article>
                <article class="partners"><img src="../assets/img/Aliados2.jpg" alt=""> </article>
                <article class="partners display_none"><img src="../assets/img/Aliados4.jpg" alt=""> </article>
                <article class="partners display_none"><img src="../assets/img/Aliados3.png" alt=""> </article>
            </div>
        </section>
    </body>
    <Footer></Footer>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import Producto from '../components/Producto.vue';
    export default {
        name: 'HomePage',
        props: {},
        components: {
    NavBar,
    Footer,
    Producto,
}
    }
</script>

<style scoped>
    @import '../assets/css/HomePage.css';

    .custom-font {
        font-family: 'Montserrat', sans-serif;
    }
</style>