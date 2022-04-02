import { ToDo } from '@/models/ToDo'
import { injectable } from 'inversify-props'
import { ITodoRepository } from './ITodoRepository'

@injectable()
export class TodosRepository implements ITodoRepository {
  private static readonly url: string = '/todos'

  fetchTodos (): Promise<ToDo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([new ToDo('to do smth', false)])
      }, 1000)
    })
  }

  getTodo (id: number): Promise<ToDo> {
    throw new Error('Method not implemented.')
  }
}
