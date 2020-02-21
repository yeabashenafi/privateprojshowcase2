<template>
  <span>
    <v-card class="my-8">
      <v-card-title>
        <p class="display-4">{{ structure.program_name }}</p>
      </v-card-title>

      <v-card-actions>
        <v-flex>
          <v-layout class="ml-10">
            <p class="headline">Type:</p>
            <p class="headline">{{ structure.program_type }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Type')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Backgorund:</p>
            <p class="headline">{{ structure.background }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Backgorund')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Rational:</p>
            <p class="headline">{{ structure.rational }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Rational')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout>
            <p class="headline ml-10">Program Educational Outcome</p>
            <v-btn
              class="ml-5 blue lighten-5"
              @click="show('Program Educational Outcome')"
              text
              >comment</v-btn
            >
          </v-layout>
          <template
            v-for="(Edoutcome, index) in structure.program_educational_outcome"
          >
            <v-flex v-bind:key="Edoutcome.index">
              <p class="title pl-12">
                Program Educational Outcome{{ index + 1 }}:
              </p>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">name:</p>
                <p class="font-weight-medium pl-3">{{ Edoutcome.name }}</p>
              </v-layout>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">details:</p>
                <p class="font-weight-medium pl-3">{{ Edoutcome.details }}</p>
              </v-layout>
            </v-flex>
          </template>
          <v-layout>
            <p class="headline ml-10">Course Learning Outcome</p>
            <v-btn
              class="ml-5 blue lighten-5"
              @click="show('Course Learning Outcome')"
              text
              >comment</v-btn
            >
          </v-layout>
          <template
            v-for="(CLoutcome, index) in structure.course_learning_outcome"
          >
            <v-flex v-bind:key="CLoutcome.index">
              <p class="title pl-12">Course Learning Outcome{{ index + 1 }}:</p>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">name:</p>
                <p class="font-weight-medium pl-3">{{ CLoutcome.name }}</p>
              </v-layout>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">details:</p>
                <p class="font-weight-medium pl-3">{{ CLoutcome.details }}</p>
              </v-layout>
            </v-flex>
          </template>
        </v-flex>
        <v-card width="50%" class="mt-12 pt-8">
          <v-card-text>
            <v-flex>
              <v-textarea
                label="Write General Comment here"
                outlined
                v-model="gComment"
              ></v-textarea>
              <v-btn
                color="success white--text ml-12"
                align-self-left
                @click="submitGeneralComment()"
              >
                Submit comments</v-btn
              >
            </v-flex>
          </v-card-text>
        </v-card>
      </v-card-actions>
      <v-layout>
        <v-text class="py-4">Progress of Endorsment:</v-text>
        <v-text-field class="mx-2" v-model="percent">
          <template v-slot:progress>
            <v-progress-linear
              :value="progress"
              :color="color"
              absolute
              height="7"
            ></v-progress-linear>
          </template>
        </v-text-field>
        <!-- <v-progress-linear class="py-3"></v-progress-linear> -->
      </v-layout>
      <hr />
      <v-layout class="mx-12 mb-12 pb-12 mt-6">
        <v-btn
          color="success white--text"
          align-self-left
          @click="show = !show"
          :disabled="!commentedOn"
        >
          Endorse</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="error white--text" :disabled="!commentedOn"
          >Reject Curriculum</v-btn
        >
      </v-layout>
    </v-card>
    <v-dialog v-model="visible" width="50%">
      <v-card>
        <v-card-title>
          Write your comment
        </v-card-title>
        <v-card-text>
          <v-textarea label="your comment" v-model="receipant"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="send()">send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="show">
      <v-card>
        <v-card-title class="teal">
          <v-flex>
            Confirm Sending Curriculum for approval
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-flex>
            <v-text class="mx-12">Curriculum framework name</v-text>

            <v-text-field
              class="mx-12"
              v-model="structure.program_name"
              disabled
            ></v-text-field>
            <v-select
              label="Choose Recieving comittee"
              class="mx-12"
              :items="pcomnames"
              v-model="selp"
            ></v-select>
            <v-flex class="text-center">
              <v-btn class="align-center" @click="Endorse()"
                >Send for Endorsment</v-btn
              >
            </v-flex>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => {
    return {
      custom: true,
      value: "",
      numerator: "",
      denominator: "",
      percent: "",
      structure: {},
      visible: false,
      show: false,
      comment: [],
      pcomittees: [],
      pcomnames: [],
      general: "",
      gComment: "",
      topic: "",
      selp: ""
    };
  },
  methods: {
    // send() {
    //   this.visible = false;

    //   this.comment.push( this.topic + " : " + this.receipant);
    //   console.log(this.comment);
    //   this.receipant = ''
    // },
    getStructure() {
      {
        //var token = this.$store.getters.token;
        var user_id = this.$route.params.id;
        var params = this.$route.params;
        console.log(params);
        var id = user_id.substr(1);
        api.getStructure(id).then(response => {
          this.structure = response;
          console.log(this.structure);
        });
      }
    },
  // getCommite(){

  //   // api.getCommitteeById().then(response => {

  //   // })
  // }
    Endorse() {
      var parid;
      var reqid = this.$route.params.request;
      for (var j = 0; j < this.pcomittees.length; j++) {
        if (this.selp == this.pcomittees[j].name) {
          parid = this.pcomittees[j].id;
        }
      }
      reqid = reqid.substr(1);
      console.log(this.gComment);
      api.Endorse(reqid, parid).then(data => {
        //  let info ={
        //    req_id:reqid,
        //    user_id:this.$store.getters.User_id,
        //    body:this.gComment
        //  }
        api
          .createComment(reqid, this.$store.getters.User_id, this.gComment)
          .then(response => {
            console.log(response);
          });
        console.log(data);
        this.show = false;
      });
    },
    parentCommittes() {
      api.getparentcomitees(this.$store.getters.works_inDep).then(response => {
        this.pcomittees = response;
        for (var j = 0; j < this.pcomittees.length; j++) {
          this.pcomnames.push(this.pcomittees[j].name);
        }
      });
    },
    submitGeneralComment() {
      var user_id = this.$route.params.id;
      var id = user_id.substr(1);
      let data = {
        genComment: this.general,
        currId: id,
        userId: this.$store.getters.User_id
      };
      console.log(data);
    },
    get_progress() {
      var tokenR = this.$store.getters.token;
      api.getRequest(tokenR).then(response => {
        console.log(response.data[0].percentage);
        this.numerator = response.data[0].percentage;
        var orgid = this.$store.getters.org_id;
        api.getOrganization(orgid).then(response => {
          console.log(response.percentage_for_endorsment);
          this.denominator = response.percentage_for_endorsment;
          this.percent = this.numerator + "/" + this.denominator + "%";
        });
      });
    }
  },
  computed: {
    commentedOn: function() {
      var x = false;
      if (this.gComment == "") {
        return x;
      } else {
        return !x;
      }
    },
    progress() {
      return Math.min(100, this.value.length * 10);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  },
  mounted() {
    this.getStructure();
    this.parentCommittes();
    this.get_progress();
  }
};
</script>

<style></style>
