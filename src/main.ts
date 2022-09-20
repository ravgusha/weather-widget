import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import App from "./App.vue";
import "./main.scss";

const webComponent = wrapper(App, createApp, h);
window.customElements.define("weather-widget", webComponent);
