<template>
  <div class="card-list">
    <card-item class="card" v-for="card in cards" :card="card" :key="card.id" />
  </div>
</template>

<script lang="ts">
import CardItem from "@/src/components/CardItem/CardItem.vue";
export default {
  components: { CardItem },
  props: {
    cards: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./CardList.scss";
</style>
