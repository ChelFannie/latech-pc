import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/left-nav'
import system from './system'
import business from './business'
import operation from './operation'
import member from './member'
const Login = () => import('../components/login')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'leftNav',
      component: LeftNav,
      redirect: '/business/order-management',
      children: [
        ...business,
        ...operation,
        ...member,
        ...system
      ]
    }, {
      path: '/login',
      name: '登录',
      component: Login,
      meta: {
        requireAuth: true
      }
    }]
})
