//作用：我们的入口文件，为了初始化Vue实例，并使用我们需要的插件
import Vue from 'vue';//引入vue组件
import App from './App.vue';//引入App.vue组件
import router from './router';//引入router组件：配置路由
import store from './store';//引入store组件：vuex，实现组件数据共享
import axios from 'axios';//引入axios组件：实现ajax请求
import './registerServiceWorker';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  // router负责操作路由，store负责操作仓库
  router,
  store,
  render: (h) => h(App),//将vnode渲染到真实DOM
}).$mount('#app');//渲染到App.vue中的#app作用域
