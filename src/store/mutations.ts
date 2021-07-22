import { MutationTree } from 'vuex'
import { State, User } from './state'

export enum MutationType {
  SetUsers = 'SET_USERS',
  SetLoading = 'SET_LOADING',
  SetUser = 'SET_USER',
}

export type Mutations = {
  [MutationType.SetUser](state: State, user: User): void
  [MutationType.SetUsers](state: State, users: User[]): void
  [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetUser](state, user) {
    state.user=user
  },
  [MutationType.SetUsers](state, users) {
    state.users = users
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value
  }
}
