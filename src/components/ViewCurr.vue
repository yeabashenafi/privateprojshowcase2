<template>
  <span>
    <v-flex class="mt-5 ml-12">
      <template v-for="(frameworks, index) in currfr">
        <v-flex v-bind:key="frameworks.index" class="ml-12">
          <v-card class="float-left mr-10 ml-3" width="50%">
            <v-card-actions class="teal">
              <v-flex>
                <v-text class="headline">Framework{{ index + 1 }}</v-text>
                <p class="ml-2">{{ frameworks.ownerCommittee }}</p>
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-flex>
                <v-container>
                  <p class="title ">Name: {{ frameworks.program_name }}</p>
                  <p>Type: {{ frameworks.program_type }}</p>
                  <p>gradreqs: {{ frameworks.gradreqs }}</p>
                  <p>
                    Endorsement Percentage:{{ getCurrEndPerc(index) }}/{{
                      endPer
                    }}
                  </p>
                </v-container>
                <v-layout>
                  <v-btn
                    color="success white--text"
                    :disabled="!checkValidity(index)"
                    @click="
                      sendForApproval(
                        index,
                        frameworks.id,
                        frameworks.program_name,
                        frameworks.committeeId,
                        getCurrEndPerc(index)
                      )
                    "
                    >Endorse</v-btn
                  >
                  <v-progress-circular
                    ref="progress"
                    width="10"
                    :value="frameworks.endorsePercentage"
                    color="deep-orange lighten-2"
                    class="ml-5 "
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
                          @input="getParentComittes(frameworks.committeeId)"
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
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  components: {},
  data() {
    return {
      currfr: [
        {
          sent: false
        }
      ],
      show: false,
      num: 10,
      name: "",
      endPer: 0,
      endorsedValue: 0,
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
    sendForApproval(index, id, name, senderCommitteId, endPerc) {
      this.chosenframeid = id;
      this.senderCommitteeId = senderCommitteId;
      this.name = name;
      var value;
      api.getCommittelength(senderCommitteId).then(response => {
        value = response;
        var num = (1 / value) * 100 + endPerc;
        this.increasecurrEndorse(this.chosenframeid, num);
        this.getCurriculums();
        // var value;

        this.currfr[index].endorsedBy.push(this.$store.getters.User_id);
        api
          .addEndorsingUser(
            this.currfr[index].endorsedBy,
            this.currfr[index].id
          )
          .then(resp => {
            console.log(resp);
            this.$emit("Refresh");
          });
        //console.log(this.currfr[index].endorsedBy.find(this.$store.getters.User_id))
        api.getCurrPercById(this.chosenframeid).then(data => {
          let val = data;
          if (val >= this.endPer) {
            this.show = true;
            this.getUserComittes();
          }
        });
      });
    },
    Confirm() {
      // var childid;
      var parid;

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
    checkValidity(i) {
      //var x = "yes queen"
      var y = this.currfr[i].endorsedBy.find(
        x => x == this.$store.getters.User_id
      );
      if (y) {
        return false;
      } else {
        return true;
      }
    },
    getCurriculums() {
      api.getusersFrameworks(this.$store.getters.User_id).then(response => {
        this.currfr = response;
        console.log(this.currfr);
      });
    },
    getUserComittes() {
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;
        for (var i = 0; i < this.comittees.length; i++) {
          this.cnames.push(this.comittees[i].name);
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

    getParentComittes(value) {
      console.log("get parent Committee " + value);
      api.getparentcomitees(value).then(data => {
        this.pcomittees = data;
        console.log(this.pcomittees);
        for (var j = 0; j < this.pcomittees.length; j++) {
          this.pcomnames.push(this.pcomittees[j].name);
        }
      });
    },
    getPerctoEndorse() {
      api.getOrgEndorsementPerc(this.$store.getters.org_id).then(response => {
        this.endPer = response;
        console.log(this.endPer);
      });
    },
    increasecurrEndorse(curr, val) {
      console.log(val);
      api.perToEndorse(curr, val).then(resp => {
        this.endorsedValue = resp.data.endorsePercentage;
        console.log(this.endorsedValue);
      });
    },
    getCurrEndPerc(index) {
      return this.currfr[index].endorsePercentage;
    }
  },
  computed: {
    validator: function(yes) {
      if (yes == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getCurriculums();
    this.getPerctoEndorse();
  }
};
</script>

<style></style>
