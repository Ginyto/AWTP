<template>
  <div class="btn">
    <button @click="signIn">Sign In</button>
  </div>  
</template>

<script>

import { signInAndGetUser } from "../microsoftGraph.js";
export default {

  data() {
    return {
      user: {},
    };
  },
  props: {},

  methods: {

    signIn() {
      
      signInAndGetUser().then((user) => {
          this.user = user;
          this.$emit("user", user);
          console.log(user);
          
        }).catch((error) => {
          console.log(error);
        });

    },
  },
};
</script>

<style lang="css" scoped></style>
