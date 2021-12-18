import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../components/Todos.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/',
    name: 'todos',
    component: Todos
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos
  },
  {
    path: '/alltodos',
    name: 'list',
    component: List
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
