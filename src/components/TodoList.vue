<template>
  <ul class="todo-list">
    <todo-item
      v-bind:key="todo.id"
      v-for="todo in todos"
      v-on:delete-todo="$emit('delete-todo', todo.id)"
      :todo="todo"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    "todo-item": TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
.todo-list {
  margin-top: 10px;
}
ul {
  max-height: 50vh;
  overflow: scroll;
}
</style>
