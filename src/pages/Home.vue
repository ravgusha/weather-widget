<template>
  <div class="container">
    <Spinner v-show="isLoading" />
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
import axios from "axios";
import CardList from "../components/CardList/CardList.vue";
import Header from "../components/Header/Header.vue";
import Settings from "../components/Settings/Settings.vue";
import EmptyState from "../components/EmptyState/EmptyState.vue";
import Spinner from "../components/Spinner/Spinner.vue";
import { ILocation, ICard } from "../types/types";

export default defineComponent({
  components: {
    CardList,
    Header,
    Settings,
    EmptyState,
    Spinner,
  },
  data() {
    return {
      isSettingsOpen: false,
      isLoading: false,
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
    async getWeather(location: string) {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`
          )
          .then((response) => this.cards.push(response.data));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          this.locations = this.locations.filter((item) => item.name !== location);
          this.error = error.response?.data?.message;
          // Скрыть ошибку через 5 секунд
          setTimeout(() => {
            this.error = "";
          }, 5000);
          console.log(error.response?.data?.message);
        }
      }
    },
    async getAllWeathers() {
      this.isLoading = true;
      this.cards.length = 0;
      if (!this.locations.length) return;
      const promiseList = this.locations.map((value: { name: string }) => {
        return this.getWeather(value.name);
      });
      await Promise.all(promiseList);
      this.sortCards();
      this.isLoading = false;
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
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}localityLanguage=en`
        )
        .then((response) => {
          this.locations.push({
            name: response.data.city,
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
