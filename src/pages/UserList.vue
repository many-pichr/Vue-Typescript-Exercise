<template>
  <h3>Users List</h3>
  <table class="table table-striped table-hover list">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Username</th>
        <th scope="col">Profile URL</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(user, index) in users" :key="index">
        <tr
          @click="setUserDetail(user, index)"
          data-bs-toggle="modal"
          data-bs-target="#modalDetail"
        >
          <th scope="row">{{ index + 1 }}</th>
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
  <Modal :detail="detail" :follower="follower" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Apis from "@/services/Apis";
import Response from "@/types/Response";
import User from "@/types/User";
import Modal from "@/components/Modal.vue";
export default defineComponent({
  name: "users-list",
  components: {
    Modal,
  },
  data() {
    return {
      users: [] as User[],
      detail: {},
      follower: "...",
      followe: "...",
    };
  },
  methods: {
    async getUsers() {
      Apis.getAll()
        .then((response: Response) => {
          this.users = response.data;
          localStorage.users = JSON.stringify(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    setUserDetail(user: User, index = -1) {
      this.detail = user;
      let uri = user.followers_url.replace("https://api.github.com", "");
      Apis.getFollower(uri)
        .then((response: Response) => {
          this.follower = response.data.length;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },

  mounted() {
    if (localStorage.users) {
      this.users = JSON.parse(localStorage.users);
    } else {
      this.getUsers();
    }
  },
});
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
}
.detail {
  text-align: left;
}
</style>