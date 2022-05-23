import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    sine: [],
    cosine: [],
    dc: 0,
    inputs: [
      {
        angle: "",
        volts: "",
      },
    ],
  },
  getters: {
    getInputs(state) {
      return state.inputs;
    },
    getDc(state) {
      return state.dc;
    },
    getSine(state) {
      return state.sine;
    },
    getCosine(state) {
      return state.cosine;
    },
  },
  mutations: {
    clearInputs(state) {
      state.inputs = [];
    },
    setInputs(state, newInput) {
      state.inputs = newInput;
    },
    setCosine(state, newInput) {
      state.cosine = newInput;
    },
    setSine(state, newInput) {
      state.sine = newInput;
    },
    setDc(state, newInput) {
      state.dc = newInput;
    },
  },
  actions: {},
  modules: {},

  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
