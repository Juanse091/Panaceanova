<template>

    <form class="enviopago_container">
        <section class="envio">
            <input type="text">
        </section>

        <section class="pago">

        </section>
    </form>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '@/components/BackButton.vue';
export default {
    name: 'Envio_PagoPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton
    }
}
</script>

<style scoped>@import '../assets/css/Envio_PagoPage.css';</style>