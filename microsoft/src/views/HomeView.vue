<template>

  <div id="zone">
    <SignComposant @user="(event) => user = event " />
    From the HomeView : {{ user.name }} {{ user.username }}
  </div>
  
</template>

<script>
import SignComposant from '@/components/SignComposant.vue';
// @ is an alias to /src


export default {
  name: 'HomeView',

  components: {
    SignComposant
  },

  data() {
    return {
      user: {},
    };
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
