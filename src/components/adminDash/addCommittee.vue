<template>
  <v-container>
    
      
        <v-card raised>
          <v-card-title class="cyan darken-3">
            <v-flex class="text-center">
              <p class="white--text font-weight-bold">
                Add Commitee
              </p>
            </v-flex>
          </v-card-title>
          
          <v-card-text>
            <v-form ref="form">
              <v-layout wrap>
                <v-flex sm6 md4>
                  <v-text-field
                    label="Commitee Name"
                    class="px-sm-8"
                    :rules="nameRules"
                    v-model="name"
                    solo
                  >
                  </v-text-field>
                </v-flex>
                <v-flex sm6 md4>
                    <v-select
                      label="Add users to commitee"
                      :items="username"
                      :hint="orgRule.description"
                      multiple
                      chips
                      solo
                      @blur="createUserRoles"
                      persistent-hint
                      class="px-sm-6"
                      v-model="users"
                    ></v-select>
                </v-flex>
                <v-flex xs6 md4>
                  <v-btn class="mx-lg-8" text color="grey" @click="addRole">
                      Add Roles to Members
                  </v-btn>
                </v-flex>
                <v-flex sm6 md4>
                  <v-select
                    label="Select Offices"
                    :items="officename"
                    class="px-sm-6"
                    v-model="office"
                    solo
                  ></v-select>
                </v-flex>
                <v-flex sm6 md5>
                  <v-select
                  label="Select Committee level"
                  v-model="position"
                  :items="level"
                  class="px-sm-6"
                  solo>
                  </v-select>
                </v-flex>
              </v-layout>
              
              
              
              
              
              
            </v-form>
          </v-card-text>
          <v-flex class="text-center px-9">
            
              <v-btn
                @click="addCommitee()"
                class="mx-5 cyan darken-3 white--text"
                rounded
                :disabled="!isValid"
              >
                
                Add
              </v-btn>
            
            <v-dialog v-model="dialog">
                  <v-card>
                    <v-card-title
                      >You have succesfully added a comittee</v-card-title
                    >
                    <v-card-actions>
                      <v-flex class="text-center">
                        <v-btn color="green lighten-3" @click="Confirm()">Ok</v-btn>
                      </v-flex>
                    </v-card-actions>
                  </v-card>
                  have succesfully added a commitee
            </v-dialog>
            <v-dialog v-model="showrole" width="50%">
              <v-card>
                <v-layout>
                  <v-card-text>Members</v-card-text>
                  <v-card-text>Roles</v-card-text>
                </v-layout>
                <template v-for="(user, index) in users">
                  <v-flex v-bind:key="user">
                    <v-layout>
                      <v-card-text>{{ user }}</v-card-text>
                      <v-radio-group row v-model="roles[index]">
                        <v-radio value="Head" label="Head"></v-radio>
                        <v-radio value="Secretary" label="Secretary"></v-radio>
                        <v-radio
                          value="Normal member"
                          label="Normal member"
                        ></v-radio>
                      </v-radio-group>
                    </v-layout>
                    <v-divider></v-divider>
                  </v-flex>
                </template>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-card>
      
    
  </v-container>
</template>
<script>
import { apiservice } from "../../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      showrole: false,
      position: 0,
      name: "",
      level: [1, 2, 3, 4, 5],
      dialog: false,
      orgRule: {
        description: "",
        max: 10,
        min: 1,
        parity: "odd"
      },
      users: [],
      roles: [""],
      members: [
        {
          id: "",
          isActive: true,
          role: ""
        }
      ],
      nameRules: [v => !!v || "Name can't be empty"],

      Roleradio: [],
      officedata: [],
      officename: [],
      userInfo: [],
      username: [],
      getuserid: "",
      getofficeid: ""
    };
  },
  methods: {
    createUserRoles() {
      console.log(this.roles.length);
    },
    addCommitee() {
      for (var i = 0; i < this.officedata.length; i++) {
        if (this.office == this.officedata[i].officeType) {
          this.getofficeid = this.officedata[i].id;
          break;
        }
      }
      for (var j = 0; j < this.userInfo.length; j++) {
        for (var k = 0; k < this.users.length; k++) {
          if (this.users[k] == this.userInfo[j].fullname) {
            this.members.push({
              id: this.userInfo[j].id,
              isActive: true,
              role: this.roles[k]
            });
          }
        }
      }
      this.members.shift();
      let data = {
        name: this.name,
        IsPartofId: this.$store.getters.org_id,
        members: this.members,
        level: this.position,
        offId: this.getofficeid
      };
      console.log(data);
      api.addCommittee(data).then(response => {
        console.log(response);
      });
      this.dialog = true;
      // console.log('user id '+ this.getuserid + ' office id ' + this.getofficeid);
    },
    addRole() {
      this.showrole = !this.showrole;

      for (var i = 0; i < this.users.length; i++) {
        this.roles.push("");
      }
      this.roles.shift();
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
    getOrgRules() {
      api.getorgRules(this.$store.getters.org_id).then(response => {
        this.orgRule.max = response.max;
        this.orgRule.min = response.min;
        this.orgRule.parity = response.parity;
        this.orgRule.description =
          "Members must be greater than or equal to " +
          this.orgRule.min +
          " and less than " +
          this.orgRule.max;
        console.log(this.orgRule);
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
    },
    Confirm() {
      this.dialog = false;
      this.name = "";
      this.office = "";
      this.users = [];
      this.members = [
        {
          id: "",
          isActive: true
        }
      ];
    }
  },
  computed: {
    isValid: function() {
      var x = false;
      //var y= true;
      if (
        this.name == "" ||
        this.users.length < this.orgRule.min ||
        this.users.length > this.orgRule.max
      ) {
        return x;
      }
      // elseif((this.users.length >= ) && (this.users.length <= this.orgRule.max)){
      //    return x;
      //  };
      else {
        return !x;
      }
    }
  },
  mounted() {
    this.getOfficeData();
    this.getAllUsers();
    this.getOrgRules();
  }
};
</script>
