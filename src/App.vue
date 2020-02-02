<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn @click="addCurriculum()">Add Curriculum Structure</v-btn>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-content>
      <HelloWorld />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  }),
  methods: {
    addCurriculum() {
      //console.log(this.$route)
      this.$router.push({ name: "addCurriculum" });
    }
  }
};
</script>
