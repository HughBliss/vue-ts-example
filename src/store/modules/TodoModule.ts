import { ToDo } from '@/models/ToDo'
import { Actions, createMapper, Getters, Module, Mutations } from 'vuex-smart-module'

export class TodoState {
  todos: Array<ToDo> = []
}

export class TodoGetters extends Getters<TodoState> {
  todos (state: TodoState): Array<ToDo> {
    return state.todos
  }

  completedCount (state: TodoState): number {
    return state.todos.filter(t => t.isComplete).length
  }
}

export class TodoMutations extends Mutations<TodoState> {
  SET_TODOS (arr: Array<ToDo>) {
    this.state.todos = arr
  }
}

export class TodoActions extends Actions<TodoState, TodoGetters, TodoMutations, TodoActions> {
  async fetchTodos (): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.commit('SET_TODOS', [new ToDo('to do smth', false)])
        resolve()
      }, 1000)
    })
  }
}

const TodoModule = new Module({
  namespaced: true,
  state: TodoState,
  getters: TodoGetters,
  mutations: TodoMutations,
  actions: TodoActions
})

export default TodoModule

export const TodoMapper = createMapper(TodoModule)
