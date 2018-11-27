import Vue from 'vue'
import wrap from "@vue/web-component-wrapper";
import VueWC from "./components/VueWC";

const CustomVueGrid = wrap(Vue, VueWC);
window.customElements.define('vue-add-values', CustomVueGrid);