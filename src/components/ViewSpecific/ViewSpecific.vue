<template>
  <v-container grid-list-md fluid>
    <v-layout >
      <v-flex xs12 class="hidden-sm-and-up">
        <!-- <curriculum-status></curriculum-status> -->
      </v-flex>
      <v-flex sm8 xs12>
        <v-expansion-panels>
          <v-expansion-panel>
            
              <curriculum-details :userid="userid"></curriculum-details>
            
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-flex>
      <v-flex sm4 class="hidden-xs-only">
          <curriculum-status></curriculum-status>
      </v-flex>
    </v-layout>
    
  </v-container >
</template>
  <!-- <span> -->
    <!-- <v-card class="my-8">
      

      

          

         
        = <v-card width="50%" class="mt-12 pt-8">
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
        <v-text class="py-4 ml-7">Progress of Endorsment:</v-text>
        <v-progress-circular
          ref="progress"
          width="10"
          :value="progress"
          color="deep-orange lighten-2"
          class="ml-5 mt-3"
        ></v-progress-circular>
        <v-flex width="40%" class="ml-5">
          <p>{{ progress }} / 100%</p>
        </v-flex>
         <v-progress-linear class="py-3"></v-progress-linear> -->
      <!-- </v-layout> -->
      <!-- <v-container v-if="role == 'Head'">
        <v-card class=" mx-10">
          <v-card-title class="white darken">
            <v-flex class="text-center headline">
              Your Committee activities
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-flex class="mx-5">
              <p>Endoresd By:</p>
              <p class="my-5">Rejected By:</p>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-container>
      <v-container v-if="role == 'Secretary' && showMinute">
        <v-card class="mx-10 my-5">
          <v-card-title>
            <v-flex class="text-center headline">
              <p class="my-5">Record meeting minute</p>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-container class="mx-10">
              <v-textarea
                label="Enter the minute of the meeting"
                placheholder="The minute of the meeting"
                v-model="minute"
              >
              </v-textarea>
            </v-container>
          </v-card-actions>
          <v-container class="text-center">
            <v-btn
              color="Success"
              @click="submitMinute"
              class="elevation-14 mb-6"
              >Submit</v-btn
            >
          </v-container>
        </v-card>
      </v-container> -->
      <!-- <hr /> -->
      <!-- <v-layout class="mx-12 mb-12 pb-12 mt-6 "> -->
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-flex class="text-center">
          <v-btn
            class="elevation-14"
            color="success white--text"
            align-self-left
            small
            elevation-14
            @click="checkConfirmation()"
          >
            Endorse</v-btn
          >
           <v-spacer></v-spacer> -->
          <!-- <v-btn
            @click="generatePdf()"
            class="mx-5 xs-1 elevation-14"
            dark
            color="primary lighten-2"
            small
            >Generate Pdf</v-btn
          >
          <v-btn
            color="error white--text"
            class="elevation-14"
            @click="Reject()"
            small
            :disabled="!commentedOn"
            >Reject Curriculum</v-btn
          > -->
        <!-- </v-flex>  -->
      <!-- </v-layout> -->
    <!-- </v-card> -->
    <!-- <v-dialog v-model="visible" width="50%">
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
    </v-dialog> -->
    <!-- <v-dialog v-model="show">
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
              v-show="!ParentCom"
              :items="pcomnames"
              v-model="selp"
            ></v-select>
            <v-flex class="text-center">
              <v-btn
                class="align-center"
                v-show="!ParentCom"
                xs6
                @click="Endorse()"
                >Send for Endorsment</v-btn
              >
              <v-btn xs6 v-show="ParentCom" @click="accept()"
                >Accept Curriculum</v-btn
              >
            </v-flex>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>  -->
   <!-- </span>   -->


<script>
// const PDFDocument = require('pdfkit');
// const doc = new PDFDocument();

import { apiservice } from "../../apiservice";
const api = new apiservice();
import CurriculumDetails from './CurriculumDetails.vue';
import CurriculumStatus from './CurriculumStatus.vue';

