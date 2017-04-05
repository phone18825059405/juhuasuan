// ÒýÓÃÄ£°å
import index from '../views/index.vue'

import indexTabs from '../views/index-tabs.vue'
/*const indexTabs = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./views/index-tabs.vue'], () => {
    resolve(require('./views/index-tabs.vue'))
  })
}*/
// ÅäÖÃÂ·ÓÉ
export default [
  {
    path: '/',
    component: index
  },
  {
  	path:'/data-id=:id',
  	component: indexTabs
  }
]