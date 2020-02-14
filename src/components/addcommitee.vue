<template>
  <v-container>
    <v-flex>
      <v-layout column align-center>
        <v-card width="80%" height="100%" class="mt-8">
          <v-flex>
            <v-title>
              <p class="title cyan darken-3 text-md-center white--text pa-7">
                Add Commitee
              </p>
            </v-title>
          </v-flex>
          <v-card-text>
            <v-form ref="form">
              <v-text-field label="Commitee Name" class="px-12" v-model="name">
              </v-text-field>
              <v-select
                label="Add users to commitee"
                :items="username"
                multiple
                class="px-12"
                v-model="users"
              ></v-select>
              <v-select
                label="Select Offices"
                :items="officename"
                class="px-12"
                v-model="office"
              ></v-select>
            </v-form>
          </v-card-text>
          <v-flex class="text-center pa-9">
            <div class="mx-5">
              <v-btn
                @click="addCommitee()"
                class="mx-5 cyan darken-3 white--text"
                rounded
              >
                Add
              </v-btn>
            </div>
            <!-- </v-card-actions> -->
          </v-flex>
        </v-card>
      </v-layout>
    </v-flex>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      name: "",
      users: [],
      members: [
        {
          id: "",
          isActive: true
        }
      ],
      officedata: [],
      officename: [],
      userInfo: [],
      username: [],
      getuserid: "",
      getofficeid: ""
    };
  },
  methods: {
    addCommitee() {
      for (var i = 0; i < this.officedata.length; i++) {
        if (this.office == this.officedata[i].officeType) {
          this.getofficeid = this.officedata[i].id;
          break;
        }
      }
      for (i = 0; i < this.userInfo.length; i++) {
        if (this.users[i] == this.userInfo[i].fullname) {
          this.members.push({
            id: this.userInfo[i].id,
            isActive: true
          });
        }
      }
      this.members.shift();
      let data = {
        name: this.name,
        IsPartofId: this.$store.getters.org_id,
        members: this.members,
        offId: this.getofficeid
      };
      console.log(data);
      api.addCommittee(data).then(response => {
        console.log(response);
      });
      // console.log('user id '+ this.getuserid + ' office id ' + this.getofficeid);
    },
    getAllUsers() {
      api.getUserInformotion().then(response => {
        this.userInfo = response.data;
        console.log(this.userInfo);
        for (var i = 0; i < this.userInfo.length; i++) {
          this.username.push(this.userInfo[i].fullname);
        }
      });
    },
    getOfficeData() {
      let id = this.$store.getters.org_id;
      api.getAcademicOffices(id).then(response => {
        console.log(response);
        this.officedata = response;
        for (var i = 0; i < this.officedata.length; i++) {
          if (this.officedata[i].officeType != undefined) {
            this.officename.push(this.officedata[i].officeType);
          }
        }
        console.log(this.officename);
      });
    }
  },
  mounted() {
    this.getOfficeData();
    this.getAllUsers();
  }
};
</script>
