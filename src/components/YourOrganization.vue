<template>
  <span> Name of parent body: {{ parent.officeType }} </span>
</template>

<script>
import { apiservice } from "../apiservice.js";
const api = new apiservice();
export default {
  data() {
    return {
      offices: [],
      parent: {}
    };
  },
  methods: {
    getOffices() {
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        this.offices = response;
        // console.log(this.offices);
        for (var i = 0; i < this.offices.length; i++) {
          if (
            !this.offices[i].hasParent &&
            this.offices[i].hasParent != undefined
          ) {
            this.parent = this.offices[i];
          }
        }
      });
    }
  },
  mounted() {
    this.getOffices();
  }
};
</script>

<style></style>
