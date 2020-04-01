<template>
  <li>
    <div
      class="todo"
      :class="{ 'is-complete': todo.completed }"
      @click="clickTodo(todo)"
    >
      {{ todo.title }}
    </div>
    <button class="delete" @click="$emit('delete-todo', todo.id)">❌</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    clickTodo(todo) {
      todo.completed = !todo.completed;
    }
  }
};
</script>

<style scoped>
li {
  margin: 2px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  cursor: pointer;
}
li:hover {
  transform: scale(0.99);
}
.todo {
  flex: 12;
  padding: 10px;
}
.is-complete {
  text-decoration: line-through;
}
.delete {
  background: none;
  border: none;
  flex: 0.5;
  cursor: pointer;
}
.todo:hover,
.delete:hover {
  opacity: 0.5;
}
button:active {
  transform: scale(0.9);
}
</style>
