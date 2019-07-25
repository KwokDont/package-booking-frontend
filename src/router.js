import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PackageManage from './views/Package.vue'
import Booking from './views/Booking.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'package',
          name: 'package',
          component: PackageManage,
          breadcrumbName: '快递管理'
        },
        {
          path: 'booking',
          name: 'booking',
          component: Booking,
          breadcrumbName: '预约'
        }
      ]
    }
  ]
})
