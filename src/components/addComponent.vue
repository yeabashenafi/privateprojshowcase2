<template>
  <v-flex justify-center>
    <v-card width="50%" class="xs12 sm6 md6 float-center ml-12 px-8">
      <v-card-title>
        ADD NEW COMPONENTS
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Add New Component"
          v-model="data.name"
        ></v-text-field>
        <v-text-field
          label="provide Description"
          v-model="data.desc"
        ></v-text-field>
        <v-btn @click="addComponent()">Add component</v-btn>
      </v-card-text>
      <v-card-text>
        <div class="cyan--text text--darken-3">
          ADD DESCRIPTION TO THE EXISTING COMPONENTS
          <hr />
        </div>
        <v-select
          label="Add Desctioption to the existing components"
          :items="comp"
          v-model="revise.name"
        ></v-select>
        <v-text-field
          label="Provide Description to the selected component"
          v-model="revise.desc"
        ></v-text-field>
        <v-layout>
          <v-btn @click="addExistingComp()"> Add Description</v-btn>
          <v-btn @click="getComp()"> Refresh</v-btn>
        </v-layout>
        
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      data: {
        name: "",
        desc: ""
      },
      revise: {
        name: "",
        desc: ""
      },

      comp: [
        "program_name",
        "program_type",
        "background",
        "rational",
        "gradingmethods",
        "medium",
        "coursecoding",
        "gradreqs",
        "program_nomenclature",
        "program_outcome",
        "program_educational_outcome",
        "course_learning_outcome"
      ],
      filtered: []
    };
  },
  methods: {
    addExistingComp() {
      let info = {
        name: this.revise.name,
        desc: this.revise.desc
      };
      console.log(info);
      api.setnewComponent(info).then(response => {
        console.log(response);
      });
      this.revise.name = "";
      this.revise.desc = "";
    },
    addComponent() {
      let info = {
        name: this.data.name,
        desc: this.data.desc
      };
      console.log(info);
      console.log(info);
      api.setnewComponent(info).then(response => {
        console.log(response);
      });
      this.data.name = "";
      this.data.desc = "";
    },
    getComp() {
      api.getComponent(this.$store.getters.org_id).then(response => {
        //  console.log(response);
        this.component = response.data;
        console.log(this.component);
        for (var i = 0; i < this.component.length; i++) {
          this.compName.push(this.component[i].name);
        }
        console.log(this.compName);
      });
       
    },
    
  },
  mounted() {
    this.getComp();
  }
};
</script>
