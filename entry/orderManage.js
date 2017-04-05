
import Vue from 'vue/dist/vue.js'

import VueLazyload from 'vue-lazyload'

import $ from 'webpack-zepto'


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/404.png',
  loading: 'dist/loading-spin.svg',
  attempt: 1
})


new Vue({
  el:"#app",
  components:{
    ordermanage:require('../views/orderManage.vue'),
  }
})