export default {
  components:{
    CurriculumDetails,
    CurriculumStatus,
    
  },
  // props:{
  //   userid:{
  //     type:String
  //   }
  // },
  data: () => {
    return {
      userid:'',
      currComm: "",
      currCommNames: [],
      status: [],
      currentcommId: "",
      showMinute: true,
      custom: true,
      value: "",
      numerator: 0,
      denominator: 0,
      percent: "",
      progress: 0,
      structure: {},
      visible: false,
      show: false,
      userName: [],
      comment: [],
      course: [],
      reqData: {},
      comments: [],
      ParentCom: false,
      pcomittees: [],
      pcomnames: [],
      minute: "",
      general: "",
      gComment: "",
      receipant: "",
      topic: "",
      selp: ""
    };
  },
  methods: {
    accept() {
      var perc;
      var increment = Math.floor((1 / this.memLength) * 100);
      var reqid = this.$route.params.request.substr(1);
      api.accept(reqid).then(response => {
        console.log(response);
        api.getRequestPercentage(this.reqData.id).then(resp => {
          perc = resp;
          if (perc + increment <= 100) {
            perc += increment;
            console.log(perc);
            this.incrPercent(perc);

            this.reqData.endorsedBy.push(this.$store.getters.User_id);
            //  console.log(this.reqData.endorsedBy)
            //  patch the percentage
            api.addEndUser(this.reqData.id, this.reqData.endorsedBy);
            api.patchRequestPersentage(reqid, perc).then(response => {
              console.log(response);
            });
            console.log(this.numerator);
            console.log(this.increment);

            this.show = true;
          }
        });
      });
    },
    checkStatus(user) {
      // var reply = ''
      api.getUserIdByName(user).then(data => {
        api
          .checkEndorse(this.$route.params.request.substr(1), data)
          .then(resp => {
            //reply = resp;

            return resp;
          });
      });
    },
    submitMinute() {
      api
        .getCommitteeId(this.$route.params.request.substr(1))
        .then(response => {
          let data = {
            Details: this.minute,
            forcurriculumId: this.$route.params.id.substr(1),
            writtenById: this.$store.getters.User_id,
            committeeId: response
          };
          api.addMinute(data).then(() => {
            this.showMinute = !this.showMinute;
          });
        });
    },
    checkConfirmation() {
      console.log("hello");
      // var reqid = this.$route.params.request;
      // reqid = reqid.substr(1);

      // var increment = Math.floor((1 / this.memLength) * 100);
      // var perc;
      this.show = true;
      this.ParentCom = true;
      console.log(this.pcomnames);

      // api.getRequestPercentage(this.reqData.id).then(resp => {
      //   perc = resp;
      //   if (perc + increment <= 100) {
      //     perc += increment;
      //     console.log(perc);
      //     this.incrPercent(perc);

      //     this.reqData.endorsedBy.push(this.$store.getters.User_id);
      //     //  console.log(this.reqData.endorsedBy)
      //     //  patch the percentage
      //     api.addEndUser(this.reqData.id, this.reqData.endorsedBy);
      //     api.patchRequestPersentage(reqid, perc).then(response => {
      //       console.log(response);
      //     });
      //     console.log(this.numerator);
      //     console.log(this.increment);

      //     this.show = true;
      //   }
      // });
    },
    incrPercent(per) {
      this.percent = per + "% /" + this.denominator + "%";
    },
    

    getStructure() {
      {
        //var token = this.$store.getters.token;
        var user_id = this.$route.params.id;
        //var params = this.$route.params;
        this.role = this.$route.params.role.substr(1);
        // console.log(params);
        var id = user_id.substr(1);
        api.getStructure(id).then(response => {
          this.structure = response;
          // console.log(this.structure);
        });
        api.getCourse(id).then(response => {
          console.log(response);
          this.course = response.data;
        });
      }
    },

    Endorse() {
      var parid;
      var increment = Math.floor((1 / this.memLength) * 100);
      var perc;
      var reqid = this.$route.params.request;

      for (var j = 0; j < this.pcomittees.length; j++) {
        if (this.selp == this.pcomittees[j].name) {
          parid = this.pcomittees[j].id;
        }
      }
      console.log(parid);
      reqid = reqid.substr(1);
      api.Endorse(reqid, parid).then(data => {
        // api
        //   .createComment(reqid, this.$store.getters.User_id, this.gComment)
        //   .then(response => {
        //     console.log(response);
        //   });
        api.getRequestPercentage(this.reqData.id).then(resp => {
          perc = resp;
          if (perc + increment <= 100) {
            perc += increment;
            console.log(perc);
            this.incrPercent(perc);

            this.reqData.endorsedBy.push(this.$store.getters.User_id);
            //  console.log(this.reqData.endorsedBy)
            //  patch the percentage
            api.addEndUser(this.reqData.id, this.reqData.endorsedBy);
            api.patchRequestPersentage(reqid, perc).then(response => {
              console.log(response);
            });
            console.log(this.numerator);
            console.log(this.increment);

            this.show = true;
          }
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
        // console.log("follow");
        for (var i = 0; i < this.comments.length; i++) {
          api.getUserName(this.comments[i].accountsId).then(response => {
            // console.log(response);
            this.userName.push(response);
          });
        }
      });
    },
    Reject() {
      var req_id = this.$route.params.request;
      req_id = req_id.substr(1);
      this.reqData.rejectedBy.push(this.$store.getters.User_id);
      api.addRejUser(this.reqData.id, this.reqData.rejectedBy);
      api
        .createComment(req_id, this.$store.getters.User_id, this.gComment)
        .then(this.$router.go(-1));
    },
    parentCommittes() {},
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
      var reqid = this.$route.params.request;
      reqid = reqid.substr(1);
      var orgid = this.$store.getters.org_id;
      api.getRequestData(reqid).then(response => {
        console.log(response);

        this.numerator = response.data.persentage;
        let comId = response.data.RecieverComiteeId;
        this.currentcommId = response.data.RecieverComiteeId;
        api.getCommitteeById(comId).then(res => {
          console.log(res);
          this.memLength = res.data.members.length;
          //  console.log(this.memLength);
        });
        api.getparentcomitees(this.currentcommId).then(response => {
          this.pcomittees = response;
          for (var j = 0; j < this.pcomittees.length; j++) {
            this.pcomnames.push(this.pcomittees[j].name);
          }
        });
        api.getOrganization(orgid).then(response => {
          this.denominator = response.percentage_for_endorsment;
          this.incrPercent(this.numerator);
        });
      });
    },
    //get Members of the recieving committee
    getMembers() {
      api.getCommitteeById(this.currentcommId).then(response => {
        for (var r in response) {
          if (response[r].id == this.currentcommId) {
            this.currComm = response[r].members;
          }
        }
        for (var c in this.currComm) {
          api.getUsername(this.currComm[c].id).then(data => {
            api.getUserIdByName(data).then(resp => {
              api
                .checkEndorse(this.$route.params.request.substr(1), resp)
                .then(Data => {
                  this.status.push(Data.status), this.currCommNames.push(data);
                });
            });
          });
        }
        this.memLength = this.currComm.length;
      });
    },
    // get the request
    getRequest() {
      var reqid = this.$route.params.request;
      reqid = reqid.substr(1);
      // console.log("this is from getRequest request Id" + reqid);
      api.getRequestData(reqid).then(response => {
        this.reqData = response.data;
        api.getRequestPercentage(response.data.id).then(resp => {
          this.progress = resp;
          console.log(this.progress);
        });
        // console.log(this.reqData);
      });
    }
  },
  computed: {
    commentedOn: function() {
      var x = false;
      if (this.gComment == "" || this.numerator > 100) {
        return x;
      } else {
        return !x;
      }
    },

    persent: function() {
      // return this.numerator;
      return this.numerator + "/" + this.denominator + "%";
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  },
  mounted() {
    this.userid = this.$route.params.id.substr(1);
    this.get_progress();
    this.getRequest();

    this.getStructure();
    console.log(this.$route.params.role);
    //this.parentCommittes();
    this.get_progress();

    this.getComments();
    this.getMembers();
  }
};
</script>

<style></style>
