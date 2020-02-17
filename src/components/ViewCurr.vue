<template>
  <span>
    <v-flex class="mt-5 ml-12">
      <template v-for="(frameworks, index) in currfr">
        <v-flex v-bind:key="frameworks.index" class="ml-12">
          <v-card class="float-left mr-10 ml-3" width="23%">
            <v-card-actions class="cyan darken-2 white--text ">
              <v-flex>
                <v-text class="headline">Framework{{ index + 1 }}</v-text>
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-container>
                <p>Name: {{ frameworks.program_name }}</p>
                <p>Type: {{ frameworks.program_type }}</p>
                <p>gradreqs: {{ frameworks.gradreqs }}</p>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-flex>
  </span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      currfr: []
    };
  },
  methods: {
    getCurriculums() {
      api.getusersFrameworks(this.$store.getters.User_id).then(response => {
        this.currfr = response;
        //      console.log(this.currfr.frameworks);
      });
    }
  },
  mounted() {
    this.getCurriculums();
  }
};
</script>

<style></style>
