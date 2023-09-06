<template>
    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <h2 class="envios_direccion_title">Login</h2>
    <section class="direccion_box">
        <form class="login_form_container">
            <input type="text" class="user_input" placeholder="Usuario" maxlength="20" required>
            <input type="password" class="pass_input" placeholder="Contraseña" maxlength="50" required>
            <a class="recovery_password">Olvide mi Contraseña</a>
            <button class="login_form_btn">
                <p>Iniciar Sesión</p>
            </button>
        </form>
        <router-link to="/Register" style="text-decoration: none;">
            <a>No tengo cuenta <span class="sp_color">Registrate</span></a>
        </router-link>
    </section>

</template>

<script>
export default {
    name: 'Login',
    props: {},
}
</script>

<style scoped>
@import '../assets/css/Login.css';
</style>