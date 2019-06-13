import Vue from 'vue';
import Router from 'vue-router';
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
            path: '/order',
            name: 'order',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Order.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
        },
        {
            path: '/discover',
            name: 'discover',
            component: () => import(/* webpackChunkName: "about" */ './views/Discover.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
        },
        {
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
        {
            path: '/list',
            name: 'list',
            component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue'),
        },
    ],
});
