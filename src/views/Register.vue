<template>
    <div class="background_register">
        <section class="register_box">
            <h1 class="register_title">Registro</h1>
            <form class="register_form_container">
                <div class="register_column_container">
                    <div class="register_left_column">
                        <input type="text" class="register_name_input" placeholder="Nombre" maxlength="100" required>
                        <input type="email" class="register_email_input" placeholder="Correo" maxlength="60" required>
                        <input type="tel" class="register_phone_input" placeholder="Telefono" maxlength="10" required>
                    </div>
                    <div class="register_right_column">
                        <input type="text" class="register_addres_input" placeholder="Direccion" maxlength="200" required>
                        <input type="text" class="register_documento_input" placeholder="Documento" maxlength="15" required>
                        <input type="password" class="register_pass_input" placeholder="Contraseña" maxlength="45" required>
                    </div>
                </div>
                <button class="register_form_btn">
                    <p>Registrarse</p>
                </button>
            </form>
            <router-link to="/Login" style="text-decoration: none;">
                <a>Ya tengo cuenta <span class="sp_color">Iniciar Sesion </span></a>
            </router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Register',
    props: {},
}
</script>

<style scoped>
@import '../assets/css/Register.css';
</style>