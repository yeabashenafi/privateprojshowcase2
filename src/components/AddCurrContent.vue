<template>
  <span width="70%">
    <v-container text-md-center>
      <v-form width="50%" ref="form">
        <v-card width="100%" flat ref="cardref">
          <v-card-title class="display-1 cyan darken-3 ">
            <v-flex class="text-center white--text">
              <p>Add a Curriculum Framework</p>
            </v-flex>
          </v-card-title>
          <v-card-actions  class="ml-5">
            <v-flex >
              <v-stepper 
              vertical
              flat
              v-model="el" >
                <!-- <v-stepper-header> -->
                  <v-stepper-step :complete="el > 1" step="1" key="1"
                    >Step 1</v-stepper-step
                  >
                  <v-stepper-step :complete="el > 2" step="2" key="2"
                    >Step 2</v-stepper-step
                  >
                  <v-stepper-step :complete="el > 3" step="3" key="3"
                    >Step 3</v-stepper-step
                  >
                  <v-stepper-step :complete="el > 4" step="4" key="4">
                    Step 4
                  </v-stepper-step>
                  <!-- <v-stepper-step :complete="el > 4" step="4">
                    step 4</v-stepper-step> -->
                <!-- </v-stepper-header> -->
                <!-- <v-divider></v-divider> -->
                <v-stepper-items>
                  <v-stepper-content step="1">
                    <!-- <v-card flat> -->
                      <v-flex>
                        <v-card-text class="headline font-weight-bold text-center"
                          >Begin the curriculum addition process</v-card-text
                        >
                        
                        <v-layout>
                          <v-spacer></v-spacer>
                          <v-select
                            v-model="selCommName"
                            class="mx-12"
                            solo
                            label="Select the owner Committee "
                            :items="comNames"
                          ></v-select>
                          <v-spacer></v-spacer>
                        </v-layout>
                        <v-card-actions>
                          <v-flex class="text-xs-center">
                            <v-btn @click="getCommId()" 
                            :disabled="!selCommName" color="primary">
                              Begin
                            </v-btn>
                          </v-flex>
                        </v-card-actions>
                      </v-flex>
                    <!-- </v-card> -->
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    
                      
                        <v-flex class="text-center">
                          <p class="headline font-weight-bold">General descriptions</p>
                        </v-flex>
                      <v-card>  
                        <v-flex class="text-center">
                          <v-card width="75%" flat class="mx-auto">
                            
                            <v-card-text class="">
                              <v-select
                                solo
                                label="Select curriculum elements you want to input"
                                :items="compName"
                                multiple
                                v-model="selected"
                              ></v-select>
                            </v-card-text>
                            <v-actions>
                              <v-template
                                v-for="(select, index) in selected"
                                :key="select.index"
                              >
                                <v-flex>
                                  <!-- {{ index }} -->
                                  <!-- class="px-5" -->
                                  <v-text-field
                                    :label="select"
                                    :v-model="selected"
                                    v-model="detail[index]"
                                    :placeholder="descr[index]"
                                    class="px-6"
                                    
                                    outlined
                                  ></v-text-field>
                                </v-flex>
                              </v-template>
                              <!-- <v-btn class="success white--text" @click="addProgram()">Add Program</v-btn> -->
                            </v-actions>
                          </v-card>
                        </v-flex>
                        
                    
                      <v-btn class="mt-5 primary--text" @click="el = 3"
                        >Continue</v-btn
                      >
                      <v-btn class="ml-12 mt-5 red--text" @click="el = el - 1">
                          Previous</v-btn>
                    </v-card>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-5 pb-10" flat>
                      <v-card-title>
                        <v-flex class="text-center">
                          <p class="headline font-weight-bold">Objectives of the framework</p>
                        </v-flex>
                      </v-card-title>
                      <v-card-actions>
                        <v-container>
                          <v-flex class="mx-12">
                            <p class="title font-weight-bold">
                              Program Outcome/s(PO)
                            </p>
                            <template v-for="(program, index) in po">
                              <v-flex v-bind:key="program.index">
                                <v-layout>
                                  <p class="subtitle-1">PO {{ index + 1 }}</p>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="reducePo()">mdi-minus</v-icon>
                                  <v-icon @click="addPO()">mdi-plus</v-icon>
                                </v-layout>
                                <v-text-field
                                  solo
                                  label="Name of Outcome"
                                  v-model="program.name"
                                ></v-text-field>
                                <v-text-field
                                  solo
                                  label="Description"
                                  v-model="program.details"
                                ></v-text-field>
                              </v-flex>
                            </template>
                          </v-flex>
                          <v-flex>
                            <p class="title font-weight-bold">
                              Program Educational Outcome/s(PEO)
                            </p>
                            <template v-for="(PEO, index) in peo">
                              <v-flex v-bind:key="PEO.index" class="mx-12">
                                <v-layout>
                                  <p class="subtitle-1">PEO{{ index + 1 }}</p>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="reducePeo()"
                                    >mdi-minus</v-icon
                                  >
                                  <v-icon @click="addPEO()">mdi-plus</v-icon>
                                </v-layout>
                                <v-text-field
                                  solo
                                  label="Name of Educational Outcome"
                                  v-model="PEO.name"
                                ></v-text-field>
                                <v-text-field
                                  solo
                                  label="Description"
                                  v-model="PEO.details"
                                ></v-text-field>
                                <v-select
                                  multiple
                                  solo
                                  :items="POS"
                                  class="mx-12"
                                  label="Mapped PO/POs"
                                  v-model="PEO.mappedPO"
                                ></v-select>
                              </v-flex>
                            </template>
                          </v-flex>
                        </v-container>
                      </v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="mt-5 primary--text" @click="el = 4"
                        >Continue</v-btn>
                      <v-btn class="ml-12 mt-5 red--text" @click="el = el - 1">
                          Previous</v-btn>
                    </v-card>
                  </v-stepper-content>

                  <v-stepper-content step="4">
                    <v-card flat>
                      <v-card-title>
                        <v-flex class="text-center">
                          <p class="headline">
                            Add the courses that are part of the curriculum
                          </p>
                        </v-flex>
                      </v-card-title>
                      <v-card-actions>
                        <v-flex>
                          <template v-for="(course, index) in courses">
                            <v-flex v-bind:key="course.index">
                              <v-layout class="mx-12" row>
                                <p>Course{{ index + 1 }}</p>
                                <v-spacer></v-spacer>
                                <v-icon @click="addcourses()">mdi-plus</v-icon>
                                
                              <v-layout class="mx-12" >
                                <v-text-field
                                  @click="showcd"
                                  label="Enter the details of the course"
                                  v-model="course.name"
                                  disabled
                                ></v-text-field>
                                <v-layout>
                              </v-layout>

                                  <v-icon @click="showcd(index)">mdi-cogs</v-icon>
                                  
                                   
                                </v-layout>
                              </v-layout>
                              <CourseDetails
                                v-if="show_courseD"
                                :name="course.name"
                                :curr_id="course.curriculumManagementId"
                              />
                            </v-flex>
                          </template>
                        </v-flex>
                      </v-card-actions>

                      <CourseDetails v-if="show_courseD" :index="currentCourse" :peoLength="peo.length" @finishcd ="course" />    
                      <v-flex class="text-center ">
                        
                          
                          <v-btn  class="primary" @click="addCurriculum()" text
                            >Send for approval</v-btn
                          >
                        
                      </v-flex>
                     
                      <v-card-actions> 
                        <v-spacer></v-spacer>
                        <v-btn class="ml-12 mt-5 red--text" @click="el = el - 1">
                          Previous</v-btn>
                        <v-btn class="ml-12 mt-5 red--text" @click="el = 1">
                          Back to first</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-stepper-content>
                  
                </v-stepper-items>
              </v-stepper>
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
            <h3>Successfully submitted the changes</h3>
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
import CourseDetails from "./CourseDetails.vue";
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  components: {
    CourseDetails
  },
  data: () => {
    return {
      component: [],
      compName: [],
      selCommName: "",
      selCommId: "",
      selected: [],
      detail: [],
      descr: [],

      currentCourse:0,

      close: true,
      show_back: false,
      show_grades: false,
      show_rational: false,
      show_medium: false,
      show_coursecode: false,
      show_courseD: false,
      refers_name: "",
      preRequisites: "",
      classYear: "",
      el: 1,
      SHOW: false,
      contactHour: "",
      code: "",
      title: "",
      ok: false,
      medium: "",
      nomenclature: "",
      no_of_PO: 1,
      gradReqs: "",
      gradingMethods: "",
      no_of_PEO: 1,
      no_of_CLO: 1,
      coursecoding: "",
      // types: [
      //   "High School",
      //   "Bsc. Degree",
      //   "Ba. Degree",
      //   "Msc. (PG)",
      //   "PHD. (PG)",
      //   "Doctoral (PG)"
      // ],
      // categories: [
      //   "Background",
      //   "Grading Scale",
      //   "Rational",
      //   "Medium of Instruction",
      //   "Course Coding"
      // ],
      category: [],
      name: "",
      type: "",
      background: "",
      rational: "",
      po: [
        {
          name: "",
          details: ""
        }
      ],
      peo: [
        {
          name: "",
          details: "",
          mappedPO: []
        }
      ],
      courses: [{

      }],
      clo: [
        {
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
      comittees: [],
      comNames: [],
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
    //////////// daynamic field code frag
    course(detail,index){
      
      this.show_courseD = !this.show_courseD;
      // var last = this.courses.length;
      this.courses[index] = detail;
      console.log(this.courses);
    },
    getCommId() {
      this.el = 2;
      for (var com in this.comittees) {
        if (this.selCommName == this.comittees[com].name) {
          this.selCommId = this.comittees[com].id;
        }
      }
    },
    getComp() {
      api.getComponent(this.$store.getters.org_id).then(response => {
        //  console.log(response);
        this.component = response.data;
        console.log(this.component);
        for (var i = 0; i < this.component.length; i++) {
          this.compName.push(this.component[i].name);
          this.descr.push(this.component[i].desc);
        }
        console.log(this.compName);
      });
    },
  
    showcd(index) {
      this.show_courseD = !this.show_courseD;
      this.currentCourse = index;
      console.log(this.currentCourse);
    },
    okbtn() {
      this.ok = !this.ok;
      this.name = "";
      this.background = "";
      this.type = "";
      this.background = "";
      this.rational = "";
    },
    addPO() {
      this.po.push({});
    },
    addcourses() {
      this.courses.push({});
    },
    addPEO() {
      this.peo.push({});
    },
    addCurriculum() {
      this.ok = true;
      // this.setpoID();
      for (var i = 0; i < this.detail.length; i++) {
        if (this.detail[i] == undefined) {
          this.detail[i] = "";
        }
        // console.log(this.selected[i] + " : " + this.detail[i]);
      }
      // var user = this.$store.getters.User_id;
      var org = this.$store.getters.org_id;
      var object = Object.assign(
        {},
        ...Object.entries({ ...this.selected }).map(([a, b]) => ({
          [b]: this.detail[a]
        }))
      );
      //  console.log(object);
      let data = {
        program_outcome: this.po,
        program_educational_outcome: this.peo,
        
        committeeId: this.selCommId,
        endorsePercentage: 0,
        organizationalId: org
      };
      const combined = { ...object, ...data }; //combine the two objects
      console.log(combined);
      // console.log(data);
      // 
      api.addStructure(combined).then(response => {
        console.log(response.data.id);
        console.log(response.data);
        this.courses.forEach(course => {
          let info = {
            
                title: course.title,
                code: course.code,
                contactHour: course.contactHour ,
                classYear: course.classYear,
                semister: course.semister,
                pre_requisites: course.pre_requisites,
                description: course.description,
                outlines: course.outlines,
                chapter_name: course.chapter_name,
                references: course.references,
                learningMethod: course.learningMethod,
                coursePolicies: course.coursePolicies,
                assessment: course.assessment,
                gradingScale: course.gradingScale,
                graduateProfile: course.graduateProfile,
                tools: course.tools,
                curriculumManagementId: response.data.id
              
                      }
          console.log(info);
          api.addCourse(this.$store.getters.token,info).then(response => {
            console.log("Courses added", response);
          });
        });
        
      });
      
    },
    getBackground() {
      api.getOrganizations(this.$store.getters.org_id).then(response => {
        //      c
        console.log(response.data[0].background);
        this.background = response.data[0].background;
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
    reducePeo() {
      if (this.peo.length > 1) {
        this.peo.pop();
      }
    },
    reducePo() {
      if (this.po.length > 1) {
        this.po.pop();
      }
    },
    getUserComittes() {
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;
        for (var comittee in this.comittees) {
          this.comNames.push(this.comittees[comittee].name);
          console.log();
        }
      });
    }
  },
  computed: {
    POS: function() {
      var x = [];
      for (var i = 1; i <= this.po.length; i++) {
        x.push("PO" + i);
      }
      return x;
    }
  },
  mounted() {
    this.getBackground();
    this.getComp();
    this.getUserComittes();
  }
};
</script>

<style></style>
