<template>
  <span class=" mt-10">
    <v-container grid-list-md>
      <v-layout wrap>
        <template v-for="(comittee, index) in comittees">
          <v-flex sm4 md5 lg3 xs10 class="mx-7" v-bind:key="comittee.index">
            <v-card class="my-4">
              <v-card-actions class="cyan darken-3 white--text">
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
                  <p>Your role:{{ comittee.role }}</p>
                  <!-- <p>gradreqs: {{ frameworks.program_name }}</p> -->
                </v-container>
              </v-card-actions>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-container>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card>
        <v-card-title>
          <v-toolbar flat dark color="cyan darken-2">
            <v-btn icon dark big @click="dialog = false">
              <v-icon color="">mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title class="hidden-xs-only"
              >Notifications</v-toolbar-title
            >
            <v-toolbar-title>
              <v-icon class="hidden-sm-and-up">mdi-comment</v-icon>
            </v-toolbar-title>

            <!-- <v-spacer></v-spacer> -->
            <v-flex class="text-right mt-4">
              <p class="title text--darken-3">
                {{ comName }}
              </p>
            </v-flex>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-flex
            class="mx-5 my-3"
            v-for="(request, index) in notInfo"
            :key="request.index"
          >
            <v-card Raised color="grey lighten-4">
              <v-card-title>
                <p>{{ index + 1 }}</p>
                <v-spacer></v-spacer>
                <v-btn
                  @click="
                    seeDetail(
                      request.frameworkid,
                      request.req_id,
                      request.userRole
                    )
                  "
                  >See more</v-btn
                >
              </v-card-title>
              <v-card-actions>
                <p>
                  You have recieved an approval request from
                  <strong class="font-weight-bold">{{
                    request.senderName
                  }}</strong>
                  for framework
                  <strong class="font-weight-bold">{{
                    request.frameworkname
                  }}</strong>
                </p>
                <v-divider></v-divider>
              </v-card-actions>
              <p class="mx-5 title">Your Role:{{ request.userRole }}</p>

              <v-container fluid grid-list-sm>
                <v-layout wrap>
                  <v-flex md6>
                    <v-expansion-panels class="" elevation="20" xs3>
                      <v-expansion-panel class="mr-md-5">
                        <v-expansion-panel-header>
                          <p class="title">Comments:</p>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-card class="mr-10" flat>
                            <v-flex
                              v-for="comment in comments[index]"
                              :key="comment"
                            >
                              <p class="">{{ comment.body }}</p>
                              <!-- <p class="mx-3">{{getAccountName(comment.accountsId)}}</p> -->
                            </v-flex>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-flex>
                  <v-flex md6>
                    <v-expansion-panels class=" grey lighten-4" elevation="20">
                      <v-expansion-panel class="">
                        <v-expansion-panel-header>
                          <p class="title">Activity Files:</p>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-card width="100%" class=" " flat>
                            <v-card-title> </v-card-title>
                            <v-flex>
                              <v-layout class="my-5">
                                <v-flex xs6>
                                  <p class="" v-if="request.alumni">
                                    <strong>Alumni </strong>{{ request.alumni }}
                                  </p>
                                </v-flex>

                                <v-flex
                                  class="text-right"
                                  v-if="request.alumniFileName"
                                  max-height="5"
                                  xs6
                                >
                                  <v-btn
                                    @click="Download(request.alumniFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.alumniFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <v-flex xs6>
                                  <p class="" v-if="request.risk">
                                    <strong>Risk Assesment </strong
                                    >{{ request.risk }}
                                  </p>
                                </v-flex>

                                <v-flex
                                  class="text-right"
                                  v-if="request.riskFileName"
                                  max-height="5"
                                  xs6
                                >
                                  <v-btn
                                    @click="Download(request.alumniFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.alumniFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <v-flex xs6>
                                  <p class="" v-if="request.student">
                                    <strong>Student Opinion </strong
                                    >{{ request.student }}
                                  </p>
                                </v-flex>

                                <v-spacer></v-spacer>
                                <v-flex
                                  class="text-right"
                                  v-if="request.studentFileName"
                                  max-height="5"
                                >
                                  <v-btn
                                    @click="Download(request.studentFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.studentFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <v-flex xs6>
                                  <p class="" v-if="request.survey">
                                    <strong>Survey </strong>{{ request.survey }}
                                  </p>
                                </v-flex>

                                <v-flex
                                  class="text-right"
                                  v-if="request.surveyFileName"
                                  max-height="5"
                                  xs6
                                >
                                  <v-btn
                                    @click="Download(request.surveyFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.surveyFileName }}</p>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-flex>
                </v-layout>
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
// import notifications from "../notifications/notifications.vue";
import NotificationBell from "vue-notification-bell";
import { apiservice } from "../../apiservice";
const api = new apiservice();
export default {
  components: {
    NotificationBell
    // notifications
    // seeDetail
  },
  data: () => {
    return {
      detail: false,
      dialog: false,
      comittees: [],
      no: [],
      comName: "",
      role: "",

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
      comments: [],
      sent: [],
      users: [
        {
          committeeId: "",
          members: []
        }
      ]
    };
  },
  methods: {
    getUserComittes() {
      //  var my;
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;

        for (var i = 0; i < this.comittees.length; i++) {
          api.howManyNotify(this.comittees[i].id).then(response => {
            this.yourComittee.push(response.data.data);
            // this.num = response.data.data.length;

            this.no.push(response.data.data);
          });
        }
      });
    },
    Download(fileName) {
      console.log("I can download", fileName);
      api.getfile(fileName).then(() => {});
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
        var comID = this.req[i].RecieverComiteeId;
        var x = this.req[i].forCurriculumId;
        var y = this.req[i].id;
        console.log(this.req[i].id);
        api.getComiteeName(this.req[i].SenderComitteeId).then(response => {
          api.getStructure(x).then(data => {
            console.log(data.data.id);
            //this.notInfo[i].frameworkname = response.program_name;
            api.getFiles(x).then(files => {
              console.log(files[0].alumni);
              
              this.notInfo.push({
                userRole: this.role,
                senderName: response,
                comID: comID,
                alumni: files[0].alumni,
                alumniFileName: files[0].alumniFileName,
                risk: files[0].risk,
                riskFIleName: files[0].riskFIleName,
                student: files[0].student,
                studentFileName: files[0].studentFileName,
                survey: files[0].survey,
                surveyFileName: files[0].surveyFileName,
                frameworkname: data.data.program_name,
                frameworkid: data.data.id,
                req_id: y
              });
            });

            console.log(this.notInfo, x);
          });
        });
      }

      for (var j = 0; j < this.notInfo.length; j++) {
        api.getCommentforCurr(this.notInfo[j].frameworkid).then(response => {
          this.comments.push(response);
        });
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
    //  getRelatedFiles(){
    //    for()
    //  },
    seeDetail(id, req_id, role) {
      console.log(req_id);
      this.$router.push({
        name: "viewStructure",
        params: { id: ":" + id, request: ":" + req_id, role: ":" + role }
      });

      console.log(id + "program Id");
      //  viewStructure(id) {
    },
    // getAccountName(id){
    //   //var response;

    getCommitteeMembers() {
      // for(var com in this.comittees){
      //   console.log(this.comittees[com].members)
      // }
      console.log(this.comittees);
    }

    // }
  },

  mounted() {
    this.getUserComittes();
    this.getCommitteeMembers();
  }
};
</script>

<style></style>
