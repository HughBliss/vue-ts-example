import 'reflect-metadata'
import Vue from 'vue'
import App from './App.vue'
import { buildDependencyInjectionContainer } from './InjectionContainer'
import router from './router'
import store from './store'
class AppBootstrap {
  constructor () {
    this.initApp()
    this.initInjections()
  }

  private initInjections () {
    buildDependencyInjectionContainer()
  }

  private initApp () {
    Vue.config.productionTip = false

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

export const app = new AppBootstrap()
