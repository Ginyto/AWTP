<template>

  <button id="btn" :class=color>
    <slot />
  </button>

</template>

<script>
export default {

  created() {},
  data() {
    return {};
  },

  props: {
    color : {
      type: String,
      default: 'primary'
    }
  },

  methods: {},
};
</script>

<style lang="css" scoped>
#btn {
  color: #fff;
  font-weight: bold;
  /* background: linear-gradient(315deg, #42d392 25%, #647eff); */
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}

#btn:hover {

  background: linear-gradient(315deg, #ff646461 25%, #d3bd4269);
}

#btn:focus{
  border: #42d392 2px solid;
  width: 100px;
}

.primary {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}

.warn {
  background: linear-gradient(315deg, #a342d3 25%, #ff6464);
}

.danger {
  background: linear-gradient(315deg, #ff6464 25%, #d3bd42);
}

.disable {

  background: linear-gradient(315deg, #ff2626 25%, #ff6464);
}
</style>