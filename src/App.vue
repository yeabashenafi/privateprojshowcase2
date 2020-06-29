<template>
  <v-app>
    <v-app-bar app id="app" color="cyan darken-3" dark>
      <v-toolbar-title class="lighten-3 hidden-sm-and-down"
        >Curriculum Management</v-toolbar-title
      >
      <v-toolbar-title class="hidden-md-and-up">CMP</v-toolbar-title>
      <v-btn text rounded class="mx-3" v-show="checkLogging" to="/Dashboard"
        >Dashboard</v-btn
      >
      <v-btn text rounded v-show="!checkLogging" to="/">HOME</v-btn>
      <!-- <v-btn text rounded to="/addcurriculumstructure" v-show="checkLogging"
        >ADD</v-btn
      >
      <v-btn class="ml-3" text rounded to="/view" v-show="checkLogging"
        >VIEW</v-btn
      > -->

      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-layout v-show="isexist">
        <v-spacer class="hidden-xs-only"></v-spacer>
        <v-icon class="mr-3">mdi-account</v-icon>
        <p class="mt-4 mr-sm-12 ">
          {{ $store.getters.Username }}
        </p>
        <v-btn
          text
          rounded
          to="/login"
          class="hidden-sm-and-up mt-2"
          v-show="!checkLogging"
          >LOG IN</v-btn
        >
        <v-btn
          text
          rounded
          v-show="checkLogging"
          small
          class="hidden-sm-and-up mt-3"
          @click="logout"
          >LOG OUT</v-btn
        >
      </v-layout>
      <v-btn
        text
        rounded
        to="/login"
        v-show="!checkLogging"
        class="hidden-xs-only "
        >LOG IN</v-btn
      >
      <v-btn
        text
        rounded
        v-show="checkLogging"
        @click="logout"
        class="hidden-xs-only"
        >LOG OUT</v-btn
      >
    </v-app-bar>

    <v-content xs12>
      <!-- <v-flex xs12><v-card max-width="100%" color="blue">Hey</v-card></v-flex> -->

      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- font-weight-medium cyan darken-3 -->
    <!-- <v-footer class="">
      <v-card width="100%">
        <v-card-title class="grey darken-1 white--text">
          <v-flex class="text-center">
            <p>Get our details</p>
          </v-flex>
        </v-card-title>
        <v-card-actions class="grey  white--text">
          <v-container grid-list-md text-center>
            <v-layout wrap>
              <v-flex xs4>
                <p class="blue--text title">Information</p>
                <p>E-mail</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </v-flex>
              <v-flex xs4>
                <p class="blue--text title">Contact Us</p>
                <v-text-field
                  label="
                E-mail"
                  class="white--text"
                  color="white"
                ></v-text-field>
                <v-btn>Submit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-footer> -->
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
      this.isexist = !this.isexist;
      this.$store.commit("change");
      this.$store.commit("setToken", "");
      this.$store.commit("setusername", "");
      this.$store.commit("setrole", "");
      this.$store.commit("setemail", "");
      this.$store.commit("setUserID", "");
      this.$store.commit("setOrgid", "");
      this.$store.commit("setOffice", "");
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
<style >
#app{
  font-family: "Comic Sans MS",cursive,sans-serif;
}
</style>
