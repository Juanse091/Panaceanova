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
                <article class="product">
                    <img src="../assets/img/Acetaminofen.png" alt="">
                    <hr>
                    <p>Acetaminofén</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$16.500</p>
                    <router-link  to="/medicamentos">
                        <button class="btn_buy">Comprar</button>
                    </router-link>
                </article>
                <article class="product">
                    <img src="../assets/img/DolexGripa.png" alt="">
                    <hr> 
                    <p>Dolex gripa</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$12.200</p>
                    <router-link to="/medicamentos">
                        <button class="btn_buy">Comprar</button>
                    </router-link>
                </article>
                <article class="product display_none">
                    <img src="../assets/img/Olmetec.png" alt="">
                    <hr>
                    <p>Olmetec 20mg</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$24.350</p>
                    <router-link to="/medicamentos">
                        <button class="btn_buy">Comprar</button>
                    </router-link>
                </article>
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
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    export default {
        name: 'HomePage',
        props: {},
        components: {
            NavBar,
            Footer
        }
    }
</script>

<style scoped>
    @import '../assets/css/HomePage.css';

    .custom-font {
        font-family: 'Montserrat', sans-serif;
    }
</style>