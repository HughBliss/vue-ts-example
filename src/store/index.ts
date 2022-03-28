import Vue from 'vue'
import Vuex from 'vuex'
import { usersModule } from '@/store/modules/UsersModule'
import { createStore, Module } from 'vuex-smart-module'

Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     usersModule: createStore(usersModule)
//   }
// })

const rootModule = new Module({ modules: { usersModule } })

export default createStore(rootModule)
