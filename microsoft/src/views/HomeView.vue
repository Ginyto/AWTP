<template>

  <div id="zone">
    <SignComposant/>
    Here are the data of the user with provide and inject: {{this.$store.getters.getUser.name}} {{this.$store.getters.getUser.username}}
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
  }


  
  
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
