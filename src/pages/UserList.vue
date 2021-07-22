<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import TableView from "@/components/TableView.vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
export default defineComponent({
  components: { TableView },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetUsers));
    return { loading };
  },
});
</script>
<template>
  <h3>Users List</h3>
  <div class="container mx-auto mt-4">
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading">
    <TableView />
    </div>
  </div>
</template>
