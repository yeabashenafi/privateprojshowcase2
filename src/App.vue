<template>
  <v-app>
    <v-app-bar app id="app" color="cyan darken-3" dark>
      <v-toolbar-title class="lighten-3 hidden-sm-and-down"
        >Curriculum Management</v-toolbar-title
      >
      <v-toolbar-title class="hidden-md-and-up">CMP</v-toolbar-title>
      <v-btn text rounded class="mx-3" v-show="$store.getters.usertype == 'User'" to="/Dashboard"
        >Dashboard</v-btn
      >
      <v-btn text rounded v-show ="$store.getters.usertype == 'Admin'" to="/adminDash">Dashboard</v-btn>
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

      
        <router-view></router-view>
      
    </v-content>

    <!-- font-weight-medium cyan darken-3 -->
    <v-footer class="grey darken-4">
      <v-card width="100%" class="grey darken-4 mb-5" flat>
        
        
            <v-layout wrap class="ml-12 mt-12 white--text">
              <v-flex xs6 sm4 class="">
                <p class="title ">Information</p>
                <p class="mt-10 grey--text ">About Us</p>
                <p class="grey--text">Partners</p>
                <p class="grey--text">Enrolled Organizations</p>
                <p class="grey--text">Work </p>
              </v-flex>
              <v-flex xs6 sm4>
                <p class="title">Contact Us</p>
                <p class="mt-10 grey--text">Email</p>
                <p class="grey--text">Facebook</p>
                <p class="grey--text">Linked-in</p>
                <p class="grey--text">Twitter </p>
              </v-flex>
              <v-flex xs6 sm4 
              :class="{'mt-10':$vuetify.breakpoint.xsOnly}"
              >
                <p class="title">Join us</p>
                <p class="mt-10 grey--text">Add Your Organization</p>
                <p class="grey--text">Register</p>
                <p class="grey--text">Log-in</p>
                <p></p>
              </v-flex>
            </v-layout>
            
          <!-- </v-container> -->
        
        <v-divider class="grey mt-5"></v-divider>
        <v-layout class="ml-12 white--text row mt-12">
          <v-flex class=" grey--text">  Copyright &copy; 2019-2020. EMy,All rights reserved</v-flex>
          <v-flex class="">Terms of use</v-flex>
          <v-flex class="grey--text">
            <v-layout wrap>
              <v-flex>
                <v-icon color="white">mdi-facebook</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="white">mdi-instagram</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="white">mdi-email</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="white">mdi-twitter</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="white">mdi-youtube</v-icon>
              </v-flex>
              <v-flex>
                <v-icon color="white">mdi-linkedin</v-icon>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-footer>
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
      this.$store.commit("setUserType", "");
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
