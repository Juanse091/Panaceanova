<template>
    <NavBar></NavBar>
    <body>

        <router-link to="/" style="text-decoration: none;"> 
            <BackButton></BackButton>
        </router-link>

        <h1 class="PF_title">PREGUNTAS FRECUENTES</h1>
        <section class="Pregunta" >
            <div class="titulo_pregunta">
                <h2>¿Cómo realizo mi pedido?</h2>
                <i class="bi bi-plus-lg expandir_icon" v-on:click="expandir"></i>
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

        <section class="Pregunta">
            <div class="titulo_pregunta">
                <h2>¿Cuánto tiempo toma recibir mi pedido?</h2>
                <i class="bi bi-plus-lg expandir_icon"></i>
            </div> 
            <div class="Respuesta">
                <p>En PanaceaNova Pharmacy, nos esforzamos por ofrecer entregas rápidas y confiables. Si te encuentras en Bogotá y su área metropolitana, recibirás tu pedido en un plazo de 1 a 2 días hábiles. Para ciudades principales, el plazo es de máximo 3 días hábiles. En el resto de las ciudades del país, puedes esperar recibir tu pedido en un plazo máximo de 1 semana. Estos tiempos son siempre y cuando haya stock disponible para despachar el pedido. Trabajamos con eficiencia para que tus productos lleguen a tu puerta de manera segura y a tiempo. Tu satisfacción es nuestra prioridad en cada entrega que realizamos.</p>           
            </div>
        </section>

        <section class="Pregunta">
            <div class="titulo_pregunta">
                <h2>¿Qué métodos de pago aceptan?</h2>
                <i class="bi bi-plus-lg expandir_icon"></i>
            </div> 
            <div class="Respuesta">
                <p>Aceptamos una variedad de métodos de pago seguros y convenientes para que puedas realizar tus compras sin preocupaciones. Entre los métodos de pago que aceptamos se incluyen: Visa, Mastercard, PSE, PayPal y Mercado Pago</p>           
            </div>
        </section>

        <section class="Pregunta">
            <div class="titulo_pregunta">
                <h2>¿Qué hago si tengo problemas con mi pedido?</h2>
                <i class="bi bi-plus-lg expandir_icon"></i>
            </div> 
            <div class="Respuesta">
                <p>Si encuentras algún inconveniente con tu pedido, estamos aquí para ayudarte. Te recomendamos que te pongas en contacto con nuestro equipo de atención al cliente. Puedes enviar un correo electrónico a la dirección proporcionada en la sección de "Información de contacto" en la parte inferior de nuestra página, o también puedes llamarnos al número de teléfono indicado para asistencia inmediata. Nuestro equipo está disponible para resolver cualquier problema que puedas tener y asegurarse de que tu experiencia de compra sea lo más fluida y satisfactoria posible.</p>           
            </div>
        </section>

        <section class="Pregunta">
            <div class="titulo_pregunta">
                <h2>¿Ofrecen asesoramiento medico con los medicamentos?</h2>
                <i class="bi bi-plus-lg expandir_icon"></i>
            </div> 
            <div class="Respuesta">
                <p>En PanaceaNova Pharmacy, queremos asegurarte que brindamos una amplia variedad de medicamentos de alta calidad. Sin embargo, es importante destacar que no ofrecemos asesoramiento médico con respecto a los medicamentos que vendemos. Te recomendamos encarecidamente que busques la orientación de un profesional de la salud o médico calificado para obtener información y recomendaciones médicas específicas.</p>           
            </div>
        </section>

        <section class="Pregunta">
            <div class="titulo_pregunta">
                <h2>¿Puedo comprar medicamentos prescritos?</h2>
                <i class="bi bi-plus-lg expandir_icon"></i>
            </div> 
            <div class="Respuesta">
                <p>En PanaceaNova Pharmacy, ofrecemos la venta de medicamentos prescritos exclusivamente a aquellos que estén asociados a nuestro consorcio médico y bajo la condición de que hayan sido recetados por un médico autorizado. Entendemos la importancia de la seguridad y la salud de nuestros clientes, por lo que es fundamental que los medicamentos se adquieran de acuerdo con las pautas médicas adecuadas. Si cumples con estos criterios, estaremos encantados de proporcionarte los medicamentos necesarios para cuidar de tu bienestar.</p>           
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
            expandido: false
        };
    },
    methods: {
        expandir() {
            this.expandido = !this.expandido;
        }
    }
};
</script>


<style scoped>
    @import '../assets/css/PreguntasFrecuentesPage.css';
</style>