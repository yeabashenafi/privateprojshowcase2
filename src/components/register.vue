<template>
 <span >
  <v-card raised class="ml-3" >
          <v-card-title class="blue lighten-4 dark mb-3">
            <v-layout>
              <v-flex>
                <v-layout>
                  <h2 class="my-3 indigo--text text--lighten-2">
                    New User  Registration Form
                  </h2>
                  <v-spacer></v-spacer>
                </v-layout>

                <h4 class="ma-3 indigo--text text--lighten-2">
                  create profile
                </h4>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" class="px-3" v-model="valid">
              <v-text-field
                label=" Full Name"
                v-model="fullname"
                :rules="nameRule"
              ></v-text-field>
              <v-text-field
                label=" Username"
                v-model="Username"
                :rules="nameRule"
              ></v-text-field>
              <v-text-field
                label=" email"
                v-model="email"
                :rules="emailRule"
              ></v-text-field>
              <v-select
                label="Registered in Organization"
                v-model="organization"
                :items="names"
              ></v-select>
              <v-text-field
                label=" password"
                v-model="password"
                :rules="passwordRule"
              ></v-text-field>
              <v-select
              :items="items"
              label="Roles"
              v-model="role"
               ></v-select>
              <v-text-field
                label="nationality"
                v-model="Nationality"
                :rules="nationalRule"
              ></v-text-field>
              <p class="mx-3 pt-3 title">Gender</p>
              <v-radio-group
                v-model="gender"
                :mandatory="true"
                row
                class="mx-4"
              >
                <v-radio label="Male" value="Male"></v-radio>
                <v-radio label="Female" value="Female"></v-radio>
              </v-radio-group>
              <p class="mx-3 pt-3 title">Educational status</p>
              <v-radio-group
                v-model="Educational_status"
                :mandatory="true"
                row
                class="mx-4"
              >
                <v-radio label="Bsc" value="bachelor"></v-radio>
                <v-radio label="Msc" value="Masters"></v-radio>
                <v-radio label="PHD" value="phd"></v-radio>
              </v-radio-group>
              <!-- <div class="mb-3">
                      <v-file-input label="Upload Document" v-model="file"></v-file-input>
                  </div> -->
              <v-btn
                class="success lighten-1 text-center"
                @click="registered"
                :disabled="!valid"
              >
                Register
              </v-btn>
              <v-btn color="error" class="mx-5 px-5" @click="resetForm"
                >reset</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
         <v-dialog
          max-width="400px"
         v-model="ok">
              <v-card>
              <v-card-title>
                <h2>confirmed</h2>
              </v-card-title>
              <v-card-text>
                <h3> Successfully registered</h3>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="okbtn">ok</v-btn>
              </v-card-actions>
            </v-card>
         </v-dialog>
 </span> 
</template>
<script>
import {apiservice} from '../apiservice'
const api = new apiservice();
export default {
  data() {
    return {
      ok: false,
      email: "",
      fullname: "",
      orgs:[],
      Nationality: "",
      Educational_status: "",
      gender: "",
      password: "",
      lpassword:"",
      lemail:"",
      organization: "",
      items: ['Departement Head', 'College Dean', 'Teacher','Acadamic committe'],
      errmessage: "",
      Username: "",
      closeVar: false,
      nameRule: [
             v => !!v || 'Name is required',
             v => (v && v.length <= 15) || 'Name must be less than 15 characters',
                    ],
     emailRule: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                    ],
    passwordRule: [
          v => (v && v.length > 8) || 'password must be more than 8 characters'
            ],
    nationalRule: [
           v=> (v && v.length > 0) || 'You can not leave nationality field'
            ]

    }
  },
  methods: {
    okbtn(){
      this.ok = !this.ok;
    },
    registered() {
        if(this.$refs.form.validate()){
            this.snackbar = true;
        }
        this.ok = true;
   const data = {
            fullname: this.fullname,
            email: this.email,
            role: this.role,
            password: this.password,
            Educational_status: this.Educational_status,
            organization: this.organization,
            gender: this.gender,
            Nationality: this.Nationality,
            Username: this.Username
      };
      api.register(data);
    },
    resetForm(){
            this.$refs.form.reset();
        },
    getOrgs(){
      api.getOrganizations().then((response)=>{
       this.orgs = response.data 
       console.log(this.orgs)
    })
  },

  
  
  },
computed:{
    names: function(){
        var x= [];
        for(var i=0;i<this.orgs.length;i++){
          x.push(this.orgs[i].Name)
        }
        return x;
    }
},
mounted(){
  this.getOrgs()
}
}
</script>
