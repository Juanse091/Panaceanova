import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import  MedicamentoPage from '../views/MedicamentoPage.vue'
import Quienes_somosPage from '../views/Quienes_somosPage.vue'
import PreguntasFrecuentesPage from '../views/PreguntasFrecuentesPage.vue'
import CarritoPage from '../views/CarritoPage.vue'
import CategoriePage from '../views/CategoriePage'
import ProductoAdminPage from '../views/ProductoAdminPage'

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
