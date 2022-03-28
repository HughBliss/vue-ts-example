import { Actions, createMapper, Getters, Module, Mutations } from 'vuex-smart-module'
import UserModel from '@/models/UserModel'

export interface IUsersState {
  users: Array<UserModel>
}

class UsersState implements IUsersState {
  users: Array<UserModel> = [new UserModel('qwe', 'ewq')];
}

class UsersGetters extends Getters<UsersState> {
  users (state: UsersState) {
    return state.users
  }
}

class UsersMutations extends Mutations<UsersState> {
  SET_USERS (arr: Array<UserModel>) {
    this.state.users.push(...arr)
  }
}

export class UsersActions extends Actions<UsersState, UsersGetters, UsersMutations, UsersActions> {
  someAction (someArg: number) : void {
    this.commit('SET_USERS', [])
  }

  async fetchUsers (): Promise<void> {
    return new Promise(() => {
      setTimeout(() => {
        // this.mutations.SET_USERS()

        this.commit('SET_USERS', [new UserModel('qwe', 'qwe')])
      }, 2000)
    })
  }

  async fetchUserById (id: number): Promise<UserModel> {
    return new Promise((resolve) => {
      console.log(id)
      return resolve(new UserModel('reqwe', 'qwere'))
    })
  }
}

export const usersModule = new Module({
  namespaced: true,
  getters: UsersGetters,
  state: UsersState,
  mutations: UsersMutations,
  actions: UsersActions
})

export const usersMapper = createMapper(usersModule)
