import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cookie: localStorage.getItem('username'),
        active: 0
    },
    mutations: {

    },
    actions: {

    },
});
