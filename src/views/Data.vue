<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Users msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from "@/components/Users.vue";

export default {
  name: "home",
  components: {
    Users
  }
};
</script>
