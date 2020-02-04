<template>

  <v-layout row>
    
    <v-flex class="col pa-4 ma-5 align-center">
      <v-card class="mt-5 mx-auto py-5" width="700px" height="501">
        <v-card-title class="pa-3">
          <v-container>
            <h3 class="my-3 indigo--text text--lighten-2 text-center display-3">Log in</h3>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
<<<<<<< HEAD
            <v-text-field label="Username" v-model="Username"> </v-text-field>
            <v-text-field label="Password" required type='password' v-model="password">
=======
            <v-text-field label="E-mail" v-model="email"> </v-text-field>
            <v-text-field label="Password" required v-model="password">
>>>>>>> d9813cd20f1d571f09af7dc9e7bdbe26f7d40798
            </v-text-field>
            <p class="red--text">{{ errmessage }}</p>
            <v-btn flat class="success text-md-center" @click="logIn">Login</v-btn>
          </v-form>
          <p class="float-right mt-5 p-3 orange--text ">
            if you haven't registered yet ,register here ?
            <v-btn color="green" @click="closeVar = !closevar">Sign Up</v-btn>
          </p>
        </v-card-text>
      </v-card>
      <v-dialog max-width="600px" v-model="closeVar">
        <!-- <v-alert color="teal--text lighten-4">

  </v-alert> -->
        <v-card>
          <v-card-title class="blue lighten-4 dark mb-3">
            <v-layout>
              <v-flex>
                <v-layout>
                  <h2 class="my-3 indigo--text text--lighten-2">
                    Registration Form
                  </h2>
                  <v-spacer></v-spacer>
                  <v-icon
                    class="float-right"
                    color="red"
                    @click="closeVar = !closeVar"
                    >mdi-close</v-icon
                  >
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
              <v-text-field
                label=" Organization"
                v-model="organization"
                :rules="namerule"
              ></v-text-field>
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
      </v-dialog>
      
    </v-flex>
  </v-layout>
</template>

<script>
//import register from './register.vue';
// import axios from 'axios';
import { apiservice } from "../apiservice";
const api = new apiservice();
//const url= 'http://localhost:3000/api';
export default {
  data() {
    return {
      ok: false,
      email: "",
      fullname: "",
      Nationality: "",
      Educational_status: "",
      gender: "",
      password: "",
      organization: "",
      items: ['Departement Head', 'College Dean', 'Teacher','Acadamic commitie'],
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
    };
  },
  components: {
    //      register
  },
  methods: {
    logIn() {
      if (this.Username == "" || this.password == "") {
        this.errmessage = "you must fill the form";
        return;
      }
      else{
        let data = {
          email :this.Username,
          password :this.password,
        }
        api.login(data).then( (data) =>{
            console.log(data)
        })

      }
    //
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
      this.email = '';
      this.password = '';
    },
    resetForm(){
            this.$refs.form.reset();
        },
        okbtn(){
        //  this.ok = false;
          this.closeVar = false;
        }
  }
  //  if(this.email !='' && this.password !=''){
  //      this.errmessage = ''
  //  }
};
</script>
