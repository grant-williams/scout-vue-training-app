<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project was created for the Vue Training Badge on Scout and
      bootstrapped with
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">VueCLI</a>.
    </p>
    <h3>Badge Requirements</h3>
    <div class="ul-container">
      <ul>
        <li>✅1 API integration with an API of your choice</li>
        <li>✅1 editable form with real-time input validation</li>
        <li>✅At least 2 pages using Vue Router to navigate between them</li>
        <li>✅At least 3 components with one parent and one child</li>
        <li>
          ✅At least 2 unit tests using
          <a
            href="https://vue-test-utils.vuejs.org/"
            target="_blank"
            rel="noopener"
            >Vue Test Utils</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
.ul-container {
  margin: auto;
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
