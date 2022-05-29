<template>
  <div class="container p-8 mx-auto">
    <input
        v-model="newTask"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg border-gray-200 appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Add a task"
        @keyup.enter="addTask"
    >
    <div class="grid grid-cols-3 gap-4 mt-4">
      <div class="px-3 py-3 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          To-Do
        </p>
        <KanbanColumn :list="todo" @click-close="removeTask($event, todo)" />
      </div>
      <div class="px-3 py-3 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Doing
        </p>
        <KanbanColumn :list="doing" @click-close="removeTask($event, doing)" />
      </div>
      <div class="px-3 py-3 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Done
        </p>
        <KanbanColumn :list="done" @click-close="removeTask($event, done)" />
      </div>
    </div>
  </div>
</template>

<script>
import KanbanColumn from "@/components/KanbanColumn.vue";

export default {
  components: {
    KanbanColumn
  },
  data() {
    return {
      newTask: '',
      todo: [
        {name: 'Todo 1'},
        {name: 'Todo 2'},
      ],
      doing: [],
      done: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.todo.push({name: this.newTask});
        this.newTask = '';
      }
    },
    removeTask(task, list) {
      const index = list.indexOf(task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
  }
}
</script>