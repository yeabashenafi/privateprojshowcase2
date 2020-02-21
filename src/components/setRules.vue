<template>
  <v-span>
    <v-flex>
      <v-card>
        <v-card-title headline class="justify-center"
          >Adjust the Rules</v-card-title
        >
        <v-layout>
          <v-text class="pa-5">Committee Members: </v-text>
          <v-text class="mx-3 py-5">Max:</v-text>
          <v-text-field v-model="max"></v-text-field>
          <v-text class="mx-3 py-5">Min: </v-text>
          <v-text-field v-model="min"></v-text-field>
        </v-layout>

        <v-layout>
          <v-text class="pa-5">Parity of committee members :</v-text>
          <v-radio-group row v-model="radio">
            <v-radio value="Odd" label="Odd"></v-radio>
            <v-radio value="Even" label="Even"></v-radio>
            <v-radio value="Any" label="Any"></v-radio>
          </v-radio-group>
        </v-layout>

        <v-layout>
          <v-text class="pa-5">Endorsment Passing Percentage: </v-text>
          <v-text-field class="mx-2" v-model="percent"></v-text-field>
        </v-layout>

        <v-container text-center>
          <v-btn class="success" text @click="add_rules">Add Rules</v-btn>
        </v-container>
      </v-card>
    </v-flex>
  </v-span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      radio: "",
      max: "",
      min: "",
      percent: ""
    };
  },
  methods: {
    add_rules() {
      let data = {
        max_no_of_Committee_Members: this.max,
        min_no_of_Committee_Members: this.min,
        partity_of_committee: this.radio
      };
      var orgID = this.$store.getters.org_id;
      var token = this.$store.getters.token;
      console.log(data);
      api.addOrgRules(orgID, token, data).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
