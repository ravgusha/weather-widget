<template>
  <div class="card">
    <h3>{{ card.name }}, {{ card.sys.country }}</h3>
    <div class="card__main">
      <img
        class="card__image"
        :src="`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`"
      />
      <p>{{ Math.floor(card.main.temp) }} °C</p>
    </div>
    <div class="card__description">
      <p>Feels like {{ Math.floor(card.main.feels_like) }} °C.</p>
      <p>{{ card.weather[0].description }}.</p>
      <p>{{ describeWindSpeed(card.wind.speed) }}.</p>
    </div>
    <div class="card__other">
      <div v-tooltip="'Wind speed and direction'">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 365.447 365.447"
          style="enable-background: new 0 0 365.447 365.447"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M306.069,189.427H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h297.119c0.469-0.092,0.954-0.14,1.45-0.14
			c24.47,0,44.378-19.908,44.378-44.378S330.539,85.53,306.069,85.53s-44.378,19.908-44.378,44.378c0,4.142-3.357,7.5-7.5,7.5
			s-7.5-3.358-7.5-7.5c0-32.741,26.637-59.378,59.378-59.378s59.378,26.637,59.378,59.378c0,32.224-25.801,58.535-57.829,59.358
			C307.118,189.372,306.601,189.427,306.069,189.427z"
              />
            </g>
            <g>
              <path
                d="M152.283,137.479H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h143.333c0.469-0.092,0.954-0.14,1.45-0.14
			c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378c-24.471,0-44.379,19.908-44.379,44.378
			c0,4.142-3.357,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-32.741,26.638-59.378,59.379-59.378s59.378,26.637,59.378,59.378
			c0,32.224-25.801,58.535-57.829,59.358C153.332,137.423,152.814,137.479,152.283,137.479z"
              />
            </g>
            <g>
              <path
                d="M244.186,346.866c-32.741,0-59.379-26.637-59.379-59.378c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5
			c0,24.47,19.908,44.378,44.379,44.378c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378H7.5
			c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h236.686c32.741,0,59.378,26.637,59.378,59.378S276.927,346.866,244.186,346.866z"
              />
            </g>
          </g>
        </svg>
        <p>{{ card.wind.speed }} m/s, {{ getWindDirection(card.wind.deg) }}</p>
      </div>
      <div v-tooltip="'Atmospheric pressure'">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 488 488"
          style="enable-background: new 0 0 488 488"
          xml:space="preserve"
        >
          <g transform="translate(0 -540.36)">
            <g>
              <g>
                <path
                  d="M244,601.36c-100.9,0-183,82.1-183,183s82.1,183,183,183s183-82.1,183-183S344.9,601.36,244,601.36z M244,947.36
				c-89.9,0-163-73.1-163-163s73.1-163,163-163s163,73.1,163,163S333.9,947.36,244,947.36z"
                />
                <path
                  d="M416.4,611.96c-46.2-46.2-107.4-71.6-172.4-71.6s-126.2,25.4-172.4,71.6C25.4,658.16,0,719.36,0,784.36
				s25.4,126.2,71.6,172.4c46.2,46.2,107.4,71.6,172.4,71.6s126.2-25.4,172.4-71.6s71.6-107.4,71.6-172.4S462.6,658.16,416.4,611.96
				z M244,1008.36c-123.5,0-224-100.5-224-224s100.5-224,224-224s224,100.5,224,224S367.5,1008.36,244,1008.36z"
                />
                <path
                  d="M333.7,713.56l-116.6,20.6c-2.7,0.5-5.1,2.1-6.6,4.4l-66.3,101.4c-2.2,3.3-2.2,7.7,0,11c1.9,2.8,5,4.5,8.3,4.5
				c0.6,0,1.2-0.1,1.7-0.2l116.6-20.6c2.7-0.5,5.1-2.1,6.6-4.4l66.3-101.4c2.3-3.3,2.3-7.7,0.1-11
				C341.6,714.56,337.6,712.86,333.7,713.56z M173.6,831.46l45-68.9l34.3,54.9L173.6,831.46z M269.4,806.16l-34.3-54.9l79.3-14
				L269.4,806.16z"
                />
              </g>
            </g>
          </g>
        </svg>
        <p>{{ card.main.pressure }} hPa</p>
      </div>
      <div v-tooltip="'Visibility'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511 511"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 511 511"
        >
          <g>
            <path
              d="m485.729,236.892c-0.21-0.313-0.437-0.618-0.699-0.904l-.718-.783c-1.699-1.99-3.467-3.92-5.3-5.786l-96.189-105.006c-0.201-0.253-0.42-0.497-0.659-0.728-9.578-9.302-21.964-14.748-35.186-15.565-5.499-9.814-15.961-16.12-27.478-16.12-17.369,0-31.5,14.131-31.5,31.5v40 8 24.5h-65v-24.5-8-40c0-17.369-14.131-31.5-31.5-31.5-11.514,0-21.98,6.307-27.481,16.12-13.221,0.817-25.607,6.263-35.185,15.565-0.237,0.23-0.456,0.472-0.655,0.725l-96.192,105.009c-1.833,1.866-3.601,3.795-5.3,5.786l-.718,.783c-0.262,0.286-0.489,0.591-0.699,0.904-15.783,19.241-25.27,43.837-25.27,70.608 0,61.481 50.019,111.5 111.5,111.5s111.5-50.019 111.5-111.5c0-2.859-0.109-5.694-0.322-8.5h65.643c-0.213,2.806-0.322,5.641-0.322,8.5 0,61.481 50.019,111.5 111.5,111.5s111.501-50.019 111.501-111.5c0-26.771-9.487-51.367-25.271-70.608zm-182.729-113.392c0-9.098 7.402-16.5 16.5-16.5 3.445,0 6.709,1.079 9.415,2.958-10.059,2.743-18.985,8.249-25.915,15.651v-2.109zm-95,0v2.11c-6.93-7.403-15.856-12.908-25.915-15.651 2.706-1.879 5.97-2.958 9.415-2.958 9.098-0.001 16.5,7.401 16.5,16.499zm-96.5,280.5c-53.21,0-96.5-43.29-96.5-96.5 0-23.702 8.594-45.431 22.823-62.246l5.227-5.706c17.494-17.62 41.719-28.548 68.45-28.548 53.21,0 96.5,43.29 96.5,96.5s-43.29,96.5-96.5,96.5zm0-208c-11.548,0-22.691,1.765-33.174,5.039l61.278-66.894c0.012-0.013 0.024-0.026 0.036-0.039 7.554-7.166 17.428-11.106 27.86-11.106 22.332,0 40.5,18.168 40.5,40.5v8 24.5h-16.5c-0.172,0-0.342,0.006-0.511,0.017-2.181-0.209-4.427,0.533-6.077,2.218-2.898,2.959-2.849,7.708 0.111,10.606 11.432,11.196 18.88,25.313 21.697,40.7-19.601-32.082-54.951-53.541-95.22-53.541zm176.5,88h-65v-20.5c0-19.088-5.781-37.238-16.524-52.5h98.048c-10.743,15.262-16.524,33.411-16.524,52.5v20.5zm37.977-75.159c2.191-2.146 2.855-5.409 1.677-8.241-1.178-2.831-3.958-4.642-7.028-4.617l-1.176,.017h-16.45v-24.5-8c0-22.332 18.168-40.5 40.5-40.5 10.432,0 20.306,3.94 27.86,11.105 0.012,0.013 0.024,0.026 0.036,0.039l61.278,66.894c-10.483-3.273-21.626-5.038-33.174-5.038-40.269,0-75.619,21.459-95.219,53.542 2.816-15.387 10.265-29.505 21.696-40.701zm73.523,195.159c-53.21,0-96.5-43.29-96.5-96.5s43.29-96.5 96.5-96.5c26.731,0 50.956,10.928 68.449,28.547l5.227,5.706c14.23,16.816 22.824,38.545 22.824,62.247 0,53.21-43.29,96.5-96.5,96.5z"
            />
            <path
              d="m111.5,228c-43.836,0-79.5,35.664-79.5,79.5s35.664,79.5 79.5,79.5 79.5-35.664 79.5-79.5-35.664-79.5-79.5-79.5zm0,144c-35.565,0-64.5-28.935-64.5-64.5s28.935-64.5 64.5-64.5 64.5,28.935 64.5,64.5-28.935,64.5-64.5,64.5z"
            />
            <path
              d="m399.5,228c-43.836,0-79.5,35.664-79.5,79.5s35.664,79.5 79.5,79.5 79.5-35.664 79.5-79.5-35.664-79.5-79.5-79.5zm0,144c-35.565,0-64.5-28.935-64.5-64.5s28.935-64.5 64.5-64.5 64.5,28.935 64.5,64.5-28.935,64.5-64.5,64.5z"
            />
            <path
              d="m399.5,260c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5c17.92,0 32.5,14.58 32.5,32.5 0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5c0-26.191-21.309-47.5-47.5-47.5z"
            />
            <path
              d="m111.5,260c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5c17.92,0 32.5,14.58 32.5,32.5 0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5c0-26.191-21.309-47.5-47.5-47.5z"
            />
          </g>
        </svg>
        <p>{{ card.visibility / 1000 }} km</p>
      </div>
      <div v-tooltip="'Humidity'">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 511.999 511.999"
          style="enable-background: new 0 0 511.999 511.999"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M168.173,4.609c-5.024-6.149-14.432-6.142-19.45,0C108.758,53.563,13.625,181.93,13.625,247.472
				c0,79.855,64.968,144.822,144.824,144.822c79.855,0,144.822-64.968,144.822-144.822
				C303.271,181.883,207.683,53.005,168.173,4.609z M158.447,367.177c-66.006,0-119.705-53.699-119.705-119.703
				c0-51.696,79.002-162.973,119.705-214.808C199.15,84.501,278.15,195.779,278.15,247.474
				C278.152,313.478,224.453,367.177,158.447,367.177z"
                />
                <path
                  d="M141.081,120.039c-5.772-3.848-13.568-2.289-17.416,3.483c-25.96,38.938-43.874,71.485-53.249,96.74
				c-2.413,6.502,0.901,13.732,7.403,16.145c6.502,2.413,13.73-0.901,16.145-7.403c5.978-16.106,19.609-45.063,50.599-91.547
				C148.413,131.684,146.854,123.887,141.081,120.039z"
                />
                <path
                  d="M135.135,312.917c-15.743-5.627-28.962-16.778-37.223-31.399c-3.413-6.04-11.077-8.169-17.113-4.756
				c-6.039,3.413-8.169,11.074-4.756,17.113c11.23,19.872,29.212,35.036,50.636,42.695c6.548,2.336,13.723-1.08,16.054-7.599
				C145.069,322.44,141.666,315.251,135.135,312.917z"
                />
                <path
                  d="M409.303,252.086c-5.022-6.149-14.433-6.144-19.45,0c-9.116,11.158-89.072,110.471-89.072,161.116
				c0,54.478,44.321,98.798,98.798,98.798c54.476,0,98.796-44.32,98.796-98.798C498.374,362.559,418.421,263.243,409.303,252.086z
				 M399.578,486.88c-40.627,0-73.679-33.051-73.679-73.679c0-33.425,53.468-106.626,73.679-132.869
				c20.325,26.385,73.677,99.486,73.677,132.869C473.255,453.829,440.202,486.88,399.578,486.88z"
                />
                <path
                  d="M384.949,351.389c-5.938-3.589-13.66-1.685-17.247,4.252c-16.038,26.536-21.907,42.258-24.007,50.777
				c-1.659,6.734,2.455,13.539,9.189,15.2c6.739,1.659,13.541-2.457,15.2-9.188c1.109-4.498,5.385-17.771,21.115-43.796
				C392.789,362.698,390.885,354.978,384.949,351.389z"
                />
              </g>
            </g>
          </g>
        </svg>
        <p>{{ card.main.humidity }} %</p>
      </div>
      <div v-tooltip="'Dew point'">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M245.612,299.658V56.914C245.612,25.536,220.09,0,188.724,0c-31.367,0-56.889,25.536-56.889,56.914v242.745
			c-36.978,20.308-57.55,57.453-57.55,98.564c0,62.733,50.717,113.778,113.45,113.778c62.733,0,114.272-51.045,114.272-113.778
			C302.007,357.111,279.746,319.966,245.612,299.658z M187.404,489.244c-50.189,0-91.022-40.831-91.022-91.022
			c0-34.808,20.036-66.064,51.236-81.564c3.867-1.922,6.972-5.867,6.972-10.192V56.914c0-18.833,15.311-34.158,34.133-34.158
			s34.133,15.325,34.133,34.158v249.553c0,4.325,1.784,8.27,5.65,10.192c31.2,15.5,50.25,46.756,50.25,81.564
			C278.757,448.414,237.593,489.244,187.404,489.244z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M200.101,319.406V56.889c0-6.286-5.089-11.378-11.378-11.378c-6.289,0-11.378,5.092-11.378,11.378v262.517
			c-39.822,5.539-68.928,38.769-68.928,78.817c0,43.911,35.405,79.644,79.316,79.644c43.911,0,80.139-35.733,80.139-79.644
			C267.874,358.175,237.079,324.944,200.101,319.406z M187.404,455.111c-31.367,0-56.889-25.52-56.889-56.889
			c0-31.364,25.522-56.889,56.889-56.889c31.367,0,56.889,25.525,56.889,56.889C244.293,429.592,218.771,455.111,187.404,455.111z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M106.849,109.455c-0.567-1.475-1.366-2.622-2.389-3.753c-4.211-4.214-11.833-4.214-16.156,0
			c-1.022,1.131-1.822,2.278-2.389,3.753c-0.689,1.37-0.911,2.844-0.911,4.322c0,3.069,1.133,5.914,3.3,8.081
			c2.156,2.156,5,3.297,8.078,3.297c3.067,0,5.911-1.142,8.078-3.297c2.156-2.167,3.3-5.011,3.3-8.081
			C107.76,112.3,107.415,110.825,106.849,109.455z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M106.849,143.589c-0.567-1.475-1.366-2.622-2.389-3.753c-0.567-0.458-1.145-0.911-1.822-1.37
			c-0.567-0.453-1.256-0.797-1.933-1.019c-0.689-0.344-1.367-0.569-2.167-0.689c-3.633-0.789-7.622,0.453-10.233,3.078
			c-1.022,1.131-1.822,2.386-2.389,3.753c-0.689,1.37-0.911,2.844-0.911,4.322c0,3.069,1.133,5.914,3.3,8.081
			c2.156,2.156,5,3.297,8.078,3.297c3.067,0,5.911-1.142,8.078-3.297c2.156-2.167,3.3-5.011,3.3-8.081
			C107.76,146.433,107.415,144.958,106.849,143.589z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M106.849,211.855c-0.567-1.366-1.366-2.622-2.389-3.753c-4.322-4.214-11.944-4.214-16.156,0
			c-1.022,1.131-1.822,2.386-2.389,3.753c-0.689,1.37-0.911,2.844-0.911,4.322c0,1.481,0.222,2.958,0.911,4.325
			c0.567,1.364,1.367,2.608,2.389,3.756c2.156,2.156,5,3.297,8.078,3.297c3.067,0,5.911-1.142,8.078-3.297
			c1.022-1.147,1.822-2.392,2.389-3.756c0.567-1.367,0.911-2.844,0.911-4.325C107.76,214.7,107.415,213.225,106.849,211.855z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M104.46,242.236c-4.322-4.214-11.944-4.214-16.156,0c-2.056,2.153-3.3,5.122-3.3,8.075c0,1.481,0.344,2.958,0.911,4.325
			c0.567,1.364,1.367,2.608,2.389,3.755c2.156,2.156,5,3.297,8.078,3.297c1.478,0,2.956-0.342,4.322-0.911
			c1.366-0.567,2.611-1.364,3.755-2.386c1.022-1.147,1.822-2.392,2.389-3.755c0.567-1.367,0.911-2.844,0.911-4.325
			C107.76,247.358,106.504,244.389,104.46,242.236z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M106.849,177.722c-0.567-1.367-1.366-2.622-2.389-3.753c-4.211-4.214-11.944-4.214-16.156,0
			c-1.022,1.131-1.822,2.386-2.389,3.753c-0.689,1.37-0.911,2.844-0.911,4.322c0,1.481,0.222,2.958,0.911,4.325
			c0.567,1.364,1.367,2.608,2.389,3.755c2.156,2.156,5,3.297,8.078,3.297c3.067,0,5.911-1.142,8.078-3.297
			c2.156-2.167,3.3-5.011,3.3-8.081C107.76,180.566,107.415,179.092,106.849,177.722z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M377.682,26.278c-4.289-4.486-12.178-4.486-16.467,0c-6.145,6.434-60.033,63.914-60.033,98.878
			c0,37.644,30.622,68.267,68.267,68.267c37.644,0,68.267-30.622,68.267-68.267C437.715,90.192,383.826,32.711,377.682,26.278z
			 M369.449,170.667c-25.1,0-45.511-20.408-45.511-45.511c0-17.111,25.278-51.319,45.511-74.189
			c20.244,22.859,45.511,57.058,45.511,74.189C414.96,150.258,394.549,170.667,369.449,170.667z"
              />
            </g>
          </g>
        </svg>
        <p>&nbsp;</p>
        <p>
          {{ getDewPoint(card.main.sea_level, card.main.temp, card.main.humidity) }}
          &#8451;
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
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

      const index = Math.round(deg / 22.5);
      return compassSector[index];
    },
    getDewPoint(seaLevel: number, temperature: number, humidity: number) {
      const area = new dewpoint(seaLevel);
      const y = area.Calc(temperature, humidity);
      const dewPoint = Math.floor(y.dp);
      return dewPoint;
    },
    describeWindSpeed(speed: number) {
      if (speed < 0.3) return "calm";
      if (speed >= 0.3 && speed < 1.6) return "light air";
      if (speed >= 1.6 && speed < 3.4) return "light breeze";
      if (speed >= 3.4 && speed < 5.5) return "gentle breeze";
      if (speed >= 5.5 && speed < 8) return "moderate breeze";
      if (speed >= 8 && speed < 10.8) return "fresh breeze";
      if (speed >= 10.8 && speed < 13.9) return "strong breeze";
      if (speed >= 13.9 && speed < 17.2) return "moderate gale";
      if (speed >= 17.2 && speed < 20.8) return "gale";
      if (speed >= 20.8 && speed < 24.5) return "strong gale";
      if (speed >= 24.5 && speed < 28.5) return "storm";
      if (speed >= 28.5 && speed < 32.7) return "violent storm";
      if (speed >= 32.7) return "hurricane force";
    },
  },
};
</script>
<style lang="scss">
@import "./CardItem.scss";
</style>
