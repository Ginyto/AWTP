<template>

  <button id="btn">
    <slot />
  </button>

</template>

<script>
export default {

  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
#btn {
  color: #fff;
  font-weight: bold;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}

#btn:hover {

  background: linear-gradient(315deg, #ff6464 25%, #d3bd42);
}

#btn:focus{
  border: #42d392 2px solid;
  width: 100px;
}


</style>