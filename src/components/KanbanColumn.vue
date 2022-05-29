<template>
  <Draggable
      class="h-full rounded-lg"
      v-model="_list"
      item-key="id"
      group="task"
      animation="200"
  >
    <template #item="{element}">
      <div class="flex items-start justify-between px-3 pt-3 pb-5 mt-3 bg-white border border-white rounded shadow">
        <p>{{ element.name }}</p>
        <div class="cursor-pointer" @click="$emit('done', { listId:this.$props.id, elementId: element.id })">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </template>
  </Draggable>
</template>

<script>
import Draggable from "vuedraggable";

export default {
  components: {
    Draggable
  },
  props: {
    id: {
      type: String
    },
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    _list: {
      get() {
        return this.list
      },
      set(value) {
        this.$emit('updateList', {listId: this.$props.id, list: value})
      }
    }
  },
  emits: ["updateList", "done"]
}
</script>