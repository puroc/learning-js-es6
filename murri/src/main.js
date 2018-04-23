// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import app1 from './app1' //muuri
import app2 from './app2' //muuri
import app3 from './app3' //muuri
import app4 from './app4' //vue.draggable
import app5 from './app5' //html5 drag and drop


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI, { locale })
Vue.use(app1)
Vue.use(app2)
Vue.use(app3)
Vue.use(app4)
Vue.use(app5)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar }
  { path: '/app1', component: app1 },
  { path: '/app2', component: app2 },
  { path: '/app3', component: app3 },
  { path: '/app4', component: app4 },
  { path: '/app5', component: app5 }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
