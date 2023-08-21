import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import  MedicamentoPage from '../components/MedicamentoPage.vue'
const routes = [
  {
    path: '/', component: HomePage
  },
  {
    path: '/about', 
  },
  {
    path: '/medicamentos', component: MedicamentoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
