<template>
  <div class="dropdown" :class="{ 'dropdown-after': isOpen }">
    <input type="text" />
    <input type="text" />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
@import "./Settings.scss";
</style>
