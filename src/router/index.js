import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router