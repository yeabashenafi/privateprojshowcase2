<template>
  <v-flex>
    <v-dialog v-model="show_courseD" width="600px">
      <v-card color="white" class="pa-6 text-center">
        <v-text>Course Name: {{ name }}</v-text>
        <v-text-field
          label="Course Title"
          v-model="course_title"
        ></v-text-field>
        <v-text-field label="Course Code" v-model="course_code"></v-text-field>
        <v-text-field label="Contact Hour" v-model="course_hour"></v-text-field>
        <v-select
          :items="item"
          label="Acadamic Year"
          v-model="academic_year"
        ></v-select>
        <v-text-field label="Semister" v-model="semister"></v-text-field>
        <v-text-field
          label="Pre-requisite"
          v-model="pre_requisite"
        ></v-text-field>
        <v-flex row>
          <v-text-field
            label="Add Course Learning Outcome (CLO)"
            disabled
            class="mx-3"
          ></v-text-field>
          <a @click="show_clo_dialog"
            ><v-icon right class="py-6">mdi-plus</v-icon></a
          >
        </v-flex>
        <v-flex row>
          <v-text-field
            label="Add Course Out-Line"
            disabled="true"
            class="mx-3"
          ></v-text-field>
          <a @click="show_outline = !show_outline"
            ><v-icon right class="py-6">mdi-plus</v-icon></a
          >
        </v-flex>
        <v-text-field label="References" v-model="reference"></v-text-field>
        <v-flex row>
          <v-text-field
            label="Add Learning Methods"
            disabled="true"
            class="mx-3"
          ></v-text-field>
          <a @click="show_method = !show_method"
            ><v-icon right class="py-6">mdi-plus</v-icon></a
          >
        </v-flex>
        <v-text-field
          label="Course Policies"
          v-model="course_policies"
        ></v-text-field>
        <v-text-field
          label="Grading Scale"
          v-model="grade_scale"
        ></v-text-field>
        <v-flex row>
          <v-text-field
            label="Add Learning Tools"
            disabled="true"
            class="mx-3"
          ></v-text-field>
          <a @click="show_tools = !show_tools"
            ><v-icon right class="py-6">mdi-plus</v-icon></a
          >
        </v-flex>
        <v-flex row class="ma-1">
          <v-text-field placeholder="Assessment" disabled></v-text-field>
          <v-icon @click="show_assess = !show_assess">mdi-plus</v-icon>
        </v-flex>
        <v-flex color="red">
          <v-dialog v-model="show_outline" width="600px">
            <v-card color="white" class="pa-6">
              <template v-for="(outline, index) in course_outlines">
                <v-flex v-bind:key="outline.index">
                  <v-layout row>
                    <v-text class="py-11" v-model="chap_name"
                      >Chapter-{{ index + 1 }} :</v-text
                    >
                    <v-text-field
                      placeholder="Chapter-Name"
                      class="ma-6"
                      width="1px"
                      v-model="course_outlines[index].chap_name"
                    ></v-text-field>
                    <a @click="change_chapter"
                      ><v-icon right class="py-12">mdi-plus</v-icon></a
                    >
                  </v-layout>
                  <v-flex>
                    <v-text-field
                      label="Details"
                      v-model="outline.detail"
                    ></v-text-field>
                  </v-flex>
                </v-flex>
              </template>
              <v-flex class="text-center">
                <v-btn color="primary" @click="finish_outline">Done</v-btn>
              </v-flex>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex>
          <v-dialog v-model="show_method" width="600px">
            <v-card color="white" class="pa-6">
              <v-textarea
                placeholder="Enter the Methods(Steps) here."
                v-model="learning_methods.learn_method"
              ></v-textarea>
              <v-flex class="text-center">
                <v-btn color="primary" @click="finish_method">Done</v-btn>
              </v-flex>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex class="text-center">
          <v-btn color="primary" @click="finish_courseD">
            Done
          </v-btn>
        </v-flex>
        <v-flex>
          <v-dialog v-model="show_tools" width="600px">
            <v-card color="white" class="pa-6">
              <v-textarea
                placeholder="Enter the tools needed here."
                v-model="tool"
              ></v-textarea>
              <v-flex class="text-center">
                <v-btn color="primary" @click="finish_courseT">Done</v-btn>
              </v-flex>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex>
          <v-dialog v-model="show_assess" width="600px">
            <v-card>
              <v-flex class="text-center" row>
                <v-btn color="primary" @click="add_assess">Add</v-btn>
              </v-flex>
              <template v-for="(assess, index) in assessment">
                <v-card v-bind:key="assess.index">
                  <v-layout>
                    <v-text-field
                      placeholder="Method"
                      v-model="assessment[index].method"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-text-field
                      placeholder="Weight"
                      v-model="assessment[index].weight"
                    ></v-text-field>
                  </v-layout>
                </v-card>
              </template>
              <v-flex class="text-center" flat>
                <v-btn color="primary" @click="finish_assessment">Done</v-btn>
              </v-flex>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-dialog v-model="show_clo">
          <v-card color="white">
            <v-flex text-center>
              <p class="headline">
                Curriculum Learning Outcome/s
              </p>
            </v-flex>
            <template v-for="(CLO, index) in clo">
              <v-flex v-bind:key="CLO.index">
                <v-layout>
                  <p class="title">CLO{{ index + 1 }}</p>
                  <v-spacer></v-spacer>
                  <v-icon @click="reduceClo()">mdi-minus</v-icon>
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
            <v-flex text-center
              ><v-btn color="primary" @click="shut_dialog">Done</v-btn></v-flex
            >
          </v-card>
        </v-dialog>
      </v-card>
    </v-dialog>
  </v-flex>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      show_clo: false,
      show_assess: false,
      show_tools: false,
      show_method: false,
      show_courseD: false,
      show_outline: false,
      item: [1, 2, 3, 4, 5],
      course_title: "",
      course_code: "",
      course_hour: "",
      academic_year: "",
      semister: "",
      pre_requisite: "",
      course_outlines: [
        {
          chap_name: "",
          detail: ""
        }
      ],
      clo: [
        {
          name: "",
          details: "",
          mappedPEO: []
        }
      ],
      peo: [
        {
          name: "",
          details: "",
          mappedPO: []
        }
      ],
      chap_name: "",
      reference: "",
      learning_methods: [
        {
          learn_method: ""
        }
      ],
      assessment: [
        {
          method: "",
          weight: ""
        }
      ],
      course_policies: "",
      grade_scale: "",
      tool: ""
    };
  },
  props: {
    name: String
  },
  methods: {
    finish_courseD() {
      let data = [
        {
          title: this.course_title,
          code: this.course_code,
          contactHour: this.course_hour,
          classYear: this.academic_year,
          semister: this.semister,
          pre_requisites: this.pre_requisite,
          assessment: this.assessment,
          coursePolicies: this.course_policies,
          gradingScale: this.grade_scale,
          outlines: this.course_outlines,
          learningMethod: this.learning_methods,
          tools: this.tool
        }
      ];
      console.log(data);
      var token = this.$store.getters.token;
      api.addCourse(token, data).then(response => {
        console.log(response);
      });
      this.show_courseD = !this.show_courseD;
      window.alert("Successfully Added");
      // this.$root.$emit("finishcd");
    },
    show_clo_dialog() {
      console.log("Welcome");
      this.show_clo = !this.show_clo;
    },
    shut_dialog() {
      this.show_clo = !this.show_clo;
    },
    reduceClo() {
      if (this.clo.length > 1) {
        this.clo.pop();
      }
    },
    addCLO() {
      this.clo.push({});
    },
    finish_assessment() {
      // let data = {
      //   assessment: this.assessment
      // };
      // console.log(data);
      // var sum = 0;
      // var to = this.assessment[0].weight;
      // for (var x = 0; to.length; x++) {
      //   sum = sum + to;
      // }
      // console.log(sum);
      this.show_assess = !this.show_assess;
    },

    add_assess() {
      this.assessment.push({});
    },
    change_chapter() {
      this.course_outlines.push({});
      this.course_outlines.chap_name = "";
    },
    finish_outline() {
      this.show_outline = !this.show_outline;
      this.num = 0;
    },
    finish_method() {
      this.show_method = !this.show_method;
      this.learning_methods.learn_method = "";
    },
    finish_courseT() {
      this.show_tools = !this.show_tools;
    },
    show() {
      console.log(name);
      this.show_courseD = true;
      //console.log(this.show_courseD)
    }
  },
  computed: {
    PEOS: function() {
      var y = [];
      for (var j = 1; j <= this.peo.length; j++) {
        y.push("PEO" + j);
      }
      return y;
    }
  },
  mounted() {
    this.show();
  }
};
</script>
<style></style>
