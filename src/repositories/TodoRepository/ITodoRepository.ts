import { ToDo } from '@/models/ToDo'

export interface ITodoRepository {
  fetchTodos(): Promise<Array<ToDo>>
  getTodo(id : number) : Promise<ToDo>
}
