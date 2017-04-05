// 引用 vue 没什么要说的
import Vue from 'vue/dist/vue.js'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
import VueLazyload from 'vue-lazyload'

import Hammer from '../public/js/hammer.js'

// 入口文件为 src/App.vue 文件 所以要引用
//import App from './views/app.vue'
// 引用路由配置文件
import routes from './routes'

import $ from 'webpack-zepto'


Vue.use(VueRouter)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/404.png',
  loading: 'dist/loading-spin.svg',
  attempt: 1
})
// 使用配置文件规则
const router = new VueRouter({
  routes,

})
/*router.beforeEach((to, from, next) => {
	console.log(to.path)
  var path = to.path;
  if(/\/data-id=[0-9]+/.test(to.path)){
  	next({ path: '/' });
  	console.log(path)
  }else{
  	 next();
  }
 
  //next(to.path)
})*/
router.afterEach(() => {
   $('.jx-drop-btn').removeClass('menu-open');
   $('#JX_Submenu').removeClass('menu-open');
   document.body.scrollTop = 0;
})
Vue.component('nv-head', require('../components/head.vue'));
// 跑起来吧
/*new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})*/
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

window.onload = function(){
	document.querySelector('html').style.fontSize = window.innerWidth * 0.266666667 +'px';
}
// 现在，应用已经启动了