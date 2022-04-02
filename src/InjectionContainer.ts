import { container } from 'inversify-props'
import { ITodoRepository } from './repositories/TodoRepository/ITodoRepository'
import { TodosRepository } from './repositories/TodoRepository/TodosRepository'

export const buildDependencyInjectionContainer = (): void => {
  container.addTransient<ITodoRepository>(TodosRepository)
}
