<template >
  <!-- <v-container  fluid fill-height grid-list-md text-xs-center> -->
    <v-layout class=""
      :class="{'grey lighten-3':$vuetify.breakpoint.mdAndUp}"
     bg   justify-center row>
      <v-flex md7 sm8 xs10>
        <v-card 
        
        :class="{
           'elevation-21':$vuetify.breakpoint.mdAndUp,
           'flat':$vuetify.breakpoint.smAndDown}"
        >
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap align-center>
                <v-flex md6 xs12 class="">
                  <v-card elevation="10" color="grey lighten-3">
                    <v-card-text>
                      <v-form width="30%">
                        <p class="login  mx-5">Login</p>

                        <v-flex xs12>
                          <v-text-field
                            label="Username"
                            outlined
                            v-model="luser"
                            class="mx-sm-12 mt-sm-5"
                          >
                          </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            label="Password"
                            required
                            class="mx-sm-12"
                            outlined
                            type="password"
                            v-model="lpassword"
                          ></v-text-field>
                        </v-flex>

                        <p class="red--text">{{ errmessage }}</p>

                        <v-btn
                          width="70%"
                          Raised
                          text
                          class="success mx-sm-12 mb-5"
                          @click="logIn"
                          >Login</v-btn
                        >
                      </v-form>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex md6 xs12 color="" class="" height="100%" flat>
                  <div class=" mt-5">
                    <v-flex class="text-center ">
                        <p class="topic blue-grey--text">
                          Don't have an account?
                        </p>
                        <p class="description blue-grey--text">
                        Go to your organziational admin and register to be able
                        to login
                      </p>
                      <router-link class="blue-grey--text" to="/about"
                        >Contact your organization</router-link
                      >
                    </v-flex>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
            <v-layout> </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->
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
      image: require("../assets/images/entrepreneur-1340649__340.jpg"),
      photo: require("../assets/Books.png"),
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
    //register
  },
  methods: {
    logIn() {
      if (this.lemil == "" || this.lpassword == "") {
        this.errmessage = "you must fill the form";
        return;
      } else {
        let data = {
          username: this.luser,
          password: this.lpassword
        };
        api.login(data).then(response => {
          console.log(response);
          this.$store.commit("setOffice", response.data.works_inDep);
          this.$store.commit("setUserID", response.data.id);
          this.$store.commit("change");
          this.$store.commit("setusername", response.data.username);
          this.$store.commit("setToken", response.data.token);
          this.$store.commit("setOrgid", response.data.org_id);
          this.$store.commit("setemail", response.data.email);
          this.$store.commit("setrole", response.data.role);
          this.$router.push({ name: "yourOrganization" });
        });
      }
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
    }
    // getOrgId(name) {
    //   console.log(name);
    //   for (var i = 0; i < this.orgAllInfo.length; i++) {
    //     if (name == this.orgAllInfo[i].Name) {
    //       console.log(this.orgAllInfo[i].id);
    //       return this.orgAllInfo[i].id;
    //     }
    //   }
    // }
  },
  mounted() {
    this.getOrganizationData();
  },
  computed: {}
};
</script>
<style scoped>
.bg {
  padding-top: 12.5%;
  padding-bottom: 12.5%;
  width:100%;
}
.col {
  line-height: 50px;
  /* opacity: 0.3 */
}
.login {
  font-family: "Comic sans", "Comic Sans MS", cursive;
  font-size: 2em;
}
.topic {
  font-family: "Comic sans", "Comic Sans MS", cursive;
  font-size: 1.5em;
}
.description {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
