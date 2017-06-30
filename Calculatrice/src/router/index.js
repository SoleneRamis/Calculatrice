import Vue from 'vue'
import Router from 'vue-router'
import Calculatrice from '@/components/Calculatrice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculatrice',
      component: Calculatrice
    }
  ]
})
