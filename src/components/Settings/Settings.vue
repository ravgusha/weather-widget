<template>
  <div class="dropdown" :class="{ 'dropdown-after': isSettingsOpen }">
    <ul>
      <li v-for="location in locations" :key="location.id">{{ location.name }}</li>
    </ul>
    <form @submit.prevent>
      <input type="text" placeholder="Add new location" v-model="newLocation" />
      <button @click="addLocation">Add</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
interface ILocation {
  name: string;
  id: number;
}
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
      type: Array as PropType<ILocation[]>,
    },
  },
  methods: {
    addLocation() {
      console.log(location);
      if (this.newLocation) {
        const id = new Date().valueOf();
        this.$emit("add", this.newLocation, id);
        this.newLocation = "";
      }
    },
  },
});
</script>
<style lang="scss">
@import "./Settings.scss";
</style>
