import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import  MedicamentoPage from '../components/MedicamentoPage.vue'
import Quienes_somosPage from '../views/Quienes_somosPage.vue'
import PreguntasFrecuentesPage from '../views/PreguntasFrecuentesPage'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
