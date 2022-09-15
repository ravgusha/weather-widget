<template>
  <div class="dropdown" :class="{ 'dropdown-after': isSettingsOpen }">
    <draggable :list="locations" group="cards" tag="ul" item-key="id">
      <template #item="{ element }">
        <li>
          {{ element.name }}
          <p @click="deleteLocation(element.id)">X</p>
        </li>
      </template>
    </draggable>
    <form @submit.prevent>
      <input type="text" placeholder="Add new location" v-model="newLocation" />
      <button @click="addLocation">Add</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import draggable from "vuedraggable";

interface ILocation {
  name: string;
  id: number;
}
export default defineComponent({
  components: { draggable },
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
      if (this.newLocation) {
        const id = new Date().valueOf();
        this.$emit("add", this.newLocation, id);
        this.newLocation = "";
      }
    },
    deleteLocation(id: number) {
      this.$emit("delete", id);
    },
  },
});
</script>
<style lang="scss">
@import "./Settings.scss";
</style>
