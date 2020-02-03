<template>
  <v-app>
    <v-app-bar app color="#607D8B" dark>
      <v-toolbar-title class="lighten-3">Curriculum Management</v-toolbar-title>
      <v-btn text rounded to="/">HOME</v-btn>
      <v-btn text rounded v-model="logged_in">ADD</v-btn>
      <v-btn class="ml-3" text rounded to="/view" v-model="logged_in"
        >VIEW</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn text rounded to="/about">LOG IN</v-btn>
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
      logged_in: false
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    addCurriculum() {
      //console.log(this.$route)
      this.$router.push({ name: "addCurriculum" });
    }
  }
};
</script>
