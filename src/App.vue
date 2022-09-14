<template>
  <div class="container">
    <Header :locations="locations" @toggle="toggleSettings" />
    <settings
      :locations="locations"
      @add="addLocation"
      @delete="deleteLocation"
      :isSettingsOpen="isSettingsOpen"
    />
    <card-list :cards="cards" :isSettingsOpen="isSettingsOpen" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "./components/CardList/CardList.vue";
import Header from "./components/Header/Header.vue";
import Settings from "./components/Settings/Settings.vue";

interface ILocation {
  name: string;
  id: number;
}

export default defineComponent({
  components: {
    CardList,
    Header,
    Settings,
  },
  data() {
    return {
      isSettingsOpen: false,
      locations: [{ name: "Moscow", id: 1 }] as ILocation[],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cards: [] as any[],
    };
  },
  methods: {
    toggleSettings() {
      this.isSettingsOpen = !this.isSettingsOpen;
    },
    addLocation(location: string, id: number) {
      console.log(location);
      if (location) {
        const newLocation = {
          name: location,
          id: id,
        };
        this.locations.push(newLocation);
      }
    },
    deleteLocation(id: number) {
      this.locations = this.locations.filter((location) => location.id !== id);
    },
    async getWeather(location: string) {
      this.cards = [];
      try {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`
        ).then(async (response) => {
          const res = await response.json();
          this.cards.push(res);
        });
      } catch (e) {
        console.log("Error");
      }
    },
  },
  created() {
    this.locations.forEach((value) => this.getWeather(value.name));
  },
  watch: {
    locations: {
      handler: function () {
        console.log("watch");
        this.locations.forEach((value) => this.getWeather(value.name));
      },
      deep: true,
    },
  },
});
</script>

<style></style>
