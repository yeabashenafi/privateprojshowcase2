<template>
  <v-container>
    <v-card raised>
      <v-card-title class="cyan darken-3">
        <v-flex class="text-center">
          <p class="white--text font-weight-bold">Add New Curriculum Components</p>
        </v-flex>
        
      </v-card-title>
      <v-card-text>
        <v-layout wrap>
          <v-flex md4 sm5 >
            <v-text-field
              label="Add New Component"
              v-model="data.name"
              solo
            ></v-text-field>
          </v-flex>
          <v-flex md8 sm7 xs12>
            <v-text-field
              class="mx-sm-3"
              label="Provide description"
              v-model="data.desc"
              solo
            ></v-text-field>
          </v-flex>
        </v-layout>
        
        <v-flex class="text-center">
          <v-btn class="text-center" @click="addComponent()">Add component</v-btn>
        </v-flex>
        
      </v-card-text>
      <v-layout wrap>
        <v-flex class="mx-10 my-3">
          <v-card-text >
        <div class="cyan--text text--darken-3 text-center">
          ADD DESCRIPTION TO THE EXISTING COMPONENTS
        </div>
        <v-select
          label="Choose component"
          solo
          :items="comp"
          v-model="revise.name"
        ></v-select>
        <v-text-field
          solo
          label="Provide Description to the selected component"
          v-model="revise.desc"
        ></v-text-field>
        <v-flex class="text-center">
          <v-btn @click="addExistingComp()"> Add Description</v-btn>
          <!-- <v-btn @click="getComp()"> Refresh</v-btn> -->
        </v-flex>
      </v-card-text>
        </v-flex>
      </v-layout>
      
    </v-card>
  </v-container>
</template>
<script>
import { apiservice } from "../../apiservice";
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
    }
  },
  mounted() {
    this.getComp();
  }
};
</script>
