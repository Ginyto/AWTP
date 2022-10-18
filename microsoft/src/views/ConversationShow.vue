<template>
  <div>Congratulation you are now logged as : {{user}} </div>
  <button @click="show">show</button>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    user: "",
  },
  methods: {
    show() {
      console.log(this.user[1]);
      console.log(this.$router.params)
    }
  },
};
</script>

<style lang="css" scoped></style>