<template>
  <div>This is a HomePage</div>

  <BaseButton style="color:black">
    Click me
  </BaseButton>

  <BaseButton style="cursor: not-allowed">
    Disable
  </BaseButton>

</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { BaseButton }
};
</script>

<style lang="css" scoped></style>
