import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Mascotas from './components/Mascotas.vue'

const routes = [{
  //Primera ruta
  path: '/',
  name: 'root',
  //Lo maneja App
  component: App
},
{
  path: '/user/logIn',
  name: "logIn",
  component: LogIn
},
{
  path: '/user/signUp',
  name: "signUp",
  component: SignUp
},
{
  path: '/user/home',
  name: "home",
  component: Home
},
{
  path: '/user/Account',
  name: "account",
  component: Account
},
{
  path: '/user/MascotasParaAdoptar',
  name: "mascotas",
  component: Mascotas
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
