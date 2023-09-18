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
                        <option value="salud_medicamentos">Salud y Medicamentos</option>
                        <option value="bienestar_sexual">Bienestar Sexual</option>
                        <option value="asistencia_medica">Asistencia Medica</option>
                        <option value="cuidado_bebe">Cuidado del bebé</option>
                        <option value="cuidado_personal">Cuidado Personal</option>
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
                { value: "incontinencia", label: "Medicamentos para la Incontinencia" },
                { value: "antirretrovirales", label: "Antirretrovirales" },
                { value: "oftalmicos", label: "Oftálmicos" },
                { value: "dermatologicos", label: "Dermatológicos" },
                { value: "hipoglucemiantes_orales", label: "Hipoglucemiantes orales" },
                { value: "antihipertensivos", label: "Antihipertensivos" },
                { value: "acido_peptica", label: "Enfermedad ácido péptica" },
                { value: "tiroides", label: "Tiroides" },
                { value: "hipolipemiantes", label: "Hipolipemiantes" },
                { value: "antialergicos_antihistamicos", label: "Antialérgicos y Antihistamínicos" },
                { value: "respiratorios", label: "Respiratorios" },
                { value: "hipotiroidismo", label: "Hipotiroidismo" },
                { value: "insulinas", label: "Insulinas" },
                { value: "sistema_nervioso", label: "Sistema Nervioso" },
                { value: "anticoagulantes", label: "Anticoagulantes" },
                { value: "urologicos", label: "Urológicos" },
                { value: "antiparkinsonianos", label: "Antiparkinsonianos" },
                { value: "antiacidos", label: "Antiácidos" },
                { value: "hepatitis", label: "Antivirales para la Hepatitis" },
                { value: "menopausia", label: "Menopausia" },
                { value: "antiemeticos", label: "Antieméticos" },
                { value: "corticoesteroides_topicos", label: "Corticosteroides Tópicos" },
                { value: "antiepilepticos", label: "Antiepilépticos" },
                { value: "antitiroides", label: "Antitiroides" },
                { value: "aines", label: "AINEs" },
                { value: "osteoporosis", label: "Osteoporosis" },
                { value: "vitaminas_minerales", label: "Vitaminas y minerales" },
                { value: "trastornos_sueño", label: "Trastornos del Sueño" },
                { value: "anticonvulsivantes", label: "Anticonvulsivantes" },
                { value: "glaucoma", label: "Glaucoma" },
                { value: "antidepresivos", label: "Antidepresivos" },
                { value: "analgesicos", label: "Analgésicos" },
                { value: "antiinfecciosos_urinarios", label: "Antiinfecciosos urinarios" },
                { value: "epoc", label: "EPOC" },
                { value: "antifungicos", label: "Antifúngicos" },
                { value: "inhaladores_nasales", label: "Inhaladores nasales" },
                { value: "antihiperglucemiantes", label: "Antihiperglucemiantes" },
                { value: "antibioticos", label: "Antibióticos" },
                { value: "ansioliticos", label: "Ansiolíticos" }
            ],
            Presentaciones:[
                { value: "tabletas_comprimidos", label: "Tabletas - Comprimidos" },
                { value: "capsulas", label: "Cápsulas" },
                { value: "jarabe", label: "Jarabe" },
                { value: "inyeccion", label: "Inyección" },
                { value: "supositorio", label: "Supositorio" },
                { value: "crema_unguento", label: "Crema - Ungüento" },
                { value: "gotas", label: "Gotas" },
                { value: "aerosol", label: "Aerosol" },
                { value: "polvos", label: "Polvos" },
                { value: "parches", label: "Parches Transdérmicos" },
                { value: "ampolla", label: "Ampolla" },
                { value: "ovulo", label: "Óvulo" },
                { value: "gel", label: "Gel" },
                { value: "pastilla", label: "Pastilla Efervescente" },
                { value: "spray", label: "Spray" },
                { value: "botella", label: "Botella" },
                { value: "bolsa", label: "Bolsa" },
                { value: "frasco", label: "Frasco" }
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