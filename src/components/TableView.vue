<template>
  <table class="table table-striped table-hover list">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Login</th>
        <th scope="col">Profile URL</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(user, index) in users" :key="index">
        <tr
          @click="handleClickItem(user)"
          data-bs-toggle="modal"
          data-bs-target="#modalDetail"
        >
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.login }}</td>
          <td>
            <a v-bind:href="user.html_url">
              {{ user.html_url }}
            </a>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Modal/>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { MutationType } from '@/store/mutations'
import Apis from "@/services/Apis";
import Modal from '@/components/Modal.vue'
import { State, User } from '@/store/state'
export default defineComponent({
  components: { Modal },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    const users = computed(() => store.state.users)
    const handleClickItem = (user: User) => {
      let url="https://api.github.com";
      store.commit(MutationType.SetUser, user)
      let forllower = user.followers_url.replace(url, "");
      let following = user.following_url.replace(url, "");
      Apis.get(forllower)
        .then((follow: any) => {
          user.follower=follow.data?follow.data.length:0;
          store.commit(MutationType.SetUser, user)
        })
        Apis.get(following.replace('{/other_user}',''))
        .then((follow: any) => {
          user.following=follow.data?follow.data.length:0;
          store.commit(MutationType.SetUser, user)
        })
    }
    return { users,handleClickItem,user }
  }
})
</script>
<style>
.list {
  text-align: left;
  max-width: 80%;
  margin: auto;
}
.table td,
tr {
  text-align: left;
  cursor: pointer;
}
.detail {
  text-align: left;
}
</style>