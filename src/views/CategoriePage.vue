<template>
    <NavBar></NavBar>
    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <h1 class="categorie_title">MEDICAMENTOS</h1>

    <section class="content">

        <section class="filtros">
            <h2>Filtros</h2>
            <div class="catg" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
                <div class="catg_title" v-on:click="expandFilter(sectionIndex)">
                    <h3>{{ section.title }}</h3>
                    <i class="bi bi-caret-right-fill" v-if="!section.expanded"></i>
                    <i class="bi bi-caret-down-fill" v-else></i>
                </div>
                <div class="catg_opciones" v-bind:style="{ display: section.expanded ? 'block' : 'none' }">
                    <label v-for="(option, optionIndex) in section.options" :key="optionIndex">
                        <input type="radio" v-model="option.selected" :name="section.title"
                            :disabled="isOptionDisabled(sectionIndex, optionIndex)">
                        {{ option.label }}
                    </label>
                </div>
            </div>
            <button class="filtro_btn" @click="limpiarFiltros">
                <p>Limpiar Filtros</p>
            </button>
        </section>
        <section class="display_productos">
            <div class="row"> <!-- Aqui van los productos :o -->
            </div>
        </section>

    </section>
    <Footer></Footer>
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '@/components/BackButton.vue';
import Producto from '@/components/Producto.vue';

export default {
    name: 'CategoriePage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
        Producto
    },
    data() {
        return {
            sections: [
                {
                    title: "Marcas",
                    expanded: false,
                    options: [
                        { label: "Marca 1", selected: false },
                        { label: "Marca 2", selected: false },
                        // Agrega más opciones según sea necesario
                    ],
                },
                {
                    title: "Categoria",
                    expanded: false,
                    options: [
                        { label: "Categoría 1", selected: false },
                        { label: "Categoría 2", selected: false },
                        // Otras opciones de categoría
                    ],
                },
                {
                    title: "Presentación",
                    expanded: false,
                    options: [
                        { label: "Presentación 1", selected: false },
                        { label: "Presentación 2", selected: false },
                        // Otras opciones de presentación
                    ],
                }
            ]
        };
    },
    methods: {
        handleOptionChange(sectionIndex, optionIndex) {
            // Cuando se selecciona una opción en una sección,
            // deselecciona todas las opciones en las otras secciones.
            for (let i = 0; i < this.sections.length; i++) {
                if (i !== sectionIndex) {
                    this.sections[i].options.forEach((option) => {
                        option.selected = false;
                    });
                }
            }
        },
        isOptionDisabled(sectionIndex, optionIndex) {
            // Comprueba si una opción debe estar desactivada en función de si se ha seleccionado una opción en la misma sección.
            if (this.sections[sectionIndex].options[optionIndex].selected) {
                return false; // No está deshabilitada
            }
            // Si no se ha seleccionado una opción en esta sección, comprueba si se ha seleccionado en alguna otra sección.
            for (let i = 0; i < this.sections.length; i++) {
                if (i !== sectionIndex) {
                    for (const option of this.sections[i].options) {
                        if (option.selected) {
                            return true; // Deshabilitada
                        }
                    }
                }
            }
            return false; // No está deshabilitada

        },
        limpiarFiltros() {
            // Deselecciona todas las opciones en todas las secciones
            for (let i = 0; i < this.sections.length; i++) {
                this.sections[i].options.forEach((option) => {
                    option.selected = false;
                });
            }
            // Habilita todas las opciones deshabilitadas
            for (let i = 0; i < this.sections.length; i++) {
                for (const option of this.sections[i].options) {
                    option.disabled = false;
                }
            }
        },
        expandFilter(sectionIndex) {
            // Cambia el estado expandido de la sección de filtros correspondiente
            this.sections[sectionIndex].expanded = !this.sections[sectionIndex].expanded;
        },

    },
};
</script>
  
<style scoped>
@import '../assets/css/CategoriePage.css';
</style>
  