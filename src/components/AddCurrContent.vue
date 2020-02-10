<template>
  <span width="70%">
    <v-container text-md-center elevation-12>
    <v-form width="50%" ref="form">
        <v-card width="100%" ref="cardref">
        <v-card-title class="display-1">
          Add a Curriculum Structure
        </v-card-title>
        <v-card-actions class="ml-5">
          <v-flex  raised>
          <v-stepper v-model="el">
            <v-stepper-header>
              <v-stepper-step :complete="el > 1" step="1">Step 1</v-stepper-step>
              <v-stepper-step :complete="el > 2" step="2">Step 2</v-stepper-step>
              <v-stepper-step :complete="el > 3" step="3">Step 3</v-stepper-step>
            </v-stepper-header>
            <v-divider></v-divider>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card>
                    <v-card-title>
                      <v-flex class="text-center">
                        <p class="headline">General descriptions</p>
                      </v-flex>
                    </v-card-title>
                      <v-container>
                        <v-layout class="mb-3">
                          <v-select
                          :items="types"
                          v-model="type"
                          outlined filled rounded
                          label="Program Type"  class="mx-5 "
                          ></v-select>
                          <v-spacer></v-spacer>
                          <v-text-field
                          solo
                          v-model="name"
                          label="Program Name" class="mx-5"
                          ></v-text-field>
                        </v-layout>
                        <v-textarea
                        label="Background"
                        v-model="background"
                        outlined
                        height=10
                        class="mb-3"
                        
                        ></v-textarea>
                        <v-text-field
                          label="Grading Scale"
                          solo
                          ></v-text-field>
                          <v-textarea
                            label="Rational"
                            v-model="rational"
                            solo
                            height=10
                          ></v-textarea>

                          <v-layout>
                            <v-text-field  
                            label="Medium of Instruction"
                            
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            
                            <v-text-field label="Course Coding"></v-text-field>
                          </v-layout>
                          <v-text-field 
                            placeholder="What will a student be called upon the completion of this program"
                            label="Nomenclature of the Program" class="mr-10" solo
                            ></v-text-field>
                          <v-text-area label="Examination and Grading" placeholder="Describe processes of examination and Grading"></v-text-area>
                          <v-text-area label="Graduating Requirements" placeholder="Describe the requirements for "></v-text-area>  
                    </v-container> 
                       <v-btn @click="el=2">Continue</v-btn>
                    </v-card>  
                </v-stepper-content>

                <v-stepper-content step="2">
                      <v-card>
                        <v-card-title>
                          <v-flex class="text-center">
                            <p class="headline">Objectives of the framework</p>
                            
                          </v-flex>
                        </v-card-title>
                        <v-card-actions>
                          <v-container>
                          <v-flex>
                            <p outlined class="headline">Program Outcome/s(PO)</p>
                            <template v-for="(program,index) in po">
                              <v-flex v-bind:key="program.index">
                                <v-layout>
                                  <p class="title"> PO {{index+1 }} </p>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="reducePo()">mdi-minus</v-icon>
                                  <v-icon @click="addPO()">mdi-plus</v-icon>
                                </v-layout>
                                <v-text-field outlined label="Name of Outcome" v-model="program.name"></v-text-field>
                                <v-text-field outlined label="Description" v-model="program.details"></v-text-field>
                              </v-flex>
                            </template>
                          </v-flex>
                          <v-flex>
                              
                              <p class="headline">Program Educational Outcome/s(PEO)</p>
                              <template v-for="(PEO,index) in peo">
                                <v-flex v-bind:key="PEO.index">
                                  <v-layout>
                                    <p class="title">PEO{{ index+1 }}</p>
                                    <v-spacer></v-spacer>
                                    <v-icon @click="reducePeo()">mdi-minus</v-icon>
                                    <v-icon @click="addPEO()">mdi-plus</v-icon>
                                  </v-layout>
                                  <v-text-field
                                    outlined
                                    label="Name of Educational Outcome"
                                    v-model="PEO.name"
                                  ></v-text-field>
                                  <v-text-field outlined label="Description" v-model="PEO.details"></v-text-field>
                                  <v-select
                                    multiple
                                    :items="POS"
                                    label="Mapped PO/POs"
                                    v-model="PEO.mappedPO"
                                  ></v-select>
                                </v-flex>
                              </template>
                          </v-flex>
                          <v-flex>
                              <p class="headline">Curriculum Learning Outcome/s</p>
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
                          </v-flex>
                          </v-container>
                        </v-card-actions>
                        <v-btn @click="el=3">Continue</v-btn>
                      </v-card>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <p></p>
                </v-stepper-content>
            </v-stepper-items>
                
                  
                
                   
            
            
          
          </v-stepper>
            
             

          
            
           
          
          
          
            
            
            
            
            
            
            
            
            <v-flex class="ml-5">
              
              <v-flex>
                
              </v-flex>
               
              
                
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

                      <p class="title primary--text">References</p>

                      <v-flex>
                        <!-- <v-layout>
                          <v-spacer></v-spacer>
                          <v-icon @click="reduceReference()">mdi-minus</v-icon>
                          <v-icon @click="addReference()">mdi-plus</v-icon>
                        </v-layout> -->
                        <v-textarea
                          label="References"
                          v-model="refers_name"
                        ></v-textarea>
                      </v-flex>

                      <p class="title primary--text">Learning Methods</p>
                      <template v-for="(lmethod, index) in learningMethod">
                        <v-flex :key="lmethod.index">
                          <v-layout>
                            <p class="title">Method{{ index + 1 }}</p>
                            <v-spacer></v-spacer>
                            <v-icon @click="reduceMethod()">mdi-minus</v-icon>
                            <v-icon @click="addLearningMethod()"
                              >mdi-plus</v-icon
                            >
                          </v-layout>
                          <v-text-field
                            label="References"
                            v-model="lmethod.methodName"
                          ></v-text-field>
                        </v-flex>
                      </template>

                      <v-textarea
                        v-model="coursePolicies"
                        label="Course Policies"
                      ></v-textarea>
                      <v-textarea
                        v-model="gradingScale"
                        label="Grading Scale"
                      ></v-textarea>
                      <v-textarea
                        v-model="graduateProfile"
                        label="Graduate Profile"
                      ></v-textarea>
                      <v-textarea v-model="tools" label="Tools"></v-textarea>
                    </v-flex>
                  </template>
                </v-flex>
              </v-flex>
              <v-flex class="ma-5">
                <v-layout text-md-center>
                  <v-btn color="success" @click="SaveChange()" text>
                    Save change
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="success" @click="addCurriculum()" text
                    >Send for approval</v-btn
                  >
                </v-layout>
              </v-flex>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-form>
      <v-dialog max-width="400px" v-model="ok">
        <v-card>
          <v-card-title>
            <h2>confirmed</h2>
          </v-card-title>
          <v-card-text>
            <h3>Successfully submitted the change</h3>
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
      el:1,
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
          chapter: "",
          details: ""
        }
      ],
      references: "",
      gradingScale: "",
      learningMethod: [
        {
          methodName: ""
        }
      ],
      coursePolicies: "",

      year: ["1st year", "2nd year", "3rd year", "4th year", "5th year"],
      semisters: [
        "semister 1",
        "semister 2",
        "semister 3",
        "semister 4",
        "semister 5",
        "semister 6",
        "semister 7",
        "semister 8",
        "semister 9",
        "semister 10"
      ]
    };
  },
  methods: {
    okbtn() {
      this.ok = !this.ok;
      this.name ='';
      this.background = '';
      this.type = '';
      this.background = '';
      this.rational = '';
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
    getBackground(){
      api.getOrganizations(this.$store.getters.org_id).then((response) =>{
//      c 
        console.log(response.data[0].background)
        this.background = response.data[0].background
      }
      )
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
    reduceOutline() {
      if (this.outlines.length > 1) {
        this.outlines.pop();
      }
    },
    reduceMethod() {
      if (this.learningMethod.length > 1) {
        this.learningMethod.pop();
      }
    },
    reduceClo() {
      if (this.clo.length > 1) {
        this.clo.pop();
      }
    },
    reducePeo() {
      if (this.peo.length > 1) {
        this.peo.pop();
      }
    },
    reducePo() {
      if (this.po.length > 1) {
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
    },
   
  },
  mounted(){
    this.getBackground()
  } 

};

</script>

<style></style>
