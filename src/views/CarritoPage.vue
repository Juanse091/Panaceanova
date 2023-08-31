<template>
    <NavBar></NavBar>
    <body>

        <router-link to="/" style="text-decoration: none;"> 
            <BackButton></BackButton>
        </router-link>
        
        <h1 class="cart_title">CARRITO</h1>
        <section class="resumen">
            <ProductoCheckout></ProductoCheckout>
            <ProductoCheckout></ProductoCheckout>
        </section>

        <div class="cart_line_container">
            <hr class="cart_line_div">
        </div>

        <section class="cart_pago">
            <h2>Subtotal</h2>
            <div class="container_precio_pagar">
                <h2>$36.600</h2>
                <button class="cart_checkout">
                    <p>IR AL CHECKOUT</p>
                </button>
            </div>
        </section>

    </body>
    <Footer></Footer>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Footer from '../components/Footer.vue'
    import BackButton from '../components/BackButton.vue'
    import ProductoCheckout from '../components/ProductoCheckout.vue'
    export default {
        name: 'CarritoPage',
        props: {},
        components: {
    NavBar,
    Footer,
    BackButton,
    ProductoCheckout,
}
    }
</script>

<style scoped>
    @import '../assets/css/CarritoPage.css';

    .custom-font {
        font-family: 'Montserrat', sans-serif;
    }
</style>