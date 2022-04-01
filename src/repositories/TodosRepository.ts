import { ToDo } from '@/models/ToDo'

export class TodosRepository {
  static async fetchTodos (): Promise<Array<ToDo>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([new ToDo('to do smth', false)])
      }, 1000)
    })
  }
}
