<template>
  <span>
    <v-flex class="mt-5 ml-12">
      <template v-for="(frameworks, index) in currfr">
        <v-flex v-bind:key="frameworks.index" class="ml-12">
          <v-card class="float-left mr-10 ml-3" width="35%">
            <v-card-actions class="teal">
              <v-flex>
                <v-text class="headline">Framework{{ index + 1 }}</v-text>
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-flex>
                <v-container>
                  <p>Name: {{ frameworks.program_name }}</p>
                  <p>Type: {{ frameworks.program_type }}</p>
                  <p>gradreqs: {{ frameworks.gradreqs }}</p>
                </v-container>
                <v-layout>
                  <v-btn
                    color="success white--text"
                    @click="
                      sendForApproval(
                        frameworks.id,
                        frameworks.program_name,
                        frameworks.committeeId
                      )
                    "
                    >Endorse</v-btn
                  >
                  <v-progress-circular
                    ref="progress"
                    width="10"
                    value="10"
                    color="deep-orange lighten-2"
                    class="ml-10"
                  ></v-progress-circular>
                </v-layout>

                <!-- <v-btn color="red" disabled v-if="!sent(frameworks.id)">Sent for approval</v-btn> -->
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
                          v-model="name"
                          disabled
                        ></v-text-field>
                        <v-select
                          label="Choose sending comittee"
                          class="mx-12"
                          :items="cnames"
                          v-model="selc"
                        ></v-select>
                        <v-select
                          label="Choose Recieving comittee"
                          class="mx-12"
                          :items="pcomnames"
                          v-model="selp"
                        ></v-select>
                        <v-flex class="text-center">
                          <v-btn class="align-center" @click="Confirm()"
                            >Endorse</v-btn
                          >
                        </v-flex>
                      </v-flex>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-flex>
  </span>
</template>

<script>
// import confirmSubmission from "./confirmSubmission";
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  components: {
    // confirmSubmission
  },
  data() {
    return {
      currfr: [
        {
          sent: false
        }
      ],
      show: false,
      name: "",
      senderCommitteeId: "",
      comittees: [],
      pcomittees: [],
      chosenframeid: "",
      selc: "",
      selp: "",
      pcomnames: [],
      cnames: []
    };
  },
  methods: {
    sendForApproval(id, name, senderCommitteId) {
      this.chosenframeid = id;
      this.senderCommitteeId = senderCommitteId;
      this.name = name;
      this.show = true;
      this.getUserComittes();
      this.getParentComittes();

      console.log(this.$store.getters.org_id);
    },
    Confirm() {
      // var childid;
      var parid;

      this.$refs.progress.value += 10;

      // for (var i = 0; i < this.comittees.length; i++) {
      //   if (this.selc == this.comittees[i].name) {
      //     childid = this.comittees[i].id;
      //   }
      // }

      for (var j = 0; j < this.pcomittees.length; j++) {
        console.log(this.selp, " ", this.pcomittees[j].name);
        if (this.selp == this.pcomittees[j].name) {
          parid = this.pcomittees[j].id;
        }
      }
      let data = {
        timestamp: Date.now(),
        isPending: true,
        SenderComitteeId: this.senderCommitteeId,
        RecieverComiteeId: parid,
        forCurriculumId: this.chosenframeid
      };
      api.sendRequest(data).then(response => {
        console.log(response);
        this.show = !this.show;
      });
    },
    getCurriculums() {
      api.getusersFrameworks(this.$store.getters.User_id).then(response => {
        this.currfr = response[0];
        console.log(this.currfr);

        for (var i = 0; i < this.currfr.length; i++) {
          api.checkRequest(this.currfr[i].id).then(response => {
            if (response) {
              this.currfr[i].sent = true;
            } else {
              this.currfr[i].sent = false;
            }
          });
          // this.currfr[i].sent = this.checkRequest(this.currfr[i].id);
          // console.log(this.currfr[i].sent)
        }
        console.log(this.currfr);
      });
    },
    getUserComittes() {
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;
        console.log(this.comittees[0]);

        for (var i = 0; i < this.comittees.length; i++) {
          this.cnames.push(this.comittees[i].name);
          console.log(this.cnames);
        }
      });
    },
    checkRequest(id) {
      api.checkRequest(id).then(response => {
        if (response) {
          console.log("No request");
          return true;
        } else {
          console.log("has request");
          return false;
        }
      });
    },
    getParentComittes() {
      api.getparentcomitees(this.$store.getters.works_inDep).then(data => {
        this.pcomittees = data;
        for (var j = 0; j < this.pcomittees.length; j++) {
          this.pcomnames.push(this.pcomittees[j].name);
        }
      });
    }
  },
  computed: {
    // sent:function(id){
    //   console.log(this.checkRequest(id))
    //   return this.checkRequest(id)
    // }
  },
  mounted() {
    this.getCurriculums();
  }
};
</script>

<style></style>
