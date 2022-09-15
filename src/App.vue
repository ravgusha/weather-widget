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
      locations: [] as ILocation[],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cards: [] as any[],
    };
  },
  methods: {
    async toggleSettings() {
      this.isSettingsOpen = !this.isSettingsOpen;
    },
    addLocation(location: string, id: number) {
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
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`
      )
        .then((response) => response.json())
        .then((response) => this.cards.push(response))
        .catch((e) => {
          console.log(e);
        });
    },
    async getAllWeathers() {
      if (!this.locations) return;
      this.cards.length = 0;
      const promiseList = this.locations.map((value) => {
        return this.getWeather(value.name);
      });

      await Promise.all(promiseList);
      this.cards.sort((a, b) => {
        return (
          this.locations.findIndex((p) => p.name.toLowerCase() === a.name.toLowerCase()) -
          this.locations.findIndex((p) => p.name.toLowerCase() === b.name.toLowerCase())
        );
      });
      console.log(this.cards);
    },
  },
  created() {
    console.log("created");
    this.locations = JSON.parse(localStorage.getItem("locations") || "[]");
  },
  watch: {
    locations: {
      handler: function () {
        console.log("change locations");
        localStorage.locations = JSON.stringify(this.locations);
        this.getAllWeathers();
      },
      deep: true,
    },
  },
});
</script>

<style></style>
