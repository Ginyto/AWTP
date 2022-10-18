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

    };
  },

  methods: {

    signIn() {
      
      signInAndGetUser().then((data) => {

        console.log(data);

        this.$store.commit("setUser", data);

      }).catch((error) => {
        console.log(error);
      });

    },
  },


};
</script>

<style lang="css" scoped></style>
