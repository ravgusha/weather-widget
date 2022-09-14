<template>
  <div class="card-list" v-if="isSettingsOpen === false">
    <card-item class="card" v-for="card in cards" :card="card" :key="card.id" />
  </div>
</template>

<script lang="ts">
import CardItem from "../CardItem/CardItem.vue";
export default {
  components: { CardItem },
  props: {
    cards: {
      type: Array,
    },
    isSettingsOpen: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./CardList.scss";
</style>
