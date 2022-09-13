<template>
  <div class="container">
    <Header :locations="locations" @toggle="toggleSettings" />
    <settings :locations="locations" @add="addLocation" :isSettingsOpen="isSettingsOpen" />
    <card-list :cards="cards" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CardList from "./components/CardList/CardList.vue";
import Header from "./components/Header/Header.vue";
import Settings from "./components/Settings/Settings.vue";
export default defineComponent({
  components: {
    CardList,
    Header,
    Settings,
  },
  data() {
    return {
      isSettingsOpen: false,
      locations: (Array as PropType<string[]>) || Array,
      cards: [
        {
          coord: {
            lon: 10.99,
            lat: 44.34,
          },
          weather: [
            {
              id: 501,
              main: "Rain",
              description: "moderate rain",
              icon: "10d",
            },
          ],
          base: "stations",
          main: {
            temp: 298.48,
            feels_like: 298.74,
            temp_min: 297.56,
            temp_max: 300.05,
            pressure: 1015,
            humidity: 64,
            sea_level: 1015,
            grnd_level: 933,
          },
          visibility: 10000,
          wind: {
            speed: 0.62,
            deg: 349,
            gust: 1.18,
          },
          rain: {
            "1h": 3.16,
          },
          clouds: {
            all: 100,
          },
          dt: 1661870592,
          sys: {
            type: 2,
            id: 2075663,
            country: "IT",
            sunrise: 1661834187,
            sunset: 1661882248,
          },
          timezone: 7200,
          id: 3163858,
          name: "Zocca",
          cod: 200,
        },
        {
          coord: {
            lon: 10.99,
            lat: 44.34,
          },
          weather: [
            {
              id: 501,
              main: "Rain",
              description: "moderate rain",
              icon: "13d",
            },
          ],
          base: "stations",
          main: {
            temp: 298.48,
            feels_like: 298.74,
            temp_min: 297.56,
            temp_max: 300.05,
            pressure: 1015,
            humidity: 64,
            sea_level: 1015,
            grnd_level: 933,
          },
          visibility: 10000,
          wind: {
            speed: 0.62,
            deg: 349,
            gust: 1.18,
          },
          rain: {
            "1h": 3.16,
          },
          clouds: {
            all: 100,
          },
          dt: 1661870592,
          sys: {
            type: 2,
            id: 2075663,
            country: "IT",
            sunrise: 1661834187,
            sunset: 1661882248,
          },
          timezone: 7200,
          id: 3163850,
          name: "Moscow",
          cod: 200,
        },
      ],
    };
  },
  methods: {
    toggleSettings() {
      this.isSettingsOpen = !this.isSettingsOpen;
    },
    addLocation(location: string) {
      console.log(location);
      if (location) {
        this.locations.push(location);
      }
    },
  },
});
</script>

<style></style>
