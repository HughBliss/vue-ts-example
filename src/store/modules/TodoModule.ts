import { ToDo } from '@/models/ToDo'
import { ITodoRepository } from '@/repositories/TodoRepository/ITodoRepository'
import { Inject } from 'inversify-props'
import {
  Actions,
  createMapper,
  Getters,
  Module,
  Mutations
} from 'vuex-smart-module'

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
  SET_TODOS (arr: Array<ToDo>): void {
    this.state.todos = arr
  }
}

export class TodoActions extends Actions<
  TodoState,
  TodoGetters,
  TodoMutations,
  TodoActions
> {
  @Inject()
  private todosRepository !: ITodoRepository

  async fetchTodos (): Promise<void> {
    const todos = await this.todosRepository.fetchTodos()
    this.commit('SET_TODOS', todos)
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
