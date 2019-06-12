import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue')
    },
  ]
})

// //路由守卫
// router.beforeEach((to,from,next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if(to.path == '/login'){
//     next();
//   }else{
//     //是否在登录状态
//     isLogin ? next() : next('/login');
//   }
// })

export default router;