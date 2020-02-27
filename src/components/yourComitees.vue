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
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <p class="title ">
            Programs which requested for Approval---- (Waits for approval )
          </p>
          <p class="title cyan--text text--darken-3">
            Comittee Name : {{ comName }}
          </p>

          <v-flex
            class="mx-5"
            v-for="(request, index) in notInfo"
            :key="request.index"
          >
            <v-card
              color="cyan lighten-2"
              @click="seeDetail(request.frameworkid, request.req_id)"
            >
              <v-card-title>{{ index + 1 }}</v-card-title>
              <v-card-actions>
                <p class="font-weight-bold">
                  You have recieved an approval request from
                  <strong>{{ request.senderName }}</strong> for the framework
                  <strong>{{ request.frameworkname }}</strong>
                </p>
              </v-card-actions>
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
              senderName: response,
              frameworkname: data.program_name,
              frameworkid: data.id,
              req_id: y
            });
            console.log(this.notInfo);
          });
        });
      }

      this.notInfo.shift();
    },

    seeDetail(id, req_id) {
      console.log(req_id);
      this.$router.push({
        name: "viewStructure",
        params: { id: ":" + id, request: ":" + req_id }
      });
      console.log(id + "program Id");
      //  viewStructure(id) {
    }
  },
  mounted() {
    this.getUserComittes();
  }
};
</script>

<style></style>
