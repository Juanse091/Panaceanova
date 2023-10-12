import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import  MedicamentoPage from '../views/MedicamentoPage.vue'
import Quienes_somosPage from '../views/Quienes_somosPage.vue'
import PreguntasFrecuentesPage from '../views/PreguntasFrecuentesPage.vue'
import CarritoPage from '../views/CarritoPage.vue'
import CategoriePage from '../views/CategoriePage'
import ProductoAdminPage from '../views/ProductoAdminPage'
import UsuarioAdminPage from '../views/UsuarioAdminPage'
import Login from '../views/Login'
import Register from '../views/Register'
import MisPedidosPage from '../views/MisPedidosPage'
import PedidoStatusPage from '../views/PedidoStatusPage'
import AdminHubPage from '../views/AdminHubPage'
import AfiliadoHubPage from '../views/AfiliadoHubPage'
import ParticularHubPage from '../views/ParticularHubPage'
import EditProductoPage from '../views/EditProductoPage'
import EditUsuarioPage from '../views/EditUsuarioPage'
import EditPedidoPage from '../views/EditPedidoPage'
import PedidosAdminPage from '../views/PedidosAdminPage'
import Envio_PagoPage from '../views/Envio_PagoPage'

const routes = [
  {
    path: '/', component: HomePage
  },
  {
    path: '/about', 
  },
  {
    path: '/medicamentos', component: MedicamentoPage
  },
  {
    path: '/Quienes_somos', component: Quienes_somosPage
  },
  {
    path: '/PreguntasFrecuentes', component: PreguntasFrecuentesPage
  },
  {
    path: '/Carrito', component: CarritoPage
  },
  {
    path: '/Categorie', component: CategoriePage
  },
  {
    path: '/ProductoAdminPage', component: ProductoAdminPage
  },
  {
    path: '/UsuarioAdminPage', component: UsuarioAdminPage
  },
  {
    path: '/Login', component: Login
  },
  {
    path: '/Register', component: Register
  },
  {
    path: '/MisPedidos', component: MisPedidosPage
  },
  {
    path: '/PedidoStatus', component: PedidoStatusPage
  },
  {
    path: '/AdminHub', component: AdminHubPage
  },
  {
    path: '/AfiliadoHub', component: AfiliadoHubPage
  },
  {
    path: '/ParticularHub', component: ParticularHubPage
  },
  {
    path: '/EditProducto', component: EditProductoPage
  },
  {
    path: '/EditUsuario', component: EditUsuarioPage
  },
  {
    path: '/EditPedido', component: EditPedidoPage
  },
  {
    path: '/PedidosAdminPage', component: PedidosAdminPage
  },
  {
    path: '/EnvioPagoPage', component: Envio_PagoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    return savedPosition || {top:0}
  }
})

export default router
