<template>
    <footer>
        <section class="informacion">
            <div class="nosotros">
                <h2 class="info_titles">Nosotros</h2>
                <a href="">
                    <router-link to="/Quienes_somos" class="info_text" style="text-decoration: none;"> 
                        <p>¿Quienes Somos?</p> 
                    </router-link>
                </a>
                <a href="">
                    <router-link to="/PreguntasFrecuentes" class="info_text" style="text-decoration: none;"> 
                        <p>Preguntas Frecuentes</p> 
                    </router-link>
                </a>
                <a href="">
                    <p class="info_text">Politicas y terminos de uso</p>
                </a>
            </div>
            <div class="contactanos">
                <h2 class="info_titles">Contáctanos</h2>
                <p class="info_text">panaceanova@gmail.com</p>
                <p class="info_text">+57 3228324910</p>
            </div>
            <div class="encuentranos">
                <h2 class="info_titles">Encuéntranos</h2>
                <p class="info_text">Cra. 68c Bis A #37b Sur-74 a 37b Sur-2 <br> Bogotá - Colombia</p>
            </div>
        </section>

        <section class="redes_sociales">
            <div class="red_social">
                <img src="../assets/svg/facebook.svg" alt="">
            </div>
            <div class="red_social">
                <img src="../assets/svg/twitter.svg" alt="">
            </div>
            <div class="red_social">
                <img src="../assets/svg/youtube.svg" alt="">
            </div>
            <div class="red_social">
                <img src="../assets/svg/instagram.svg" alt="">
            </div>
        </section>
        
        <section class="metodos_pago">
            <div class="metodo">
                <img src="../assets/img/Visa_logo.png" alt="#" class="visa">
            </div>
            <div class="metodo">
                <img src="../assets/img/Mastercard_logo.png" alt="#" class="master">
            </div>
            <div class="metodo">
                <img src="../assets/img/pse_logo.png" alt="#" class="pse">
            </div>
            <div class="metodo">
                <img src="../assets/img/PayPal_logo.png" alt="#" class="paypal">
            </div>
            <div class="metodo">
                <img src="../assets/img/Mercadopago_logo.png" alt="#" class="mercado">
            </div>
        </section>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {}
  }
</script>

<style scoped>
  @import '../assets/css/Footer.css';
</style>