import TodoModule from '@/store/modules/TodoModule'
import { usersModule } from '@/store/modules/UsersModule'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import { JsModuleExample } from './modules/JsModuleExample/JsModuleExample'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState { }

Vue.use(Vuex)

const rootModule = new Module({
  modules: {
    usersModule,
    TodoModule
  }
})

const nativeRoot: Store<IRootState> = createStore(rootModule)

nativeRoot.registerModule('JsModuleExample', JsModuleExample)

export default nativeRoot
