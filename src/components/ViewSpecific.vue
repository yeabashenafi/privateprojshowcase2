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
          <v-container>
            <v-divider></v-divider>
            <p>Comments</p>

            <v-flex v-for="(comment, index) in comments" :key="comment">
              <v-card>
                <p>Comment {{ index + 1 }}:{{ comment.body }}</p>
                <p>Written by {{ userName[index] }}</p>
                <br />
              </v-card>
            </v-flex>
          </v-container>
          <h3 class="text-center display-1 font-weight-black">
            course Details
          </h3>
          <template v-for="c in course">
            <v-flex :key="c.name">
              <!-- <h3 class="font-weight-black pl-5"> course Name</h3> -->
              <!-- <p>{{ c.name }}</p> -->
              <!-- <p class="font-weight-black pl-5"> course ID : {{ c.id }}</p> -->
              <v-layout>
                <p class="font-weight-black headline pl-5">Course title :</p>
                <p class="headline">{{ c.name }}</p>
              </v-layout>
              <!-- <v-layout>
               <p>Course Code: </p>
               <p>{{ c.code }}</p>
             </v-layout>
             <v-layout>
               <p>contact Hour</p>
               <p>{{ c.contactHour}}</p>
             </v-layout>
             <p>{{c.name}}</p> -->
              <!-- <p class="font-weight-black pl-5">Class Year :{{ c.classYear  }}</p>
             <p>Semister: {{ c.semister }} </p>
             <p>Pre-requesties: {{c.pre_requisites }}</p>
             <p>Description : {{ c.description }}</p>
             <v-template v-for="(out,index) in c.outlines" :key="out.index">
               <v-flex>
                  <h3>Course Outlines : {{index}}</h3>
                  <p>{{ out }}</p>
               </v-flex>
             </v-template> -->
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
            </v-flex>
          </v-card-text>
        </v-card>
      </v-card-actions>
      <v-layout>
        <v-text class="py-4">Progress of Endorsment:</v-text>
        <v-text-field class="mx-2" v-model="percent">
          <!-- <template v-slot:progress>
            <v-progress-linear
              :value="progress"
              :color="color"
              absolute
              height="7"
            ></v-progress-linear>
          </template> -->
        </v-text-field>
        <!-- <v-progress-linear class="py-3"></v-progress-linear> -->
      </v-layout>
      <hr />
      <v-layout class="mx-12 mb-12 pb-12 mt-6">
        <v-btn
          color="success white--text"
          align-self-left
          @click="checkConfirmation()"
          :disabled="!commentedOn"
        >
          Endorse</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn @click="generatePdf()">Generate Pdf</v-btn>
        <v-btn
          color="error white--text"
          @click="Reject()"
          :disabled="!commentedOn"
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
            Confirm Endorsement Request
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
// const PDFDocument = require('pdfkit');
// const doc = new PDFDocument();
import { apiservice } from "../apiservice";
const api = new apiservice();
//const PDFDocument = require('pdfkit');

export default {
  data: () => {
    return {
      custom: true,
      value: "",
      numerator: 0,
      denominator: 0,
      percent: "",
      structure: {},
      visible: false,
      show: false,
      userName: [],
      comment: [],
      comments: [],
      pcomittees: [],
      pcomnames: [],
      general: "",
      gComment: "",
      receipant: "",
      topic: "",
      selp: ""
    };
  },
  methods: {
    // downloadPdf(){
    //     doc.pipe(createWriteStream('file.pdf'));
    //     doc.end();
    // },
    checkConfirmation() {},
    generatePdf() {
      var id = this.$route.params.id;
      id = id.substr(1);
      console.log(typeof id);
      api.generatePDF(id).then(response => {
        console.log(response);
      });
    },
    //   const fs = require('fs');
    //   const doc = new PDFDocument;

    //   doc.pipe(fs.createWriteStream('Curriculum.pdf'));
    //   doc.font('fonts/PalatinoBold.ttf')
    //      .fontSize(25)
    //      .text('Some text with an embedded font!', 100, 100);
    //   doc.end();
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
        api.getCourse(id).then(response => {
          this.course = response.data;
          console.log("courses");
          console.log(this.course);
        });
      }
    },
    // getCoursedata(){
    //    var user_id = this.$route.params.id;
    //     var id = user_id.substr(1);
    //    api.getCourse(id).then(response => {
    //       console.log(response.data);
    //     });
    // },
    // show(text){
    //   this.visible = true;
    //   this.topic = text;
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
        api
          .createComment(reqid, this.$store.getters.User_id, this.gComment)
          .then(response => {
            console.log(response);
          });
        console.log(data);
        this.show = false;
      });
    },
    getComments() {
      var user_id = this.$route.params.id;
      var id = user_id.substr(1);
      api.getCommentforCurr(id).then(response => {
        this.comments = response;
        console.log("follow");
        for (var i = 0; i < this.comments.length; i++) {
          api.getUserName(this.comments[i].accountsId).then(response => {
            console.log(response);
            this.userName.push(response);
          });
        }
      });
    },
    Reject() {
      var req_id = this.$route.params.request;
      req_id = req_id.substr(1);
      api.reject(req_id).then(() => {
        api
          .createComment(req_id, this.$store.getters.User_id, this.gComment)
          .then(response => {
            console.log(response);
            this.$router.go(-1);
          });
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
    /// Working completion persentage !!
    get_progress() {
      // var tokenR = this.$store.getters.token;
      var reqid = this.$route.params.request;
      reqid = reqid.substr(1);
      api.getRequestData(reqid).then(response => {
        console.log("this From getProcess arry");
         this.reqData = response.data;
        console.log(this.reqData);

         this.numerator = response.data.persentage;
         console.log( 'Persentage : ' + this.numerator);
         let comId = response.data.RecieverComiteeId;
         console.log("This is from committee id");
         console.log(comId);
          api.getCommitteeById(comId).then( res => {
               console.log(res);
               console.log("From getCommitteeById llllllll");
              //  console.log(res.data.members);
               this.memLength = res.data.members.length;
               console.log(this.memLength);
       
          });
      //              api.getparentcomitees(comId).then(response => {
      //             this.pcomittees = response;
      //             for (var j = 0; j < this.pcomittees.length; j++) {
      //               this.pcomnames.push(this.pcomittees[j].name);
      //   }
      // });
          var orgid = this.$store.getters.org_id;
           api.getOrganization(orgid).then(response => {
          console.log(response.percentage_for_endorsment);
             this.denominator = response.percentage_for_endorsment;
             this.percent = this.numerator + "/" + this.denominator + "%";
            });
      });
    },
    // get the request 
    getRequest(){
      var reqid = this.$route.params.request;
        reqid = reqid.substr(1);
      console.log("this is from getRequest request Id" + reqid);
      api.getRequestData(reqid).then(response => {
        console.log("from get requestData result ");
        console.log(response);
      })
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
    // progress() {
    //   // return Math.min(100, this.value.length * 10);
     
    // },
     persent() {
        // return this.numerator;
        return this.numerator + "/" + this.denominator + "%";
      },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  },
  mounted(){
    this.getRequest();
    this.getStructure();
    //this.parentCommittes();
    this.get_progress();
    this.getComments();
  }
};
</script>

<style></style>
