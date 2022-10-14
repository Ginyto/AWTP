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

  <BaseButtonAsync color="disable" @click="asyncClick">
    Async Primary
  </BaseButtonAsync>

</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseButtonAsync from '@/components/BaseButtonAsync.vue';
export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { BaseButton, BaseButtonAsync }
};
</script>

<style lang="css" scoped></style>
