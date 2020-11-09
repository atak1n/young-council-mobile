import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import ads from './modules/ads';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ads,
  },
});