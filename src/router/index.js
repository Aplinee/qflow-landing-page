import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/passport/login',
      name: 'Login',
      component: Login
    }
  ]
})
