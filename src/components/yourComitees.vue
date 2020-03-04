<template>
  <span class=" mt-10">
    <template v-for="(comittee, index) in comittees">
      <v-flex v-bind:key="comittee.index">
        <v-card class="float-left ml-10   mr-10 mb-4" width="30%">
          <v-card-actions class="cyan darken-2 white--text">
            <v-flex>
              <v-layout>
                <v-text class="headline">Comittee {{ index + 1 }}</v-text>
                <v-spacer></v-spacer>
                <v-span @click="viewNotfy(index)">
                  <notification-bell
                    :count="no[index].length"
                    :upperLimit="9"
                    :prefixPlus="true"
                  />
                </v-span>
              </v-layout>
            </v-flex>
          </v-card-actions>
          <v-card-actions>
            <v-container>
              <p>Name: {{ comittee.name }}</p>
              <p>Your role:{{comittee.role}}</p>
              <!-- <p>gradreqs: {{ frameworks.program_name }}</p> -->
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <!-- <v-flex>
                <h1>Comittee Name: {{ comName }}</h1>
          </v-flex> -->
      <v-card>
        <v-card-title>
          <v-toolbar flat dark color="cyan darken-2">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Notifications</v-toolbar-title>
            <v-spacer></v-spacer>
            <p class="title  text--darken-3">
            {{ comName }}
          </p>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          
          <v-flex
            class="mx-5 my-3"
            v-for="(request, index) in notInfo"
            :key="request.index"
          >
            <v-card
              color="cyan lighten-4"
              @click="seeDetail(request.frameworkid, request.req_id, request.userRole)"
            >
              <v-card-title>{{ index + 1 }}</v-card-title>
              <v-card-actions>
                <p >
                  You have recieved an approval request from
                  <strong class="font-weight-bold">{{ request.senderName }}</strong> for  framework
                  <strong class="font-weight-bold">{{ request.frameworkname }}</strong>
                </p>
                <v-divider></v-divider>
                
              </v-card-actions>
              <p class="mx-5 title">Your Role:{{request.userRole }}</p>
               <v-container class="mx-5">
                  <p class="title">Comments:</p>
                  <v-flex v-for="comment in comments[index]" :key="comment" >
                    <p class="mx-3">{{comment.body}}</p>
                    <!-- <p class="mx-3">{{getAccountName(comment.accountsId)}}</p> -->
                  </v-flex>
               </v-container>
            </v-card>
            
          </v-flex>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- <v-btn @click="press()">click</v-btn> -->
  </span>
</template>

<script>
// import seeDetail from './seeDetail'
import NotificationBell from "vue-notification-bell";
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  components: {
    NotificationBell
    // seeDetail
  },
  data: () => {
    return {
      detail: false,
      dialog: false,
      comittees: [],
      no: [],
      comName: "",
      role:"",
      req: [],
      requests: [],
      yourComittee: [],
      //currInfo: [],
      notInfo: [
        {
          senderName: "",
          frameworkname: "",
          frameworkid: "",
          req_id: ""
        }
      ],
      comments:[],
      sent: []
    };
  },
  methods: {
    getUserComittes() {
      //  var my;
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;

        for (var i = 0; i < this.comittees.length; i++) {
          api.howManyNotify(this.comittees[i].id).then(response => {
            console.log(response.data.data);
            this.yourComittee.push(response.data.data);
            // this.num = response.data.data.length;
            // console.log(this.yourComittee + " ;Youcommitee");
            this.no.push(response.data.data);
            console.log(this.no.length + " :length");
          });
        }
        console.log(this.comittees);
        console.log(this.comittees.length);
      });
    },
    viewNotfy(index) {
      console.log("View Notification");
      this.dialog = !this.dialog;
      this.comName = this.comittees[index].name;
      this.role = this.comittees[index].role;
      this.req = this.no[index];
      console.log(this.comName);
      console.log(this.req.length);
      for (var i = 0; i < this.req.length; i++) {
        //this.notInfo.push({})
        var x = this.req[i].forCurriculumId;
        var y = this.req[i].id;
        console.log(this.req[i].id);
        api.getComiteeName(this.req[i].SenderComitteeId).then(response => {
          api.getStructure(x).then(data => {
            //this.notInfo[i].frameworkname = response.program_name;

            this.notInfo.push({
              userRole:this.role,
              senderName: response,
              frameworkname: data.program_name,
              frameworkid: data.id,
              req_id: y
            });
            console.log(this.notInfo);
          });
        });
      }

      for(var j=0 ; j < this.notInfo.length;j++){
        api.getCommentforCurr(this.notInfo[j].frameworkid).then(response => {
          this.comments.push(response);
        })
        // api.getAccountName(this.comments[j].accountsId).then(data => {
        //  console.log(data);
        //  })

      }
      // for(var q=0; q < this.notInfo.length;q++){
      //   for(var s=0;s < this.comments[q].length;s++){
      //     // console.log(this.comments[q]);
      //   }
      // } 
      // for(var q=0; q<this.comments[index].length;q++){
      //   api.getAccountName(this.comments[q].accountsId).then(data => {
      //    console.log(data);
         
      // })
      // }
      // console.log(this.comments)
      this.comments.shift();
      this.notInfo.shift();
      
    },

    seeDetail(id, req_id,role) {
      console.log(req_id);
      this.$router.push({
        name: "viewStructure",
        params: { id: ":" + id, request: ":" + req_id,role:":" + role }
      });
      console.log(id + "program Id");
      //  viewStructure(id) {
    },
    // getAccountName(id){
    //   //var response;
      
     
      
    // }
    
  },
  mounted() {
    this.getUserComittes();
  }
};
</script>

<style></style>
