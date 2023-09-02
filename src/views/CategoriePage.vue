<template>
    <NavBar></NavBar>
    <body>

        <router-link to="/" style="text-decoration: none;"> 
            <BackButton></BackButton>
        </router-link>

        <h1 class="categorie_title">MEDICAMENTOS</h1>

        <section class="Filtros">
            <h2>Filtros</h2>
            <div class="catg" v-for="(section, index) in sections" :key="index">
                <div class="catg_title">
                    <h3>{{ section.title }}</h3>
                    <i class="bi bi-caret-right-fill"></i>
                </div>
                <div class="catg_opciones">
                    <input type="radio">
                </div>
            </div>
        </section>

    </body>
    <Footer></Footer>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import BackButton from '@/components/BackButton.vue';
    export default {
        name: 'CategoriePage',
        props: {},
        components: {
            NavBar,
            Footer,
            BackButton
        },
        data() {
            return {
                sections: [
                    {
                        title: "Marcas",
                    },
                    {
                        title: "Categoria",
                    },
                    {
                        title: "Presentación",
                    }
                ]
            };
        }
    }
</script>

<style scoped>
    @import '../assets/css/CategoriePage.css';
</style>