<template>
    <form class="tarjetapago_container" @submit="submitForm">
        <section class="tarjeta">
            <router-link class="back_btn" to="/EnvioPagoPage" style="text-decoration: none;">
                <i class="bi bi-chevron-left back_icon"></i>
                <h2>Volver</h2>
            </router-link>
            <h2 class="tarjetapago_title">Datos de la Tarjeta</h2>
            <input type="number" class="pago_numero_input" placeholder="Numero Tarjeta" maxlength="10" required>
            <div class="fecha_cvv_container">
                <input type="date" class="pago_fecha_input" placeholder="Fecha Vencimiento" maxlength="45" required>
                <input type="number" class="pago_cvv_input" placeholder="CVV" maxlength="3" required>
            </div>
            <button class="tarjeta_pago_btn" type="submit">PROCEDER AL PAGO</button>
        </section>

        <section class="redbox">
        </section>
    </form>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
export default {
    name: 'Pago_tarjetaPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            this.$router.push({ path: '/PagoExitosoPage' });
        }
    }
}
</script>

<style scoped>
@import '../assets/css/Pago_tarjetaPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>