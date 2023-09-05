<template>
    <NavBar></NavBar>
    <section class="ads">
        <img src="../assets/img/Publicidad1.jpg" alt="#">
    </section>
    <section class="categories_section">
        <h2 class="custom-font title">CATEGORIAS</h2>
        <div class="categories_container">
            <div class="arrow_container">
                <i class="bi bi-chevron-compact-left arrow"></i>
            </div>

            <CategorieBox></CategorieBox>
            <CategorieBox></CategorieBox>
            <CategorieBox class="display_none"></CategorieBox>
            <CategorieBox class="display_none"></CategorieBox>
            <div class="arrow_container">
                <i class="bi bi-chevron-compact-right arrow"></i>
            </div>
        </div>
    </section>

    <section class="featured_section">
        <h2 class="custom-font title"> PRODUCTOS DESTACADOS</h2>
        <div class="fp_container">
            <div class="arrow_container">
                <i class="bi bi-chevron-compact-left arrow"></i>
            </div>
            <Producto></Producto>
            <Producto></Producto>
            <Producto class="display_none"></Producto>
            <div class="arrow_container">
                <i class="bi bi-chevron-compact-right arrow"></i>
            </div>
        </div>
    </section>

    <section class="partners_section">
        <h2 class="custom-font title">NUESTROS SOCIOS</h2>
        <div class="partners_container">
            <article class="partners"><img src="../assets/img/Logo.png" alt=""> </article>
            <article class="partners"><img src="../assets/img/Aliados2.jpg" alt=""> </article>
            <article class="partners display_none"><img src="../assets/img/Aliados4.jpg" alt=""> </article>
            <article class="partners display_none"><img src="../assets/img/Aliados3.png" alt=""> </article>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Producto from '../components/Producto.vue';
import CategorieBox from '@/components/CategorieBox.vue';
export default {
    name: 'HomePage',
    props: {},
    components: {
        NavBar,
        Footer,
        Producto,
        CategorieBox
    }
}
</script>

<style scoped>
@import '../assets/css/HomePage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>