<template>
  <v-app>
    <v-app-bar app color="cyan darken-3" dark>
      <v-toolbar-title class="lighten-3">Curriculum Management</v-toolbar-title>
      <v-btn text rounded to="/">HOME</v-btn>
      <!-- <v-btn text rounded to="/addcurriculumstructure" v-show="checkLogging"
        >ADD</v-btn
      >
      <v-btn class="ml-3" text rounded to="/view" v-show="checkLogging"
        >VIEW</v-btn
      > -->

      <v-spacer></v-spacer>
      <v-layout v-show="isexist">
        <v-spacer></v-spacer>
        <v-icon class="mr-3">mdi-folder</v-icon>
        <p class="mt-4 mr-12 title-1">
          {{ $store.getters.Username }}
        </p>
      </v-layout>
      <v-btn text rounded to="/login" v-show="!checkLogging">LOG IN</v-btn>
      <v-btn text rounded v-show="checkLogging" @click="logout">LOG OUT</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- font-weight-medium cyan darken-3 -->
    <v-footer absolute class="black white--text">
      <v-flex text-center xs12>
        <div>
          &copy; {{ new Date().getFullYear() }} — <strong>Curriculum</strong>
        </div>
      </v-flex>
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
