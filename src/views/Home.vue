<template>
  <div class="home">
    <FrontPage />
  </div>
</template>

<script>
// @ is an alias to /src
import FrontPage from "../components/FrontPage.vue";
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
