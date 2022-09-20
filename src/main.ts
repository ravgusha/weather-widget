import { createApp, CreateAppFunction, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import FloatingVue from "floating-vue";

import App from "./App.vue";

import "./main.scss";

const createAppWrapper: CreateAppFunction<Element> = (component) => {
  return createApp(component).use(FloatingVue);
};
const webComponent = wrapper(App, createAppWrapper, h);
window.customElements.define("weather-widget", webComponent);
