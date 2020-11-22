<template>
  <v-container>
  
      
        <v-card raised>
          <v-card-title>
            <div class="cyan--text text--darken-3">
              ADD NEW COMPONENTS
              <hr />
            </div>
          </v-card-title>
          <v-card-text>
            <v-template v-for="(com, index) in data" :key="com.index">
              <v-flex>
                <v-layout>
                  <p class="title">Component- {{ index + 1 }}</p>
                  <v-spacer></v-spacer>
                  <v-icon @click="addCO()" class="primary--text"
                    >mdi-plus</v-icon
                  >
                  <!-- <v-icon >mdi-minus</v-icon> -->
                </v-layout>
                <v-text-field
                  label="Enter Name of Component"
                  v-model="com.name"
                ></v-text-field>
                <v-text-field
                  label="Provide Description"
                  v-model="com.desc"
                ></v-text-field>
              </v-flex>
            </v-template>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="addComponent()">add component</v-btn>
          </v-card-actions>
        </v-card>
        <!--second card-->
        <v-card class="ml-12 px-4 md6 xs12" width="60%">
          <v-card-title>
            <div class="cyan--text text--darken-3">
              ADD DESCRIPTION TO THE EXISTING COMPONENTS
              <hr />
            </div>
          </v-card-title>
          <v-card-text>
            <v-template v-for="(rev, index) in revise" :key="rev.index">
              <v-flex>
                <v-layout>
                  <p class="title">Comp {{ index + 1 }}</p>
                  <v-spacer></v-spacer>
                  <v-icon @click="addRE()" class="primary--text"
                    >mdi-plus</v-icon
                  >
                  <!-- <v-icon >mdi-minus</v-icon> -->
                </v-layout>
                <v-select
                  label="Add Desctioption to the existing components"
                  :items="comp"
                  v-model="rev.name"
                ></v-select>
                <v-text-field
                  label="Provide Description to the selected component"
                  v-model="rev.desc"
                ></v-text-field>
              </v-flex>
            </v-template>
          </v-card-text>
          <v-actions>
            <v-layout>
              <v-btn @click="addExistingDesc()"> Add Description</v-btn>
              <v-btn @click="getComp()"> Refresh</v-btn>
            </v-layout>
          </v-actions>
        </v-card>
      
    
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      data: [
        {
          name: "",
          desc: ""
        }
      ],
      revise: [
        {
          name: "",
          desc: ""
        }
      ],
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
      component: [],
      compName: []
    };
  },
  methods: {
    addCO() {
      this.data.push({});
    },
    addRE() {
      this.revise.push({});
    },
    addExistingDesc() {
      for (var i = 0; i < this.revise.length; i++) {
        let info = {
          name: this.revise[i].name,
          desc: this.revise[i].desc,
          orgId: this.$store.getters.org_id
        };
        //   console.log(info);
        api.setnewComponent(info).then(response => {
          console.log(response);
        });
      }
      // for(var k=0; k<this.compName.length; k++){
      //     if( this.comp[k] == this.compName[k]){
      //     this.comp.splice(k,1);
      //     }
      //     }
    },
    addComponent() {
      for (var i = 0; i < this.data.length; i++) {
        let info = {
          name: this.data[i].name,
          desc: this.data[i].desc,
          orgId: this.$store.getters.org_id
        };
        //   console.log(info);
        api.setnewComponent(info).then(response => {
          console.log(response);
        });
      }
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
        for (var k = 0; k < this.comp.length; k++) {
          for (var j = 0; j < this.compName.length; j++) {
            if (this.comp[k] == this.compName[j]) {
              this.comp.splice(k, 1);
              // delete this.comp[k];
            }
          }
        } //end of loop
        //  this.compName= ''
      });
    }
  },
  mounted() {
    this.getComp();
    // this.calculateComp();
  }
};
</script>
