<template>
  <div class="header">
    <button type="button" @click="toggleSettings" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isSettingsOpen: {
      type: Boolean,
    },
  },
  methods: {
    toggleSettings() {
      this.$emit("toggle");
    },
  },
});
</script>
<style lang="scss">
@import "./Header.scss";
</style>
