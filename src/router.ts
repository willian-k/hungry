import Vue from 'vue';
import Router from 'vue-router';
// 牺牲首次加载时间，第一次全部组件全部加载
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail/:index',
      name: 'detail',
      // 切换路由的时候再加载组件
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue'),
    },
    {
      path: '/order',
      name: 'order',
      // 切换路由的时候再加载组件
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Order.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      // 切换路由的时候再加载组件
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Mine.vue'),
    },
  ],
});
