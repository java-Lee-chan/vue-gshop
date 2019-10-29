/*
  入口JS
*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';

import {Button} from 'mint-ui';

import './mock/mockServer.js';  // 加载mockServer即可
import loading from './common/imgs/loading.gif';
import './filters'; // 加载过滤器

Vue.component(Button.name, Button); // <mt-button>

Vue.use(VueLazyload, {  // 内部自定义一个指令lazy
  loading
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,   // 使用上vue-router
  store // 使用上vuex
});
