import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Member from '../views/member.vue'
import Search from '../views/search.vue'
import ShopCar from '../views/shopcar.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',

    component: Home
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  { path: '*', component: Home }
]

const router = new VueRouter({
  linkActiveClass: 'mui-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
