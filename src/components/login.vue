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
            <v-text-field label="E-mail" v-model="lemail"> </v-text-field>
            <v-text-field label="Password" required v-model="lpassword"></v-text-field>
            <v-select  :items="orgName"
                        label="Organization Name"
                        v-model="orgname2"
                        ></v-select>
            <v-select :items="userType"
                      v-model="usertypemodel"
                      label="User Type"></v-select>
            <p class="red--text">{{ errmessage }}</p>
            <v-btn flat class="success text-md-center" @click="logIn">Login</v-btn>
          </v-form>
          <!-- <p class="float-right mt-5 p-3 orange--text ">
            if you haven't registered yet ,register here ?
            <v-btn color="green" @click="closeVar = !closevar">Sign Up</v-btn>
          </p> -->
        </v-card-text>
      </v-card>

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
      orgname2: '',
      email: "",
      fullname: "",
      Nationality: "",
      Educational_status: "",
      gender: "",
      password: "",
      lpassword:"",
      lemail:"",
      organization: "",
      items: ['Departement Head', 'College Dean', 'Teacher','Acadamic commitie'],
      errmessage: "",
      Username: "",
      closeVar: false,
      orgAllInfo: [],
      orgName:[],
      usertypemodel: '',
      userType:['Normal User', 'Admin'],
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
      if (this.lemail == "" || this.lpassword == "") {
        this.errmessage = "you must fill the form";
        return;
      }
      else{
        let data = {
          email :this.lemail,
          password :this.lpassword,
        }
        api.login(data).then( (response) =>{
            console.log(data)
            this.$store.commit('change')
            this.$store.commit('setToken',response.data.id)
            console.log(this.$store.getters.token)
            this.$router.push({name:"home"})
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
    },
    resetForm(){
            this.$refs.form.reset();
        },
        okbtn(){
        //  this.ok = false;
          this.closeVar = false;
        },
      getOrganizationData(){
       api.getOrganizations().then( response => {
       //console.log(response.data); 
       this.orgAllInfo = response.data;
       console.log(this.orgAllInfo);
      for(let i=0; i< this.orgAllInfo.length; i++){
        this.orgName.push(this.orgAllInfo[i].Name);
      }
      console.log(this.orgName);
      //return this.orgName;
      
       
    });
     
    }
  },
  mounted(){
 this.getOrganizationData();
  },
  computed: {
    
  }
  //  if(this.email !='' && this.password !=''){
  //      this.errmessage = ''
  //  }
};
</script>
