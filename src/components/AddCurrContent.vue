<template>
  <span width="70%">
    <v-container text-md-center>
    <v-form width="50%" ref="form">
        <v-card width="100%" ref="cardref">
        <v-card-title class="display-1">
          Add a Curriculum Structure
        </v-card-title>
        <v-card-actions class="ml-5">
          <v-flex width="100%" raised>
          <v-flex>
            <v-layout>
               <v-select
              :items="types"
              v-model="type"
              label="Program Type"  class="mx-5"
             ></v-select>
              <v-text-field
              full-width
              v-model="name"
              label="Program Name" class="mx-5"
            ></v-text-field>
           
          </v-layout>
          </v-flex>
            <v-textarea
              
              label="Background"
              v-model="background"
            ></v-textarea>
            <v-textarea
              label="Rational"
              v-model="rational"
            ></v-textarea>
            <p outlined class="headline">Program Outcome/s(PO)</p>
            <v-flex class="ml-5">
              <template v-for="(program, index) in po">
                <v-flex v-bind:key="program.index">
                  <v-layout>
                    <p class="title">PO {{ index + 1 }}</p>
                    <v-spacer></v-spacer>
                    <v-icon @click="reducePo()">mdi-minus</v-icon>
                    <v-icon @click="addPO()">mdi-plus</v-icon>
                  </v-layout>
                  <v-text-field
                    outlined
                    label="Name of Outcome"
                    v-model="program.name"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    label="Description"
                    v-model="program.details"
                  ></v-text-field>
                </v-flex>
              </template>
              <p class="headline">Program Educational Outcome/s(PEO)</p>
              <v-flex>
                <template v-for="(PEO, index) in peo">
                  <v-flex v-bind:key="PEO.index">
                    <v-layout>
                      <p class="title">PEO{{ index + 1 }}</p>
                      <v-spacer></v-spacer>
                      <v-icon @click="reducePeo()">mdi-minus</v-icon>
                      <v-icon @click="addPEO()">mdi-plus</v-icon>
                    </v-layout>
                    <v-text-field
                      outlined
                      label="Name of Educational Outcome"
                      v-model="PEO.name"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      label="Description"
                      v-model="PEO.details"
                    ></v-text-field>
                    <v-select
                      multiple
                      :items="POS"
                      label="Mapped PO/POs"
                      v-model="PEO.mappedPO"
                    ></v-select>
                  </v-flex>
                </template>
              </v-flex>
               <p class="headline">Curriculum Learning Outcome</p>
              
                <template v-for="(CLO,index) in clo">
                  <v-flex  v-bind:key="CLO.index">
                <v-layout>
                      <p class="title" >CLO{{ index+1 }}</p>
                      <v-spacer></v-spacer>
                      <v-icon @click="reduceClo()">mdi-minus</v-icon>
                      <v-icon @click="addCLO()">mdi-plus</v-icon>
                </v-layout>
                 <v-text-field
                      outlined
                      label="Name of Educational Outcome"
                      v-model="CLO.name"
                 ></v-text-field>
                    <v-text-field outlined label="Description" v-model="CLO.details"></v-text-field>
                    <v-select
                      multiple
                      :items="PEOS"
                      label="Mapped PEO/PEOs"
                      v-model="CLO.mappedPEO"
                    ></v-select>
                  </v-flex>
                </template>
              <v-flex>
                <template >
                  <v-flex>
                   
                    <v-text-field label="Cource tile"
                                  v-model="title"></v-text-field>
                    <v-text-field label="Cource Code"
                                  v-model="code"></v-text-field>
                    <v-text-field label="Contact Hour"
                                   v-model="contactHour"></v-text-field>
                    <v-select :items="year"
                               v-model="ClassYear"
                                label="Accadamic Year"></v-select>
                    <v-select label="Select Semister" 
                              v-model="semister"
                              :items="semisters"></v-select>
                    <v-text-field label="Pre-requisties"
                                   v-model="preRequisites"></v-text-field>
                        <p class="title primary--text">Cource Outline</p>
                  <template v-for="(outline,index) in outlines">
                     <v-flex :key="outline.index">
                      <v-layout>
                        <p class="title"> Chapter  {{ index+1}}</p>
                        <v-spacer></v-spacer>
                        <v-icon @click="reduceOutline()">mdi-minus</v-icon>
                        <v-icon @click="addOutline()">mdi-plus</v-icon>
                  </v-layout>
                             <v-text-field outlined label="Course Chapter" v-model="outline.chapter"></v-text-field>
                             <v-text-field outlined label="Details" v-model="outline.details"></v-text-field>
                     </v-flex>
                      </template> 

                      <p class="title primary--text"> References</p>
    
                          <v-flex>
                          <!-- <v-layout>
                          <v-spacer></v-spacer>
                          <v-icon @click="reduceReference()">mdi-minus</v-icon>
                          <v-icon @click="addReference()">mdi-plus</v-icon>
                        </v-layout> -->
                             <v-textarea
                              label="References" 
                              v-model="refers_name" ></v-textarea>
                     </v-flex>
                     
                  <p class="title primary--text">Learning Methods</p>
                  <template v-for="(lmethod,index) in learningMethod">
                          <v-flex :key="lmethod.index">
                          <v-layout>
                          <p class="title">Method{{ index+1}}</p>
                          <v-spacer></v-spacer>
                          <v-icon @click="reduceMethod()">mdi-minus</v-icon>
                          <v-icon @click="addLearningMethod()">mdi-plus</v-icon>
                  </v-layout>
                             <v-text-field  label="References" v-model="lmethod.methodName"></v-text-field>
                     </v-flex>
                  </template>
                     
                  <v-textarea v-model="coursePolicies"
                              label="Course Policies"></v-textarea>
                  <v-textarea v-model="gradingScale"
                              label="Grading Scale"></v-textarea>
                  <v-textarea v-model="graduateProfile"
                              label="Graduate Profile"></v-textarea>
                  <v-textarea v-model="tools" 
                              label="Tools"></v-textarea>
                  </v-flex>
                </template>
              </v-flex>
            </v-flex>
           <v-flex class="ma-5">
             <v-layout text-md-center>
               <v-btn color="success" @click="SaveChange()" text>
                        Save change </v-btn>
                <v-spacer></v-spacer>
              <v-btn color="success" 
              @click="addCurriculum()" text
                >Send for approval</v-btn>
                
             </v-layout>
           </v-flex>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-form>
       <v-dialog
          max-width="400px"
         v-model="ok">
              <v-card>
              <v-card-title>
                <h2>confirmed</h2>
              </v-card-title>
              <v-card-text>
                <h3> Successfully submitted the change</h3>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="okbtn">ok</v-btn>
              </v-card-actions>
            </v-card>
         </v-dialog>
    </v-container>
  </span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => {
    return {
      refers_name: '',
      preRequisites:'',
      classYear: '',
      contactHour: '',
      code: '',
      title: '',
      ok: false,
      no_of_PO: 1,
      no_of_PEO: 1,
      no_of_CLO: 1,
      types: [
        "High School",
        "Bsc. Degree",
        "Ba. Degree",
        "Msc. (PG)",
        "PHD. (PG)",
        "Doctoral (PG)"
      ],
      name: "",
      type: "",
      background: "",
      rational: "",
      po: [
        {
          id: "",
          name: "",
          details: ""
        }
      ],
      peo: [
        {
          id: "",
          name: "",
          details: "",
          mappedPO: []
        }
      ],
      clo: [
        {
          id: "",
          name: "",
          details: "",
          mappedPEO: []
        }
      ],
      outlines: [
        {
          chapter: '',
          details: ''
        }
      ],
      references: '',
      gradingScale: '',
      learningMethod: [
        {
          methodName: ''
        }
      ],
      coursePolicies: '',

      year: ['1st year', '2nd year', '3rd year' , '4th year', '5th year'],
      semisters: ['semister 1','semister 2','semister 3','semister 4','semister 5','semister 6',
                 'semister 7','semister 8','semister 9','semister 10']
    };
  },
  methods: {
    okbtn() {
      this.ok = !this.ok;
      this.name = "";
      this.type = "";
      this.background = "";
      this.rational = "";
    },
    addPO() {
      //  window.alert("added a program outcome");
      //this.no_of_PO++;
      this.po.push({});
    },
    addPEO() {
      this.peo.push({});
    },
    addCLO() {
      this.clo.push({});
    },
    addCurriculum() {
      this.ok = true;
      this.setpoID();
      let data = {
        program_name: this.name,
        program_type: this.type,
        background: this.background,
        rational: this.rational,
        program_outcome: this.po,
        program_educational_outcome: this.peo,
        course_learning_outcome: this.clo,
        owner: "Admin"
      };
      console.log(data);

      api.addStructure(data).then(data => {
        console.log(data);
      });
    },
    setpoID() {
      for (var program in this.po) {
        console.log(program);
        // this.po[i].id = "po"+(i+1)
      }
    },
    addOutline() {
      this.outlines.push({});
    },
    addReference() {
      this.references.push({});
    },
    addLearningMethod() {
      this.learningMethod.push({});
    },
    reduceReference() {
      if (this.references.length > 1) {
        this.references.pop();
      }
    },
    reduceOutline(){
      if(this.outlines.length > 1){
         this.outlines.pop();
      }
    },
    reduceMethod(){
      if(this.learningMethod.length > 1){
         this.learningMethod.pop();
      }
    },
    reduceClo(){
      if(this.clo.length > 1){
         this.clo.pop();
      }
    },
    reducePeo(){
      if(this.peo.length > 1){
         this.peo.pop();
      }
    },reducePo(){
      if(this.po.length > 1){
         this.po.pop();
      }
    }
  },
  computed: {
    POS: function() {
      var x = [];
      for (var i = 1; i <= this.po.length; i++) {
        x.push("PO" + i);
      }
      return x;
    },
    PEOS: function() {
      var y = [];
      for (var j = 1; j <= this.peo.length; j++) {
        y.push("PEO" + j);
      }
      return y;
    }
  }
};
</script>

<style></style>
