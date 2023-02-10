<template>
  <div class="empty-container">
    <img src="../../assets/empty.svg" />
    <p v-if="isAccessDenied">Access to the current location was denied</p>
    <p>No cities added now</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isAccessDenied: {
      type: Boolean,
    },
  },
});
</script>
<style lang="scss">
@import "./EmptyState.scss";
</style>
