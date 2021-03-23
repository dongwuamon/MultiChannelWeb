import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/detail-yasuo/Home.vue')
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
