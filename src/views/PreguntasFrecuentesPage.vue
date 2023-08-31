<template>
    <NavBar></NavBar>
    <body>

        <router-link to="/" style="text-decoration: none;"> 
            <BackButton></BackButton>
        </router-link>

        <h1 class="PF_title">PREGUNTAS FRECUENTES</h1>

        <section class="Pregunta" >
            <div class="titulo_pregunta">
                <h2>¿Cómo realizo mi pedido? </h2>
                <i class="bi bi-plus-lg expandir_icon" v-on:click="expandir_1"></i>
            </div> 
            <div class="Respuesta" v-bind:style="{ display: this.expandido ? 'block' : 'none' }">
                <p>Para hacer un pedido de medicamentos, sigue estos pasos:</p>
                <p class="pasos">
                    1. Navega por nuestro catálogo de medicamentos y agrega los productos al carrito de compras.
                    <br>
                    2. Una vez que hayas seleccionado tus productos, ve al carrito y revisa los artículos agregados.
                    <br>
                    3. Haz clic en "Ir al checkout" y proporciona la información de envío y pago necesaria.
                    <br>
                    4. Revisa y confirma tu pedido. ¡Listo! Recibirás un correo de confirmación con los detalles de tu pedido.
                </p>             
            </div>
        </section>

        <section v-for="(section, index) in sections" :key="index" class="Pregunta" >
            <div class="titulo_pregunta">
                <h2>{{ section.title }}</h2>
                <i class="bi bi-plus-lg expandir_icon" v-on:click="expandir(index)"></i>
            </div> 
            <div class="Respuesta" v-bind:style="{ display: section.expandido ? 'block' : 'none' }">
                <p>{{ section.p }}</p>           
            </div>
        </section>
    </body>
    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'

export default {
    name: 'PreguntasFrecuentesPage',
    components: {
        NavBar,
        Footer,
        BackButton
    },
    data() {
        return {
            expandido: false,
            sections: [
                {
                    title: "¿Cuánto tiempo toma recibir mi pedido?",
                    p: "En PanaceaNova Pharmacy, nos esforzamos por ofrecer entregas rápidas y confiables. Si te encuentras en Bogotá y su área metropolitana, recibirás tu pedido en un plazo de 1 a 2 días hábiles. Para ciudades principales, el plazo es de máximo 3 días hábiles. En el resto de las ciudades del país, puedes esperar recibir tu pedido en un plazo máximo de 1 semana. Estos tiempos son siempre y cuando haya stock disponible para despachar el pedido. Trabajamos con eficiencia para que tus productos lleguen a tu puerta de manera segura y a tiempo. Tu satisfacción es nuestra prioridad en cada entrega que realizamos.",
                    expandido: false
                },
                {
                    title: "¿Sexo pene?",
                    p: "Ay papi santi quiere",
                    expandido: false
                }
            ]
        };
    },
    methods: {
        expandir_1(){
            this.expandido = !this.expandido;
        },
        expandir(index) {
            this.sections[index].expandido = !this.sections[index].expandido;
        }
    }
};
</script>


<style scoped>
    @import '../assets/css/PreguntasFrecuentesPage.css';
</style>