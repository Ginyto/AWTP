<template>

  <BaseButton

    :color="color"

    :style="style"

    @click.stop.prevent="handleClick"
    
    @click="increment">

    <div v-if="isPending">Wait {{count}} second</div>

    <slot />
  
  </BaseButton>

</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },

  data() {
    return {

      count: 1,

      style: "",
    }
  },

  methods: {

    async handleClick() {
      console.log('handleClick');

      this.isPending = true;

      this.style = "cursor: not-allowed";

      await this.WaitForSec();

      this.isPending = false;

      this.style = "cursor: pointer";

      console.log('handleClick end');
    },

    increment() {
      this.count++;
      console.log(this.count);
    },

    WaitForSec() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, this.count*1000)
      })

    }

  },

  computed: {
    isdisable() {
      if (this.isPending) {
        return "disable"
      }
    }
  }
}

</script>

<style lang="css" scoped>


</style>