import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexpersist = new VuexPersist({
  key: "CMP",
  storage: window.localStorage
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged_in:false,
    User_id:'',
    token:'',
    org_id:'',
    username:'',
    email:'',
    role:''


  },
  mutations: {
    setUserID(state, ID) {
      state.User_id = ID;
    },
    setToken(state, token) {
      state.token = token;
    },
    change(state){
      state.logged_in = !state.logged_in
    },
    setOrgid(state,id){
      state.org_id = id
    },
    setusername(state,username){
      state.username = username
    },
    setemail(state,email){
      state.email = email
    },
    setrole(state,role){
      state.role = role
    }
  },
  getters: {
    logged: state => state.logged_in,
    User_id: state => state.User_id,
    token: state => state.token,
    email: state => state.email,
    username: state => state.username,
    role: state => state.role,
    org_id: state => state.org_id,
  },
  plugins: [vuexpersist.plugin],
  actions: {},
  modules: {}
});
