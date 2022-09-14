<template>
  <div class="card">
    <h3>{{ card.name }}, {{ card.sys.country }}</h3>
    <div class="card__main">
      <img
        class="card__image"
        :src="`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`"
      />
      <p>{{ Math.floor(card.main.temp) }} &#8451;</p>
    </div>
    <div class="card__description">
      <p>Feels like {{ Math.floor(card.main.feels_like) }} &#8451;.</p>
      <p>{{ card.weather[0].description }}.</p>
      <p>{{ describeWindSpeed(card.wind.speed) }}.</p>
    </div>
    <div class="card__other">
      <div>
        <img src="@/assets/wind.svg" alt="wind" />
        <p>{{ card.wind.speed }} m/s, {{ getWindDirection(card.wind.deg) }}</p>
      </div>
      <div>
        <img src="@/assets/pressure.svg" alt="pressure" />
        <p>{{ card.main.pressure }} hPa</p>
      </div>
      <div>
        <img src="@/assets/visibility.svg" alt="visibility" />
        <p>{{ card.visibility / 1000 }} km</p>
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
      required: true,
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
      const dewPoint = Math.floor(y.dp);
      return dewPoint;
    },
    describeWindSpeed(speed: number) {
      if (speed < 0.3) {
        return "calm";
      } else if (speed >= 0.3 && speed < 1.6) {
        return "light air";
      } else if (speed >= 1.6 && speed < 3.4) {
        return "light breeze";
      } else if (speed >= 3.4 && speed < 5.5) {
        return "gentle breeze";
      } else if (speed >= 5.5 && speed < 8) {
        return "moderate breeze";
      } else if (speed >= 8 && speed < 10.8) {
        return "fresh breeze";
      } else if (speed >= 10.8 && speed < 13.9) {
        return "strong breeze";
      } else if (speed >= 13.9 && speed < 17.2) {
        return "moderate gale";
      } else if (speed >= 17.2 && speed < 20.8) {
        return "gale";
      } else if (speed >= 20.8 && speed < 24.5) {
        return "strong gale";
      } else if (speed >= 24.5 && speed < 28.5) {
        return "storm";
      } else if (speed >= 28.5 && speed < 32.7) {
        return "violent storm";
      } else if (speed >= 32.7 && speed < 42) {
        return "hurricane force";
      }
    },
  },
};
</script>
<style lang="scss">
@import "./CardItem.scss";
</style>
