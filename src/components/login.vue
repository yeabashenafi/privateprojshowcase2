<template>
  <v-layout row>
    <v-flex class="col pa-4 ma-5 align-center">
      <v-card class="mt-5 mx-auto py-5" width="700px" height="501">
        <v-card-title class="pa-3">
          <v-container>
            <h3 class="my-3 indigo--text text--lighten-2 text-center display-3">
              Log in
            </h3>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Username" v-model="luser"> </v-text-field>
            <v-text-field
              label="Password"
              required
              v-model="lpassword"
            ></v-text-field>
            <v-select
              :items="orgName"
              label="Organization Name"
              v-model="orgname2"
            ></v-select>
            <v-select
              :items="userType"
              v-model="usertypemodel"
              label="User Type"
            ></v-select>
            <p class="red--text">{{ errmessage }}</p>
            <v-btn text class="success text-md-center" @click="logIn"
              >Login</v-btn
            >
          </v-form>
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
      orgname2: "",
      email: "",
      fullname: "",
      Nationality: "",
      Educational_status: "",
      gender: "",
      password: "",
      lpassword: "",
      luser: "",
      chosenOrg: "",
      organization: "",
      items: [
        "Departement Head",
        "College Dean",
        "Teacher",
        "Academic commitie"
      ],
      errmessage: "",
      Username: "",
      closeVar: false,
      orgAllInfo: [],
      orgName: [],
      usertypemodel: "",
      userType: ["Normal User", "Admin"],
      nameRule: [
        v => !!v || "Name is required",
        v => (v && v.length <= 15) || "Name must be less than 15 characters"
      ],
      emailRule: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRule: [
        v => (v && v.length > 8) || "password must be more than 8 characters"
      ],
      nationalRule: [
        v => (v && v.length > 0) || "You can not leave nationality field"
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
      } else {
        this.chosenOrg = this.getOrgId(this.orgname2);
        let data = {
          username: this.luser,
          password: this.lpassword,
          org_id: this.chosenOrg
        };
        api.login(data).then(response => {
          console.log(response);
          this.$store.commit("setUserID", response.data.id);
          this.$store.commit("change");
          this.$store.commit("setusername", response.data.username);
          this.$store.commit("setToken", response.data.token);
          this.$store.commit("setOrgid", response.data.org_id);
          this.$store.commit("setemail", response.data.email);
          this.$store.commit("setrole", response.data.role);
          console.log(this.$store.getters.role);
          if (this.usertypemodel == "Normal User") {
            this.$router.push({ name: "dashboard" });
          } else if (this.usertypemodel == "Admin") {
            this.$router.push({ name: "AdminDash" });
          }
        });
      }
    },
    registered() {
      if (this.$refs.form.validate()) {
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
    resetForm() {
      this.$refs.form.reset();
    },

    okbtn() {
      //  this.ok = false;
      this.closeVar = false;
    },
    getOrganizationData() {
      api.getOrganizations().then(response => {
        //console.log(response.data);
        this.orgAllInfo = response.data;
        console.log(this.orgAllInfo);
        for (let i = 0; i < this.orgAllInfo.length; i++) {
          this.orgName.push(this.orgAllInfo[i].Name);
        }
        console.log(this.orgName);
        //return this.orgName;
      });
    },
    getOrgId(name) {
      console.log(name);
      for (var i = 0; i < this.orgAllInfo.length; i++) {
        if (name == this.orgAllInfo[i].Name) {
          console.log(this.orgAllInfo[i].id);
          return this.orgAllInfo[i].id;
        }
      }
    }
  },
  mounted() {
    this.getOrganizationData();
  },
  computed: {}
};
</script>
