import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SignupPage from '../views/SignupPage.vue'
// import HomeView from '../views/HomeView.vue'


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  // {
  //   path: '/login',
  //   name: 'login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  // }


  {
    path: '/',
    name: 'Home',
    component: MainPage
  },

  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
