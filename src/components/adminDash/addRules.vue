<template>
  
    <v-container>
      <v-card raised>
        <v-card-title  class="cyan darken-3"
          >
            <v-flex class="text-center">
              <p class="white--text font-weight-bold">
                Adjust the Committee Rules   
              </p>
            </v-flex>
          </v-card-title>

        <v-layout wrap>
          
          <v-flex sm4 >
            <v-text-field
             class="mx-3 my-3"             
             :class="{
               'mx-3':$vuetify.breakpoint.smAndUp,
               'mx-10':$vuetify.breakpoint.xsOnly
               }"
             label="Maximum Memebers" v-model="max" solo></v-text-field>
          </v-flex>
          <v-flex sm4 >
            <v-text-field 
            class="mx-3 my-3"
            solo
            :class="{
               'mx-3':$vuetify.breakpoint.smAndUp,
               'mx-10':$vuetify.breakpoint.xsOnly
               }"
            v-model="min" label="Minimum Members"></v-text-field>
          </v-flex>
          <v-flex sm4>
             <v-text-field class="my-3" 
             :class="{
               'mx-3':$vuetify.breakpoint.smAndUp,
               'mx-10':$vuetify.breakpoint.xsOnly
               }"
             solo v-model="percent" label="Endorsement Percentage"></v-text-field> 
          </v-flex>
          
          
        </v-layout>

        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text class="pa-5">Parity of committee members :</v-text>
            <v-radio-group  class="mx-5" row v-model="radio">
              <v-radio value="Odd" label="Odd"></v-radio>
              <v-radio value="Even" label="Even"></v-radio>
              <v-radio value="Any" label="Any"></v-radio>
            </v-radio-group>
          </v-flex>
          
          
        </v-layout>

        

        <v-container text-center>
          <v-btn class="success" text @click="add_rules">Add Rules</v-btn>
        </v-container>
      </v-card>
    </v-container>
  
</template>

<script>
import { apiservice } from "../../apiservice";
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
        partity_of_committee: this.radio,
        percentage_for_endorsment: this.percent
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
