<template>
  <span>
    <user-dashboard></user-dashboard>
  </span>
</template>

<script>
import dashboard from "../components/UserDashboard.vue";
export default {
  name: "UserDashboard",
  components: {
    UserDashboard
  },

  data: () => {
    return {};
  }
};
</script>

<style></style>
