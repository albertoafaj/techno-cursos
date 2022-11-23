import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
const Contato = () => import("../views/ContactView.vue")
const Courses = () => import("../views/CoursesView.vue")
const Course = () => import("../views/CourseView.vue")
const Lesson = () => import("../views/LessonView.vue")

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
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: Course,
    props: true,
    children: [
      {
        path: ":aula",
        name: "aula",
        component: Lesson,
        props: true
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
