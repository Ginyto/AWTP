<template>

  <div>
    <h1>Sign In To Microsoft</h1>

    <div class="sign-in">
      <div class="sign-in__button">
        <button @click="signIn">Sign In</button>
        <div v-if="user.name"> Voici votre identité : {{user.name}} et votre address mail : {{user.username}}</div>
      </div>
    </div>
  </div>

</template>

<script>

import { signInAndGetUser } from '../microsoftGraph.js'
export default {

  created() {},
  data() {
    return {
      user : {}
    };
  },
  props: {},
  methods: {

    signIn() {

      signInAndGetUser()
        .then(user => {
          this.user = user;
          this.$emit('user', user);
          console.log(user);
        })
        .catch(error => {
          console.log(error);
        });

    }
  
  },
};
</script>

<style scoped>

</style>