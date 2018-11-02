//Vue and Library Imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import { jsPanel } from 'jspanel4'

//CSS Imports
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'jspanel4/es6module/jspanel.css'

//Component Imports
import App from './TrainingPage.vue'
import HelloWorld from './components/HelloWorld'
import HTML from './components/HTML5'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$panel', {value: jsPanel})

Vue.use(VueRouter);

const routes = [
  { path: '/train-html', component: HTML},
  { path: '/test', component: HelloWorld }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
