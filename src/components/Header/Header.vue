<template>
  <div class="header">
    <button type="button" @click="isOpen = !isOpen" />
  </div>
  <settings :isOpen="isOpen" />
  <!-- <div class="dropdown" :class="{ 'dropdown-after': isOpen }">Settings</div> -->
</template>
<script lang="ts">
import Settings from "../Settings/Settings.vue";
export default {
  components: {
    Settings,
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="scss">
@import "./Header.scss";
</style>
