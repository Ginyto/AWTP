<template>

  <BaseHeader />
    <slot />
  <BaseFooter />

</template>

<script>
import BaseHeader from './Base-header.vue';
import BaseFooter from './Base-footer.vue';

export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { BaseHeader, BaseFooter }
};
</script>

<style lang="scss" scoped></style>