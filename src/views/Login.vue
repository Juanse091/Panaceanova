<template>
    <div class="background">
        <section class="login_box">
            <h1 class="login_title">Login</h1>
            <form class="form_container">
                <input type="text" class="user_input" placeholder="Usuario" maxlength="20" required>
                <input type="password" class="pass_input" placeholder="Contraseña" maxlength="50" required>
                <a class="recovery_password">Olvide mi Contraseña</a>
                <button class="login_form_btn"><p>Iniciar Sesión</p></button>
            </form>
            <a>No tengo cuenta <span class="sp_color">Registrate</span></a>
        </section> 
    </div>
</template>

<script>
    export default {
        name: 'MedicamentoPage',
        props: {},
    }
</script>

<style scoped>
    @import '../assets/css/Login.css';
</style>