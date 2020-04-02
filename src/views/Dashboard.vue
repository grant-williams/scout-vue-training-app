<template>
  <div class="dashboard">
    <h1>This is the Dashboard</h1>
    <p>Add and manage tasks within the todo list below.</p>
    <div class="todo-container">
      <add-todo v-on:add-todo="addTodo"></add-todo>
      <todo-list :todos="todos" v-on:delete-todo="deleteTodo"></todo-list>
    </div>
  </div>
</template>

<script>
import fetchTodoList from "@/api/TodoListAPI.js";
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Dashboard",
  components: {
    "add-todo": AddTodo,
    "todo-list": TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  created() {
    fetchTodoList()
      .then(response => (this.todos = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.todo-container {
  width: 50vw;
  height: 50vh;
  margin: auto;
}
</style>
