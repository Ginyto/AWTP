<template>

  <BaseButton

    :disabled="isPending"

    :color="color"

    :style="style"

    @click.stop.prevent="handleClick">

    <div v-if="isPending">Wait</div>

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
      isPending: false,
      isdisable: ""
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

    WaitForSec() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000)
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