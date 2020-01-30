<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>List of users</h3>
    <p>{{ users }}</p>
  </div>
</template>

<script>
/*
 * This will give you a User object that you get, getAll and add to.
 * Maybe it would be better with Users, dependes on your REST resources
 * Differente convetions may be applied. Eg. Some people like to use a name like
 * API to consolidate references so that API.getUser(), API.getAllUsers, API.getContract() etc.
 * Som like to import only the specific function
 * import {getUser} from "../api/some-user-api";
 * and then use the getUser(id) to retrieve a specific user
 */
import * as User from "api-client";
export default {
  name: "Usebrs",
  props: {
    msg: String
  },
  data() {
    return {
      users: ["Nisse", "Pelle"]
    };
  },
  async mounted() {
    this.users = await User.get(1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
