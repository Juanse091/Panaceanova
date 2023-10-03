<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <form class="pedidoadmin_table">
        <table>
            <tr>
                <td>ID</td>
                <td><input type="number" required></td>
            </tr>
            <tr>
                <td>Fecha</td>
                <td><input type="text" maxlength="45" required></td>
            </tr>
            <tr>
                <td>No Orden</td>
                <td><input type="number"></td>
            </tr>
            <tr>
                <td>Estado</td>
                <td>                    
                    <select name="tipo_usuario">
                        <option value=1>Enviado</option>
                        <option value=2>Entregado</option>
                        <option value=3>Proceso</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Total</td>
                <td><input type="number" step="0.01" required></td>
            </tr>
        </table>
        <button class="pedidoadmin_form_btn">
            <p>Guardar</p>
        </button>
    </form>


    <Footer></Footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import BackButton from '../components/BackButton.vue'
export default {
    name: 'EditPedidoPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    },
}
</script>

<style scoped>
@import '../assets/css/EditPedidoPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>