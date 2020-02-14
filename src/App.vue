<template>
  <v-app>
    <v-app-bar app color="blue darken-3" dark>
      <v-toolbar-title class="lighten-3">Curriculum Management</v-toolbar-title>
      <v-btn text rounded to="/">HOME</v-btn>
      <v-btn text rounded to="/addcurriculumstructure" v-show="checkLogging"
        >ADD</v-btn
      >
      <v-btn class="ml-3" text rounded to="/view" v-show="checkLogging"
        >VIEW</v-btn
      >

      <v-spacer></v-spacer>
      <v-icon class="mr-3" v-show="isexist">mdi-folder</v-icon>
      <p v-show="isexist" class="mt-4 mr-12 title-1">
        {{ $store.getters.username }}
      </p>
      <v-btn text rounded to="/login" v-show="!checkLogging">LOG IN</v-btn>
      <v-btn text rounded v-show="checkLogging" @click="logout">LOG OUT</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // name: '',
      isexist: true,
      is_home: false
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    addCurriculum() {
      this.$router.push({ name: "addCurriculum" });
    },
    logout() {
      this.isexist = false;
      this.$store.commit("change");
      this.$store.commit("setToken", "");
      this.$store.commit("setusername", "");
      this.$store.commit("setrole", "");
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    checkLogging() {
      return this.$store.getters.logged;
    }
  }
  // computed: {
  //   ishome(){
  //     console.log(this.$route);
  //     return this.$route
  //   }
  // }
};
</script>
