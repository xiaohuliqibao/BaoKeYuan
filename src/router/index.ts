import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/IndexView.vue'),
      redirect: '/index/system',
      children: [
        {
          path: '/index/system',
          name: 'system',
          component: () => import('../views/SystemInfo.vue')
        },
        {
          path: '/index/game',
          name: 'game',
          component: () => import('../views/GameInfo.vue')
        },
        {
          path: '/index/musicplayer',
          name: 'musicplayer',
          component: () => import('../views/MusicApp.vue')
        }
      ]
    }
  ]
})

//增加了路由守卫，当localStorage.getItem无token时，自动跳转到登录界面
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' && token) {
    next('/index')
  }
  if (to.path !== '/login' && !token) {
    next('/login')
  }
  next()
})
export default router
