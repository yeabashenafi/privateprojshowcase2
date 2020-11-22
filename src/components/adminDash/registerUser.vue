<template>
  <v-container>
    
      <v-card raised >
        <v-card-title class="cyan darken-3 ">
          
            <v-flex class="text-center">
              
                
                <p class="white--text font-weight-bold">
                  New User Registration Form
                </p>
                

              
            </v-flex>
          
        </v-card-title>
        <v-card-text>
          <v-form ref="form" class="mt-5"  v-model="valid">
            <v-layout wrap>
              <v-flex xs10 sm6 >
                <v-text-field
                label=" Full Name"
                v-model="fullname"
                :rules="nameRule"
                class="mx-sm-3 mx-xs-12"
                solo
              ></v-text-field>
              </v-flex>
              <v-flex xs10 sm6>
                <v-text-field
                label=" Username"
                v-model="Username"
                :rules="nameRule"
                class="mx-sm-3"
                solo
              ></v-text-field>
              </v-flex>
              <v-flex xs10 sm6>
                <v-text-field
                  label=" email"
                  v-model="email"
                  :rules="emailRule"
                  class="mx-sm-3"
                  solo
                ></v-text-field>
              </v-flex>
              <v-flex xs10 sm6>
                <v-text-field
                  label=" Password"
                  v-model="password"
                  :rules="passwordRule"
                  class="mx-sm-3"
                  solo
                ></v-text-field>
              </v-flex>
              <v-flex xs10 sm6>
                <v-select
                  :items="names"
                  label="Office user Works in "
                  v-model="office"
                  solo
                  class="mx-sm-3"
                ></v-select>
              </v-flex>
              <v-flex xs10 sm6>
                <v-text-field
                  label="Nationality"
                  v-model="Nationality"
                  solo
                  :rules="nationalRule"
                  class="mx-sm-3"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>

              </v-flex>
              <v-flex xs10 sm6>
                <p class="mx-3 title">Gender</p>
                <v-radio-group v-model="gender" :mandatory="true" row class="mx-4">
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs10 sm6>
                <p class=" mx-3 title">Educational status</p>
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
              </v-flex>
            </v-layout>
            
            <v-flex xs10>

            </v-flex>
            

            
            
            <!-- <v-select label="Role" :items="roles" v-model="role"> </v-select> -->
            
            
            
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
    
    <v-dialog max-width="400px" v-model="ok">
      <v-card>
        <v-card-title>
          <h2>confirmed</h2>
        </v-card-title>
        <v-card-text>
          <h3>Successfully registered</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="okbtn">ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { apiservice } from "../../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      // roles: ["Admin", "Normal"],
      role: "",
      ok: false,
      email: "",
      fullname: "",
      orgs: [],
      offices: [],
      names: [],
      works_inDepId: "",
      office: "",
      Nationality: "",
      Educational_status: "",
      gender: "",
      password: "",
      lpassword: "",
      lemail: "",
      off: [],
      organization: "",
      errmessage: "",
      Username: "",
      closeVar: false,
      nameRule: [
        v => !!v || "Name is required",
        v => (v && v.length <= 15) || "Name must be less than 15 characters"
      ],
      emailRule: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRule: [
        v => (v && v.length > 3) || "password must be more than 8 characters"
      ],
      nationalRule: [
        v => (v && v.length > 0) || "You can not leave nationality field"
      ]
    };
  },
  methods: {
    okbtn() {
      this.ok = !this.ok;
    },
    registered() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      // var off_id = this.getAccoffId(this.office);
      this.ok = true;
      for (var i = 0; i < this.offices.length; i++) {
        if (this.office == this.offices[i].officeType) {
          this.works_inDepId = this.offices[i].id;
          console.log(this.works_inDepId);
        }
      }
      const data = {
        fullname: this.fullname,
        email: this.email,
        registered_inId: this.$store.getters.org_id,
        password: this.password,
        Educational_status: this.Educational_status,
        gender: this.gender,
        works_inDepId: this.works_inDepId,
        Nationality: this.Nationality,
        Username: this.Username
      };

      api.register(data).then(response => {
        console.log(response.data);
      });
    },
    resetForm() {
      this.$refs.form.reset();
    },
    // getOrgs() {
    //   api.getOrganizations().then(response => {
    //     this.orgs = response.data;
    //     console.log(this.orgs);
    //   });
    // },
    getOffice() {
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        this.offices = response;
        console.log(this.offices);
        for (var i = 0; i < this.offices.length; i++) {
          this.names.push(this.offices[i].officeType);
        }
      });
    }
    // getAccoffId(name) {
    //   var s = "";
    //   for (var i = 0; i < this.offices.length; i++) {
    //     if (this.offices[i].officeType) {
    //       if (this.offices[i].officeType == name) {
    //         return this.offices[i].id;
    //       }
    //     }
    //   }
    //   return s;
    // }
  },
  computed: {
    // names: function() {
    //   var x = [];
    //   for (var i = 0; i < this.offices.length; i++) {
    //     if (this.offices[i].officeType) {
    //       x.push(this.offices[i].officeType);
    //     }
    //   }
    //   return x;
    // }
  },
  mounted() {
    this.getOffice();
    // api.getAcademicOffices(this.$store.getters.org_id).then(response => {
    //   this.offices = response;
    //   console.log(this.offices);
    // });
  }
};
</script>
