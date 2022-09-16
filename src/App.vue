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

interface ICard {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": string;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
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
      cards: [] as ICard[],
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
      this.locations = this.locations.filter((location: { id: number }) => location.id !== id);
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
      const promiseList = this.locations.map((value: { name: string }) => {
        return this.getWeather(value.name);
      });
      await Promise.all(promiseList);
      this.sortCards();
    },
    sortCards() {
      this.cards.sort((a: { name: string }, b: { name: string }) => {
        return (
          this.locations.findIndex(
            (p: { name: string }) => p.name.toLowerCase() === a.name.toLowerCase()
          ) -
          this.locations.findIndex(
            (p: { name: string }) => p.name.toLowerCase() === b.name.toLowerCase()
          )
        );
      });
    },
    successfulLookup(position: { coords: { latitude: number; longitude: number } }) {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}localityLanguage=en`
      )
        .then((response) => response.json())
        .then((response) => {
          this.locations.push({
            name: response.city,
            id: new Date().valueOf(),
          });
        });
    },
  },
  created() {
    this.locations = JSON.parse(localStorage.getItem("locations") || "[]");
    if (!this.locations.length) {
      window.navigator.geolocation.getCurrentPosition(this.successfulLookup, console.log);
    }
  },
  watch: {
    locations: {
      handler: function () {
        localStorage.locations = JSON.stringify(this.locations);
        this.getAllWeathers();
      },
      deep: true,
    },
  },
});
</script>

<style></style>
