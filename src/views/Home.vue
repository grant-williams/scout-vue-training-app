<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to the Vue.js Training App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    "hello-world": HelloWorld
  }
};
</script>
