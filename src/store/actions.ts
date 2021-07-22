import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'
import api from '@/services/Apis'
import db from '@/services/indexedDB'
export enum ActionTypes {
  GetUsers = 'GET_USERS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetUsers](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetUsers]({ commit }) {
    let users: any;
    commit(MutationType.SetLoading, true)
    await sleep(500);
    await db.get('users')
      .then((data: any) => data ? users = data : users = []);
    if (users.length > 0) {
      commit(MutationType.SetUsers, users);

    } else {
      await api.getAll()
        .then((response: any) => {
          commit(MutationType.SetUsers, response.data);
          db.set('users', response.data);
        })
        .catch((e: Error) => console.log("error=>", e));
    }
    commit(MutationType.SetLoading, false)
  }
}
