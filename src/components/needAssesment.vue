<template>
  <span>
    <v-container class="">
      <v-card>
        <v-card-title class="cyan darken-3 ">
          <v-flex
            xs12
            class="text-center white--text"
            :class="{
              'display-1': $vuetify.breakpoint.lgAndUp,
              headline: $vuetify.breakpoint.mdAndDown
            }"
          >
            <!-- text-center white--text -->
            Add related files for your Curriculum
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-container class="text-sm-center mx-sm-5 my-10">
            <v-layout class="">
              <v-flex md7 sm12 xs12 class=" ">
                <v-layout>
                  <v-select
                    class="my-10 mt-3 red--text"
                    :class="{ 'mx-0': $vuetify.breakpoint.smAndDown }"
                    :items="currNames"
                    v-model="chosenFr"
                    label="choose your framework"
                    placeholder="Your framework"
                  ></v-select>
                  <p class="red--text my-md-9">Required</p>
                </v-layout>
              </v-flex>
              <!-- <v-flex>
                <v-spacer></v-spacer>
              </v-flex> -->

              <!--  -->
            </v-layout>

            <v-layout wrap>
              <v-flex md8 sm6 xs12 class="mt-md-5">
                <v-textarea
                  class="mr-5 "
                  solo
                  :disabled="!isChosen"
                  clearable
                  :class="{ 'ml-5': $vuetify.breakpoint.mdAndUp }"
                  label="Survey/Questionairre"
                  v-model="survey"
                  placeholder="The feedback from interested parties"
                ></v-textarea>
              </v-flex>
              <v-flex md4 sm6 class="mt-md-5">
                <v-file-input
                  :disabled="!isChosen"
                  accept=".pdf"
                  v-model="surveyFile"
                  placeholder="Enter file for field"
                  prepend-icon="mdi-file"
                ></v-file-input>
              </v-flex>
              <v-flex md8 sm6 class="mt-sm-10">
                <v-textarea
                  :disabled="!isChosen"
                  placeholder="The feedback form graduate students"
                  solo
                  clearable
                  label="Alumni feedback"
                  v-model="alumni"
                  class="mr-5"
                  :class="{ 'ml-5': $vuetify.breakpoint.mdAndUp }"
                ></v-textarea>
              </v-flex>
              <v-flex md4 sm6 class="mt-sm-10">
                <v-file-input
                  :disabled="!isChosen"
                  placeholder="Enter file for field"
                  accept=".pdf"
                  v-model="alumniFile"
                  prepend-icon="mdi-file"
                ></v-file-input>
              </v-flex>
              <v-flex md8 sm6 class="mt-sm-10">
                <v-textarea
                  solo
                  clearable
                  :disabled="!isChosen"
                  placeholder="The feedback from currently enrolled students"
                  label="Student feedback"
                  v-model="student"
                  class="mr-5"
                  :class="{ 'ml-5': $vuetify.breakpoint.mdAndUp }"
                ></v-textarea>
              </v-flex>
              <v-flex md4 sm6 class="mt-sm-10">
                <v-file-input
                  :disabled="!isChosen"
                  placeholder="Enter file for field"
                  accept=".pdf"
                  v-model="studentFile"
                  prepend-icon="mdi-file"
                ></v-file-input>
              </v-flex>
              <v-flex md8 sm6 class="mt-sm-10">
                <v-textarea
                  :disabled="!isChosen"
                  solo
                  placeholder="The risk that the specific curriculum faces"
                  label="Risk analysis"
                  clearable
                  v-model="risk"
                  class="mr-5"
                  :class="{ 'ml-5': $vuetify.breakpoint.mdAndUp }"
                ></v-textarea>
              </v-flex>
              <v-flex md4 sm6 class="mt-sm-10">
                <v-file-input
                  :disabled="!isChosen"
                  v-model="riskFile"
                  placeholder="Enter file for field"
                  accept=".pdf"
                  prepend-icon="mdi-file"
                ></v-file-input>
              </v-flex>
            </v-layout>
            <v-layout> </v-layout>
            <v-layout> </v-layout>
            <v-layout> </v-layout>
          </v-container>
        </v-card-actions>
        <v-flex class="text-center ">
          <v-btn color="success" @click="submit" class="my-3">Submit</v-btn>
          <v-btn
            @click="GetFiles()"
            color="Blue"
            :disabled="!canGet()"
            class="mx-5"
            >Get Files</v-btn
          >
        </v-flex>
      </v-card>
    </v-container>
  </span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => {
    return {
      currfr: [],
      currNames: [],
      survey: "",
      surveyFile: [],
      alumniFile: [],
      studentFile: [],
      riskFile: [],
      chosenFr: "",
      alumni: "",
      student: "",
      NeedAssesment: ""
    };
  },
  methods: {
    canGet() {
      if (this.chosenFr == "") {
        return false;
      } else {
        return true;
      }
    },
    submit() {
      var currId;
      for (var curr in this.currfr) {
        if (this.chosenFr == this.currfr[curr].program_name) {
          currId = this.currfr[curr].id;
        }
      }
      let data = {
        alumni: this.alumni,
        alumniFileName: this.alumniFile.name,
        risk: this.risk,
        riskFIleName: this.riskFile.name,
        student: this.student,
        studentFileName: this.studentFile.name,
        survey: this.survey,
        surveyFileName: this.surveyFile.name,
        forcurriculumId: currId
      };
      if (this.riskFile != []) {
        api.addAttachements(this.riskFile);
      }
      if (this.surveyFile != []) {
        api.addAttachements(this.surveyFile);
      }
      if (this.alumniFile != []) {
        api.addAttachements(this.alumniFile);
      }
      if (this.studentFile != []) {
        api.addAttachements(this.studentFile);
      }

      api.addNeedAssesment(data).then(() => {
        this.alumni = "";
        this.risk = "";
        this.student = "";
        this.survey = "";
      });
      console.log(data);
    },
    GetFiles() {
      var currId;
      for (var curr in this.currfr) {
        if (this.chosenFr == this.currfr[curr].program_name) {
          currId = this.currfr[curr].id;
        }
      }
      console.log(currId);
      api.getFiles(currId).then(data => {
        console.log(data);
        api.getfile(data[0].studentFileName).then(() => {
          // console.log(response);
        });
      });
    },
    getFrameworks() {
      api.getusersFrameworks(this.$store.getters.User_id).then(data => {
        this.currfr = data;
        for (var curr in this.currfr) {
          this.currNames.push(this.currfr[curr].program_name);
        }
        console.log(this.currNames);
      });
    }
  },
  mounted() {
    this.getFrameworks();
  },
  computed: {
    isChosen: function() {
      if (this.chosenFr == "") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style></style>
