<template>
  <span>
    <v-card class="ml-md-3">
        <v-card-title class="headline cyan darken-1 font-weight-bold">Status</v-card-title>
        <v-flex 
            class=" cyan darken-1"
            v-for="(member, index) in currCommNames"
            :key="member"
          >
            <v-layout>
              <p class="font-weight-bold title ml-md-10 text-capitalize">{{ member }}:</p>
              <p
                class="mx-3"
                color="green"
                small
                outlined
                disabled
                v-if="status[index] == 'endorsed'"
              >
                Endorsed
              </p>
              <v-btn
                color="error"
                class="mx-3"
                small 
                outlined
                disabled
                v-if="status[index] == 'Rejected'"
              >
                Rejected
              </v-btn>
              <v-btn
                class=" mx-3 "
                small
                outlined
                disabled
                v-if="status[index] == 'No Action'"
              >
                No action
              </v-btn>
              <v-flex>
                
              </v-flex>
              
            </v-layout>
            <v-layout wrap>
              <v-flex md6>
                <v-text class=" mt-1 font-weight-bold headline">Progress of Endorsment:</v-text>
              </v-flex>
              <v-flex md6>
                <v-layout>
                  <v-progress-circular
                    ref="progress"
                    width="10"
                    :value="progress"
                    color="deep-orange lighten-2"
                    class=""
                  ></v-progress-circular>
                  <v-flex  class="">
                    <p class="">{{ progress }} / 100%</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              
            </v-layout>
          </v-flex>
          <v-flex class="text-center">
            <p class="headline font-weight-bold">Comments</p>
          </v-flex>
          
          <v-divider></v-divider>
          <v-flex
            v-for="(comment, index) in comments"
            elevation="14"
            :key="comment"
          >
            <v-card  class="mx-md-5" color="#F9F9F9" >
              <p class="mx-md-2">
                <strong>{{ userName[index] }}</strong>
              </p>
              <p class="mx-md-2">{{ comment.body }}</p>
              
              <br />
            </v-card>
          </v-flex>
           <v-flex>
              <v-textarea
                label="Write your Comment here"
                outlined
                solo
                v-model="gComment"
              ></v-textarea>
            </v-flex>
            
            <v-container v-if="$route.params.role.slice(1) == 'Head'">
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
            <v-container v-if="$route.params.role.slice(1) == 'Secretary' && showMinute">
              <v-card class="" flat>
                <v-card-title>
                  <v-flex class="text-center headline">
                    <p class="">Record meeting minute</p>
                  </v-flex>
                </v-card-title>
                
                  
                    <v-textarea
                      label="Enter the minute of the meeting"
                      placheholder="The minute of the meeting"
                      v-model="minute"
                      solo
                      outlined
                    >
                    </v-textarea>
                  
                
                <v-container class="text-center">
                  <v-btn
                    color="Success"
                    @click="submitMinute"
                    class="elevation-14 mb-6"
                    >Submit</v-btn
                  >
                </v-container>
              </v-card>
            </v-container>
    </v-card>
  </span>
</template>

<script>
import {apiservice } from "../../apiservice.js";
const api = new apiservice();
export default {
data:() => {
return{
    status: [],
    currCommNames: [],
    userName: [],
    currentcommId: "",
    percent: "",
    currComm: "",
    comments: [],
    numerator: 0,
    denominator: 0,
    showMinute: true,
    progress: 0,
    gComment: "",
    role:''
}
},
methods:{
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
    },
    //get Members of the recieving committee
    getMembers() {
        console.log(this.currentcommId);
      api.getCommitteeById(this.currentcommId).then(response => {
        for (var r in response) {
          if (response[r].id == this.currentcommId) {
            this.currComm = response[r].members;
          }
        }
        console.log(this.currComm);
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
      console.log(this.currCommNames);
    },
    incrPercent(per) {
      this.percent = per + "% /" + this.denominator + "%";
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
        console.log(this.currentcommId);
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
},
mounted(){
  // this.role = this.$route.params.role(1);
  
    this.get_progress();
    this.getRequest();
    
    this.getMembers();
    this.getComments();
}
}
</script>

<style>

</style>