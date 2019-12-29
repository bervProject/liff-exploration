import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLogin(state, isLogedin) {
      state.isLogin = isLogedin;
    }
  },
  actions: {},
  modules: {}
});
