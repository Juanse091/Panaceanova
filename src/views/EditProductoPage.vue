<template>
    <NavBar></NavBar>

    <router-link to="/" style="text-decoration: none;">
        <BackButton></BackButton>
    </router-link>

    <form class="productadmin_table">
        <table>
            <tr>
                <td>ID</td>
                <td><input type="number" required></td>
            </tr>
            <tr>
                <td>Nombre</td>
                <td><input type="text" maxlength="30" required></td>
            </tr>
            <tr>
                <td>Imagen</td>
                <td><input type="url" maxlength="250" required></td>
            </tr>
            <tr>
                <td>Descripción</td>
                <td><input type="text" maxlength="500" required></td>
            </tr>
            <tr>
                <td>Stock Minimo</td>
                <td><input type="number" required></td>
            </tr>
            <tr>
                <td>Stock Maximo</td>
                <td><input type="number" required></td>
            </tr>
            <tr>
                <td>Existencia</td>
                <td><input type="number" required></td>
            </tr>
            <tr>
                <td>Precio Unitario</td>
                <td><input type="number" step="0.01" required></td>
            </tr>
            <tr>
                <td>Categoria</td>
                <td>
                    <select name="Categoria">
                        <option value=1>Salud y Medicamentos</option>
                        <option value=2>Bienestar Sexual</option>
                        <option value=3>Asistencia Medica</option>
                        <option value=4>Cuidado del bebé</option>
                        <option value=5>Cuidado Personal</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Tipo</td>
                <td>
                    <select name="Tipo">
                        <option v-for="(option, index) in Tipos" :key="index" value="option.value">{{ option.label }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Presentación</td>
                <td>
                    <select>
                        <option v-for="(option, index) in Presentaciones" :key="index" value="option.value">{{ option.label }}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Marca</td>
                <td><input type="text" maxlength="45" required></td>
            </tr>
            <tr>
                <td>Pais Origen</td>
                <td><input type="text" maxlength="45" required></td>
            </tr>
            <tr>
                <td>Cantidad</td>
                <td><input type="text" maxlength="45" required></td>
            </tr>
            <tr>
                <td>Publico</td>
                <td><input type="text" maxlength="45" required></td>
            </tr>
            <tr>
                <td>Venta Libre</td>
                <td><input type="number" min="0" max="1" required></td>
            </tr>
            <tr>
                <td>Unidades de paquete</td>
                <td><input type="number" min="0" max="1"></td>
            </tr>
            <tr>
                <td>Alto</td>
                <td><input type="text" maxlength="45"></td>
            </tr>
            <tr>
                <td>Ancho</td>
                <td><input type="text" maxlength="45"></td>
            </tr>
            <tr>
                <td>Profundidad</td>
                <td><input type="text" maxlength="45"></td>
            </tr>
            <tr>
                <td>Calificación</td>
                <td><input type="number"></td>
            </tr>
            <tr>
                <td>Contador</td>
                <td><input type="number"></td>
            </tr>
        </table>
        <button class="productadmin_form_btn">
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
    name: 'EditProductoPage',
    props: {},
    components: {
        NavBar,
        Footer,
        BackButton,
    },
    data() {
        return {
            Tipos: [
                { value: 1, label: "Medicamentos para la Incontinencia" },
                { value: 2, label: "Antirretrovirales" },
                { value: 3, label: "Oftálmicos" },
                { value: 4, label: "Dermatológicos" },
                { value: 5, label: "Hipoglucemiantes orales" },
                { value: 6, label: "Antihipertensores" },
                { value: 7, label: "Enfermedad ácido péptica" },
                { value: 8, label: "Tiroides" },
                { value: 9, label: "Hipolipemiantes" },
                { value: 10, label: "Antialérgicos y Antihistamínicos" },
                { value: 11, label: "Respiratorios" },
                { value: 12, label: "Hipotiroidismo" },
                { value: 13, label: "Insulinas" },
                { value: 14, label: "Sistema Nervioso" },
                { value: 15, label: "Anticoagulantes" },
                { value: 16, label: "Urológicos" },
                { value: 17, label: "Antiparkinsonianos" },
                { value: 18, label: "Antiácidos" },
                { value: 19, label: "Antivirales para la Hepatitis" },
                { value: 20, label: "Menopausia" },
                { value: 21, label: "Antieméticos" },
                { value: 22, label: "Corticosteroides Tópicos" },
                { value: 23, label: "Antiepilépticos" },
                { value: 24, label: "Antitiroides" },
                { value: 25, label: "AINEs" },
                { value: 26, label: "Osteoporosis" },
                { value: 27, label: "Vitaminas y minerales" },
                { value: 28, label: "Trastornos del Sueño" },
                { value: 29, label: "Anticonvulsivantes" },
                { value: 31, label: "Glaucoma" },
                { value: 32, label: "Antidepresivos" },
                { value: 33, label: "Analgésicos" },
                { value: 34, label: "Antiinfecciosos urinarios" },
                { value: 35, label: "EPOC" },
                { value: 36, label: "Antifúngicos" },
                { value: 37, label: "Inhaladores nasales" },
                { value: 38, label: "Antihiperglucemiantes" },
                { value: 39, label: "Antibióticos" },
                { value: 40, label: "Ansiolíticos" }
            ],
            Presentaciones:[
                { value: 1, label: "Tabletas - Comprimidos" },
                { value: 2, label: "Cápsulas" },
                { value: 3, label: "Jarabe" },
                { value: 4, label: "Inyección" },
                { value: 5, label: "Supositorio" },
                { value: 6, label: "Crema - Ungüento" },
                { value: 7, label: "Gotas" },
                { value: 8, label: "Aerosol" },
                { value: 9, label: "Polvos" },
                { value: 10, label: "Parches Transdérmicos" },
                { value: 11, label: "Ampolla" },
                { value: 12, label: "Óvulo" },
                { value: 13, label: "Gel" },
                { value: 14, label: "Pastilla Efervescente" },
                { value: 15, label: "Spray" },
                { value: 16, label: "Botella" },
                { value: 17, label: "Bolsa" },
                { value: 18, label: "Frasco" }
            ]
        };
    }
}
</script>

<style scoped>
@import '../assets/css/EditProductoPage.css';

.custom-font {
    font-family: 'Montserrat', sans-serif;
}
</style>