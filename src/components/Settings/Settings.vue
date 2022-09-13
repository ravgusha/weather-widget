<template>
  <div class="dropdown" :class="{ 'dropdown-after': isSettingsOpen }">
    <p></p>
    <form @submit.prevent>
      <input type="text" placeholder="Add new location" v-model="newLocation" />
      <button @click="addLocation">Add</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  data() {
    return {
      newLocation: "",
    };
  },
  props: {
    isSettingsOpen: {
      type: Boolean,
    },
    locations: {
      type: Array as PropType<string[]>,
    },
  },
  methods: {
    addLocation() {
      console.log(location);
      if (this.newLocation) {
        this.$emit("add", this.newLocation);
        this.newLocation = "";
      }
    },
  },
});
</script>
<style lang="scss">
@import "./Settings.scss";
</style>
