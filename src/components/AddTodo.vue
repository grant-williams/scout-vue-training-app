<template>
  <div>
    <form @submit="addTodo">
      <input
        :class="{ 'input-error': error }"
        type="text"
        v-model="title"
        name="title"
        placeholder="Create an awesome Vue application..."
      />
      <input type="submit" value="Add Task" class="btn" />
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: null,
      error: ""
    };
  },
  watch: {
    title(value) {
      this.title = value;
      if (value === "") {
        this.error = "This field is required.";
      } else if (value && value.length < 3) {
        this.error = "Minimum of 3 characters required.";
      } else {
        this.error = "";
      }
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      if (this.title === null) {
        this.error = "This field is required.";
      }

      if (!this.error) {
        const newTodo = {
          id: uuid.v4(),
          title: this.title,
          completed: false
        };
        //Send up to parent
        this.$emit("add-todo", newTodo);
        this.title = null;
        this.error = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
}

.input-error {
  border: 2px solid red;
}

input[type="submit"] {
  flex: 2;
  padding: 10px;
}

.btn {
  display: inline-block;
  border: none;
  background: #2c3e50;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #42b983;
}

p {
  color: red;
}
</style>
