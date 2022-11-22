import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
const Contato = () => import("../views/ContactView.vue")
const Courses = () => import("../views/CoursesView.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Courses
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
