import axios from "axios";

async function fetchTodoList() {
  return await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4");
}

export default fetchTodoList;
