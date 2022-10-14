<template>
  <div>This is a HomePage</div>

  <BaseButton color="primary">
    Primary
  </BaseButton>

  <BaseButton color="warn">
    Warn
  </BaseButton>

  <BaseButton color="danger">
    Danger
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
