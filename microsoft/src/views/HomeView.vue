<template>

  <div id="zone">
    <SignComposant/>
    Here are the data of the user with provide and inject: {{this.$store.getters.getUser.name}} {{this.$store.getters.getUser.username}}

    <div v-show="this.$store.getters.getUser.name != null">
      <router-link :to="{name : 'conversation', params : {user : name }}">Go to conversation only if you are logged</router-link>
    </div>
  </div>
  
</template>

<script>
import SignComposant from '@/components/SignComposant.vue';
import { computed } from 'vue';
// @ is an alias to /src


export default {
  name: 'HomeView',

  components: {
    SignComposant
  },

  data() {
    return {
    
    };
  },

  computed: {
    name() {
      if (this.$store.getters.getUser.name != null) {
        return this.$store.getters.getUser.name;
      }
      else {
        return 'username';
      }
    }
  },


  
  
}
</script>

<style lang="css" scoped>

  #zone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
</style>
