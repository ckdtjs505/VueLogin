import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    seed: '' ,
    isAuth:false
    },
  mutations: {
    setSeed : function (state, payload){
      state.seed = payload;
    }

    },
  actions: {}
});
