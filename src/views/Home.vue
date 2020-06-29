<template>
  <v-card width="100%">
    <FrontPage />
  </v-card>
  <!-- <v-flex md6>
      <p>Yes Queen</p>
    </v-flex> -->
</template>

<script>
// @ is an alias to /src
import FrontPage from "../components/home/FrontPage.vue";
export default {
  data() {
    return {
      name: "home"
    };
  },
  components: {
    FrontPage
  }
};
</script>
