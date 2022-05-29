<template>
  <div class="container p-8 mx-auto">
    <input
        v-model="newTask"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg border-gray-200 appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Add a task"
        @keyup.enter="addTask"
    >
    <div class="grid gap-4 mt-4" :class="'grid-cols-'+columns.length">
      <div
          v-for="(col, index) in columns"
          :key="index"
          class="px-3 py-3 bg-gray-100 rounded-lg"
      >
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          {{ col.name }}
        </p>
        <KanbanColumn :list="col.cards" :id="col.id" @click-close="removeTask($event, todo)" @update-list="updateList" @done="removeFromList" />
      </div>
    </div>
  </div>
</template>

<script>
import KanbanColumn from "@/components/KanbanColumn.vue";
import { mapState, mapActions } from 'vuex'
import { v4 as uuid4 } from 'uuid'

export default {
  components: {
    KanbanColumn
  },
  data() {
    return {
      newTask: '',
    };
  },
  computed: mapState({
    columns: state => state.kanban.columns,
  }),
  methods: {
    addTask() {
      if (this.newTask) {
        this.addToList({listId: this.columns[0].id, element: {id: uuid4(), name: this.newTask}})
        this.newTask = '';
      }
    },
    ...mapActions(['updateList', 'removeFromList', 'addToList'])
  }
}
</script>