<template>
  <div class="dropdown" :class="{ 'dropdown-after': isOpen }">
    <p></p>
    <form @submit.prevent>
      <input type="text" placeholder="Add new location" v-model="newLocation" />
      <button @click="addLocation">Add</button>
    </form>
  </div>
</template>
<script lang="ts">
interface newLocation {
  newLocation: string;
}

export default {
  data() {
    return {
      newLocation: "",
    } as ne;
  },
  props: {
    isOpen: {
      type: Boolean,
    },
    locations: {
      type: Array,
    },
  },
  methods: {
    // addLocation() {
    //   if (this.newLocation) {
    //     this.locations.push(this.newLocation);
    //     this.newLocation = "";
    //   }
    // },
  },
};
</script>
<style lang="scss">
@import "./Settings.scss";
</style>
