<template>
  <v-container>
    <v-flex>
      <v-card width="75%">
        <v-card-title>
          add adynamic fields
        </v-card-title>
        <v-card-text class="px-5">
          <v-select
            label="Select Fields"
            :items="compName"
             multiple
             v-model="selected"
          ></v-select>
        </v-card-text>
        <v-actions>
          <v-template v-for="(select, index) in selected" :key="select.index">
            <v-flex>
              {{ index }}
              <!-- class="px-5" -->
              <v-text-field
                :label="select"
                :v-model="selected"
                v-model="detail[index]"
              ></v-text-field>
            </v-flex>
          </v-template>
          <v-btn @click="addProgram()">Add Program</v-btn>
        </v-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      component: [],
      compName: [],
      selected: [],
      detail: []
    };
  },
  methods: {
    getComp() {
      api.getComponent(this.$store.getters.org_id).then(response => {
        //  console.log(response);
        this.component = response.data;
        console.log(this.component);
        for (var i=0; i < this.component.length; i++) {
          this.compName.push(this.component[i].name);
        }
        console.log(this.compName);
      });
    },
    addProgram() {
      console.log(this.selected);
      console.log(this.detail);
   
      for (var i = 0; i < this.detail.length; i++) {
          if(this.detail[i] == undefined){
              this.detail[i] = "";
          }
        console.log(this.selected[i] + " : " + this.detail[i]);

      }
   
    }
  },
  mounted() {
    this.getComp();
  }
};
</script>
