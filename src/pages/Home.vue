<template>
  <div class="container">
    <Header :locations="locations" @toggle="toggleSettings" />
    <Settings
      :locations="locations"
      :error="error"
      @add="addLocation"
      @delete="deleteLocation"
      :isSettingsOpen="isSettingsOpen"
    />
    <CardList v-if="cards.length" :cards="cards" :isSettingsOpen="isSettingsOpen" />
    <EmptyState v-else :isAccessDenied="isAccessDenied" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CardList from "../components/CardList/CardList.vue";
import Header from "../components/Header/Header.vue";
import Settings from "../components/Settings/Settings.vue";
import EmptyState from "../components/EmptyState/EmptyState.vue";
import { ILocation, ICard } from "../types/types";

export default defineComponent({
  components: {
    CardList,
    Header,
    Settings,
    EmptyState,
  },
  data() {
    return {
      isSettingsOpen: false,
      locations: [] as ILocation[],
      cards: [] as ICard[],
      isAccessDenied: false,
      error: "",
    };
  },
  methods: {
    toggleSettings() {
      this.isSettingsOpen = !this.isSettingsOpen;
    },
    addLocation(location: string, id: number) {
      if (this.locations.find((o) => o.name.toLowerCase() === location.toLowerCase())) {
        this.error = "This location is already added";
        // Скрыть ошибку через 5 секунд
        setTimeout(() => {
          this.error = "";
        }, 5000);
        return;
      }
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
    getWeather(location: string) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`
      ).then((response) => {
        if (!response.ok) {
          this.locations = this.locations.filter((item) => item.name !== location);
          this.error = "This location was not found";
          // Скрыть ошибку через 5 секунд
          setTimeout(() => {
            this.error = "";
          }, 5000);
        } else {
          response.json().then((response) => this.cards.push(response));
        }
      });
    },
    async getAllWeathers() {
      this.cards.length = 0;
      if (!this.locations.length) return;
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
    getCity(position: { coords: { latitude: number; longitude: number } }) {
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
      window.navigator.geolocation.getCurrentPosition(this.getCity, () => {
        this.isAccessDenied = true;
      });
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
<style lang="scss">
.container {
  width: 300px;
  height: 720px;
  margin: 0 auto;
  overflow: auto;
  position: relative;
}
</style>
