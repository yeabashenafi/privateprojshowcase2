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
            <v-form ref="form" >
              <v-text-field 
              label="Commitee Name" 
              class="px-12" 
              :rules="nameRules"
              v-model="name">
              </v-text-field>
              <v-select
                label="Add users to commitee"
                :items="username"
                :hint="orgRule.description"
                multiple
                chips
                persistent-hint
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
                :disabled="!isValid"
              >
                <v-dialog v-model="dialog">
                  <v-card>
                    <v-card-title
                      >You have succesfully added a comittee</v-card-title
                    >
                    <v-card-actions>
                      <v-flex class="text-center">
                        <v-btn color="green lighten-3" @click="Confirm()"
                          >ok</v-btn
                        >
                      </v-flex>
                    </v-card-actions>
                  </v-card>
                  have succesfully added a commitee
                </v-dialog>
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
      
      dialog: false,
      orgRule:{
        description:"",
        max:10,
        min:1,
        parity:"odd"
      },
      users: [],
      members: [
        {
          id: "",
          isActive: true
        }
      ],
      nameRules:[
        v => !!v || "Name can't be empty"
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
      for (var j = 0; j < this.userInfo.length; j++) {
        for (var k = 0; k < this.users.length; k++) {
          if (this.users[k] == this.userInfo[j].fullname) {
            this.members.push({
              id: this.userInfo[j].id,
              isActive: true
            });
          }
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
      this.dialog = true;
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
    getOrgRules(){
        api.getorgRules(this.$store.getters.org_id).then(response =>{
          
      this.orgRule.max = response.max;
      this.orgRule.min = response.min;
      this.orgRule.parity = response.parity;
      this.orgRule.description = "Members must be greater than or equal to "+this.orgRule.min+
      " and less than "+this.orgRule.max;
          console.log(this.orgRule);
        })
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
   computed:{
     isValid: function(){
       var x= false;
       //var y= true;
       if(this.name == ""  || this.users.length < this.orgRule.min 
       || this.users.length > this.orgRule.max  ){
         return x;
       }
      // elseif((this.users.length >= ) && (this.users.length <= this.orgRule.max)){
      //    return x;
      //  };
       else{
         return !x;
       }
       
         
       
     },
   },
  mounted() {
    this.getOfficeData();
    this.getAllUsers();
    this.getOrgRules();
  }
};
</script>
