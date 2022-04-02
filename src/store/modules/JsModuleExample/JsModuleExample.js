import { cid, container, getContainer } from 'inversify-props'
import 'reflect-metadata'
import { TodosRepository } from '../../../repositories/TodoRepository/TodosRepository'

const state = () => ({
  isLoading: false,
  errMessage: '',
  todos: []

})

const mutations = {
  SET_TODOS: (state, todos) => {
    state.todos = todos
  },
  SET_ERR_MESSAGE: (state, message) => {
    state.errMessage = message
  },
  START_LOADING: state => {
    state.isLoading = true
  },
  STOP_LOADING: state => {
    state.isLoading = false
  }
}

const actions = {

  fetchTodos: async ({ commit }) => {
    commit('START_LOADING') // не подсказывается
    try {
      const repo = new TodosRepository()
      const todos = await repo.fetchTodos()
      commit('SET_TODOS', todos)
    } catch (e) {
      commit('SET_ERR_MESSAGE', e.toString())
    }
    commit('STOP_LOADING')
  }
}

export const JsModuleExample = {
  namespaced: true,
  actions,
  state,
  mutations

}
