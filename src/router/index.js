import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import component1 from "@/components/component1";

import ComponenteB from "@/components/ComponenteB";

import ComponentCar from "@/components/ComponentCar";

import ComponentUnique from "@/components/ComponentUnique";

import ComponentRest from "@/components/ComponentRest";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/card',
    name: 'card',
    component: component1
  },

  {
    path: '/unique',
    name: 'unique',
    component: ComponentUnique
  },

  {
    path: '/rest',
    name: 'rest',
    component: ComponentRest
  },

{
  path: '/varias',
  name: 'varias',
  component: ComponentCar
},

{
  path: '/componenteb',
  name: 'componenteb',
  component: ComponenteB
},


  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
