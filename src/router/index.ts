import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AppInfoList from '../components/appinfolist/AppInfoList.vue'
import GridAppList from '../components/appinfolist/GridAppList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页', icon: 'home' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于我们', icon: 'info' }
    },
    {
      path: '/appinfo',
      name: 'appinfo',
      meta: { title: '应用管理', icon: 'appinfo' },
      children: [{
        path: '/AppInfoList',
        name: 'AppInfoList',
        component: AppInfoList,
        meta: { title: '应用管理列表', icon: 'appinfo' },
      },
      {
        path: '/GridAppList',
        name: 'GridAppList',
        component: GridAppList,
        meta: { title: '应用管理栅格列表', icon: 'appinfo' },
      }],
    }
  ],
})

export default router
