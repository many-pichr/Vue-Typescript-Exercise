<template>
  <!-- Modal -->
<div class="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="modalDetailLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalDetailLabel">User Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div class="detail">
         <img :src="detail.avatar_url" alt="Avatar" class="avatar">
         <div>
          <label><strong>ID:</strong></label> {{detail.id}}
        </div>
        <div>
          <label><strong>Username:</strong></label> {{detail.login}}
        </div>
        <div>
          <label><strong>Profile URL:</strong></label>
          <a v-bind:href="detail.html_url">
          {{detail.html_url}}
        </a>
        </div>
        <div>
          <label><strong>Follower:</strong></label>
          {{follower}}
        </div>
      </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: String,
    detail:Object,
    follower: Number
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.avatar {
  vertical-align: middle;
  width: 100;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
