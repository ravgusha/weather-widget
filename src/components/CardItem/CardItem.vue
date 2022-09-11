<template>
  <div class="card">
    <h3>{{ card.name }}, {{ card.sys.country }}</h3>
    <div class="card__main">
      <img
        class="card__image"
        :src="`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`"
      />
      <!-- В запросе выбрать метрическую систему -->
      <p>{{ card.main.temp }} &#8451;</p>
    </div>
    <div class="card__description">
      <p>Feels like {{ card.main.feels_like }} &#8451;.</p>
      <p>{{ card.weather[0].main }}.</p>
      <p>{{ card.weather[0].description }}.</p>
    </div>
    <div class="card__other">
      <div>
        <img src="@/assets/wind.svg" alt="wind" />
        <p>{{ card.wind.speed }} m/s {{ getWindDirection(card.wind.deg) }}</p>
      </div>
      <div>
        <img src="@/assets/pressure.svg" alt="pressure" />
        <p>{{ card.main.pressure }} hPa</p>
      </div>
      <div>
        <img src="@/assets/visibility.svg" alt="visibility" />
        <p>{{ card.visibility }} m</p>
      </div>
      <div>
        <img src="@/assets/humidity.svg" alt="humidity" />
        <p>{{ card.main.humidity }} % &nbsp; &nbsp; &nbsp;&nbsp;</p>
      </div>
      <div>
        <img src="@/assets/dew.svg" alt="dew point" />
        <p>Dew point: &nbsp;</p>
        <p>
          {{
            // eslint-disable-next-line
            getDewPoint(card.main.sea_level, card.main.temp, card.main.humidity)
          }}
          &#8451;
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-ignore:next-line
import * as dewpoint from "dewpoint";

export default {
  props: {
    card: {
      type: Object,
    },
  },
  methods: {
    getWindDirection(deg: number) {
      let compassSector = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
        "N",
      ];

      const index = +(deg / 22.5).toFixed(0);
      return compassSector[index];
    },
    getDewPoint(seaLevel: number, temperature: number, humidity: number) {
      const xdp = new dewpoint(seaLevel);

      const y = xdp.Calc(temperature, humidity);
      const dewPoint = y.dp.toFixed(2);
      return dewPoint;
    },
  },
};
</script>
<style lang="scss">
@import "./CardItem.scss";
</style>
