import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// new Vuex.Store创建一个数据仓库
export default new Vuex.Store({
  state: {
    author: 'hanson',
    loading: 0,
    isFixed: false,
    scrollY: 0,
    isShowFooter: 1,
  },
  // 突变改变行为
  mutations: {

  },
  // 3行动行为 触发mutations action触发mutations
  actions: {

  },
  // 2.获取
  // gettwes,
  // 1.模块化
  // modules
});
