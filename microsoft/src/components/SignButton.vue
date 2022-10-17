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

      injectUser : this.user
      
    };
  },

  methods: {

    signIn() {
      
      signInAndGetUser().then((data) => {
        
        console.log(this.injectUser);
          
        this.injectUser.value = {
            name: data.name,
            username : data.username,
        }
          console.log(data);
          
          console.log(this.injectUser);

      }).catch((error) => {
        console.log(error);
      });

    },
  },

  inject: ["user"]


};
</script>

<style lang="css" scoped></style>
