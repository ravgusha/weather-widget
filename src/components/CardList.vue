<template>
  <div class="card-list">
    <div class="card" v-for="card in cards" :key="card.id">
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
          <p>{{ card.main.humidity }} % &nbsp; &nbsp; &nbsp;</p>
        </div>
        <div>
          <img src="@/assets/dew.svg" alt="dew point" />
          <p>Dew point:</p>
          <p>
            {{
              getDewPoint(
                card.main.sea_level,
                card.main.temp,
                card.main.humidity
              )
            }}
            &#8451;
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore:next-line
import * as dewpoint from "dewpoint";

export default {
  data() {
    return {
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

<style scoped lang="scss">
@import "./CardList.scss";
</style>
