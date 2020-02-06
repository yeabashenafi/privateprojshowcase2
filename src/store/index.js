import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'

const vuexpersist = new VuexPersist({
  key:'CMP',
  storage:window.localStorage
})
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged_in:false,
    User_id:'',
    token:'',

  },
  mutations: {
    setUserID(state,ID){
      state.User_id = ID
    },
    setToken(state,token){
      state.token = token
    },
    change(state){
      state.logged_in = !state.logged_in
    }
  },
  getters:{
    logged: state => state.logged_in,
    User_id: state => state.User_id,
    token: state => state.token,
  },
  plugins:[vuexpersist.plugin],
  actions: {},
  modules: {}
});
