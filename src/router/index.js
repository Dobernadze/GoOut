import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HmCatalog from "@/components/HmCatalog";
import PersonalAccount from "@/components/PersonalAccount";
import HmReg from "@/components/HmReg";
import NavBar from "@/components/NavBar";
import TheLogIn from "@/components/TheLogIn";
import ThePassRestore from "@/components/ThePassRestore";
import NavFooter from "@/components/NavFooter";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hmcatalog',
    name: 'HmCatalog',
    component: HmCatalog
  },
  {
    path: '/personalaccount',
    name: 'PersonalAccount',
    component: PersonalAccount
  },
  {
    path: '/hmreg',
    name: 'HmReg',
    component: HmReg
  },
  {
    path: '/navbar',
    name: 'NavBar',
    component: NavBar
  },

  {
    path: '/navfooter',
    name: 'NavFooter',
    component: NavFooter
  },
  
  {
    path: '/thelogin',
    name: 'TheLogIn',
    component: TheLogIn
  },

  {
    path: '/ThePassRestore',
    name: 'ThePassRestore',
    component: ThePassRestore
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
