import Vue from 'vue'
import Router from 'vue-router'
import { lookup } from './lookup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "about" */ 'components/layout.vue')
    },
    // 原型2-1:法务信息填写
    {
      path: '/fillLegalInfo',
      name: 'fillLegalInfo',
      component: () => import(/* webpackChunkName: "about" */ 'views/fillLegalInfo'),
      children: [
        {
          path: 'infoList',
          name: 'infoList',
          component: () => import(/* webpackChunkName: "about" */ 'views/fillLegalInfo/list.vue')
        },
        {
          path: 'infoForm',
          name: 'infoForm',
          component: () => import(/* webpackChunkName: "about" */ 'views/fillLegalInfo/infoForm.vue')
        }
      ]
    },
    // 原型2-2法务信息查阅：待查阅
    {
      path: '/lookUp',
      name: 'lookUp',
      component: () => import(/* webpackChunkName: "about" */ 'views/lookUp/index.vue'),
      children: lookup
    }
  ]
})
