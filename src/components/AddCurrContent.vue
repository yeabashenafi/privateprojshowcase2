<template>
  <span width="70%">
    <v-container text-md-center elevation-12>
      <v-form width="50%" ref="form">
        <v-card width="100%" ref="cardref">
          <v-card-title class="display-1">
            Add a Curriculum Structure
          </v-card-title>
          <v-card-actions class="ml-5">
            <v-flex raised>
              <v-stepper v-model="el">
                <v-stepper-header>
                  <v-stepper-step :complete="el > 1" step="1"
                    >Step 1</v-stepper-step
                  >
                  <v-stepper-step :complete="el > 2" step="2"
                    >Step 2</v-stepper-step
                  >
                  <v-stepper-step :complete="el > 3" step="3"
                    >Step 3</v-stepper-step
                  >
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
                            outlined
                            filled
                            rounded
                            label="Program Type"
                            class="mx-5"
                          ></v-select>
                          <v-spacer></v-spacer>
                          <v-text-field
                            solo
                            v-model="name"
                            label="Program Name"
                            class="mx-5"
                          ></v-text-field>
                        </v-layout>
                        <v-text class="headline"
                          >Choose which catagories you want to fill</v-text
                        >
                        <v-select
                          rounded
                          label="Choose Category"
                          :items="categories"
                          v-model="category"
                          multiple
                        ></v-select>
                        <v-textarea
                          label="Background"
                          v-model="background"
                          v-show="show_back"
                          outlined
                          height="10"
                          class="mb-3"
                        ></v-textarea>
                        <v-text-field
                          label="Grading Scale"
                          solo
                          v-model="gradingScale"
                          v-show="show_grades"
                        ></v-text-field>
                        <v-textarea
                          label="Rational"
                          v-model="rational"
                          solo
                          v-show="show_rational"
                          height="10"
                        ></v-textarea>

                        <v-layout>
                          <v-text-field
                            label="Medium of Instruction"
                            v-model="medium"
                            v-show="show_medium"
                          ></v-text-field>
                          <v-spacer></v-spacer>

                          <v-text-field
                            label="Course Coding"
                            v-model="coursecoding"
                            v-show="show_coursecode"
                          ></v-text-field>
                        </v-layout>
                        <v-text-field
                          placeholder="What will a student be called upon the completion of this program"
                          label="Nomenclature of the Program"
                          class="mr-10"
                          solo
                        ></v-text-field>
                        <v-text-area
                          label="Examination and Grading"
                          v-model="gradingMethods"
                          placeholder="Describe processes of examination and Grading"
                        ></v-text-area>
                        <v-text-area
                          label="Graduating Requirements"
                          v-model="gradReqs"
                          placeholder="Describe the requirements for "
                        ></v-text-area>
                      </v-container>
                      <v-btn @click="el = 2">Continue</v-btn>
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
                            <p outlined class="headline">
                              Program Outcome/s(PO)
                            </p>
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
                          </v-flex>
                          <v-flex>
                            <p class="headline">
                              Program Educational Outcome/s(PEO)
                            </p>
                            <template v-for="(PEO, index) in peo">
                              <v-flex v-bind:key="PEO.index">
                                <v-layout>
                                  <p class="title">PEO{{ index + 1 }}</p>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="reducePeo()"
                                    >mdi-minus</v-icon
                                  >
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
                          <v-flex>
                            <p class="headline">
                              Curriculum Learning Outcome/s
                            </p>
                            <template v-for="(CLO, index) in clo">
                              <v-flex v-bind:key="CLO.index">
                                <v-layout>
                                  <p class="title">CLO{{ index + 1 }}</p>
                                  <v-spacer></v-spacer>
                                  <v-icon @click="reduceClo()"
                                    >mdi-minus</v-icon
                                  >
                                  <v-icon @click="addCLO()">mdi-plus</v-icon>
                                </v-layout>
                                <v-text-field
                                  outlined
                                  label="Name of Educational Outcome"
                                  v-model="CLO.name"
                                ></v-text-field>
                                <v-text-field
                                  outlined
                                  label="Description"
                                  v-model="CLO.details"
                                ></v-text-field>
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
                      <v-btn @click="el = 3">Continue</v-btn>
                    </v-card>
                  </v-stepper-content>
                  <v-stepper-content step="3">
                    <v-card>
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
                              <v-layout>
                                <p>Course{{ index + 1 }}</p>
                                <v-spacer></v-spacer>
                                <v-icon @click="addcourses()">mdi-plus</v-icon>
                              </v-layout>

                              <v-layout>
                                <v-text-field
                                  label="Enter the name of the course"
                                  v-model="course.name"
                                ></v-text-field>
                                <v-layout>
                                  <v-icon @click="showcd">mdi-cogs</v-icon>
                                  <v-icon class="ml-5">mdi-check</v-icon>
                                  <v-dialog>
                                    <v-card></v-card>
                                  </v-dialog>
                                </v-layout>
                              </v-layout>
                              <v-flex class="ma-5">
                                <v-layout text-md-center>
                                  <v-btn
                                    color="success"
                                    @click="SaveChange()"
                                    text
                                  >
                                    Save change
                                  </v-btn>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="success"
                                    @click="addCurriculum()"
                                    text
                                    >Send for approval</v-btn
                                  >
                                </v-layout>
                              </v-flex>
                            </v-flex>
                          </template>
                        </v-flex>
                      </v-card-actions>
                      <CourseDetails v-if="show_courseD" :name="courses.name" />
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
      types: [
        "High School",
        "Bsc. Degree",
        "Ba. Degree",
        "Msc. (PG)",
        "PHD. (PG)",
        "Doctoral (PG)"
      ],
      categories: [
        "Background",
        "Grading Scale",
        "Rational",
        "Medium of Instruction",
        "Course Coding"
      ],
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
      courses: [
        {
          curriculumManagementId: "",
          name: ""
        }
      ],
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
    showcd() {
      this.show_courseD = !this.show_courseD;
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
    addCLO() {
      this.clo.push({});
    },
    addCurriculum() {
      this.ok = true;
      // this.setpoID();
      var user = this.$store.getters.User_id;
      var org = this.$store.getters.org_id;

      let data = {
        program_name: this.name,
        program_type: this.type,
        background: this.background,
        rational: this.rational,
        program_outcome: this.po,
        program_educational_outcome: this.peo,
        course_learning_outcome: this.clo,
        program_nomenclature: this.nomenclature,
        gradingmethods: this.gradingMethods,
        medium: this.medium,
        coursecoding: this.coursecoding,
        OwnersId: user,
        organizationalId: org,
        gradreqs: this.gradReqs
        //course: this.courses
      };
      console.log(data);

      api.addStructure(data).then(response => {
        console.log(response.data.id);

        for (var i = 0; i < this.courses.length; i++) {
          this.courses[i].curriculumManagementId = response.data.id;
          api.addCourse(this.courses[i]).then(response => {
            console.log("Courses added", response);
          });
        }
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
    }
  },
  mounted() {
    this.getBackground();
  }
};
</script>

<style></style>
