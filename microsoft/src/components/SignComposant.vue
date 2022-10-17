<template>

  <div id="zone">

    <SignButton/>

  </div>

</template>


<script>

import SignButton from './SignButton.vue';

export default {
  created() { },
    
    data() {
      return {

      };
    },
    
  props: {},
    
  methods: {},
    
  components: { SignButton }
    
};
</script>


<style lang="css" scoped>

#zone {

  width: 40vh;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3vh;


    background: linear-gradient(45deg, #f3ec78, #af4261);
}
</style>