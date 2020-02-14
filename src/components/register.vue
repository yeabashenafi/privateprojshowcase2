<template>
  <span>
    <v-flex class="px-5 pb-10 mx-12 text-center">
      <v-card raised class="mx-12" width="80%">
        <v-card-title class="cyan darken-2 mb-3">
          <v-layout>
            <v-flex>
              <v-layout>
                <!-- indigo--text text--lighten-2 -->
                <h2 class="my-3 white--text text-center">
                  New User Registration Form
                </h2>
                <!-- <v-spacer></v-spacer> -->
              </v-layout>

              <h4 class="ma-7 white--text"></h4>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" class="pa-3" v-model="valid">
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
              label=" Password"
              v-model="password"
              :rules="passwordRule"
            ></v-text-field>
            <v-select
              :items="names"
              label="Office user Works in "
              v-model="office"
            ></v-select>
            <v-select label="Role" :items="roles" v-model="role"> </v-select>
            <v-text-field
              label="Nationality"
              v-model="Nationality"
              :rules="nationalRule"
            ></v-text-field>
            <p class="mx-3 pt-3 title">Gender</p>
            <v-radio-group v-model="gender" :mandatory="true" row class="mx-4">
              <v-radio label="Male" value="Male"></v-radio>
              <v-radio label="Female" value="Female"></v-radio>
            </v-radio-group>
            <p class="title">Educational status</p>
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
    </v-flex>
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
  </span>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      roles: ["Admin", "Normal"],
      role: "",
      ok: false,
      email: "",
      fullname: "",
      orgs: [],
      offices: [],
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
        v => (v && v.length > 8) || "password must be more than 8 characters"
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
      var off_id = this.getAccoffId(this.office);
      this.ok = true;
      const data = {
        fullname: this.fullname,
        email: this.email,
        // role: this.role,
        registered_inId: this.$store.getters.org_id,
        password: this.password,
        Educational_status: this.Educational_status,
        works_inDep: off_id,
        gender: this.gender,
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
    getOrgs() {
      api.getOrganizations().then(response => {
        this.orgs = response.data;
        console.log(this.orgs);
      });
    },
    getAccoffId(name) {
      var s = "";
      for (var i = 0; i < this.offices.length; i++) {
        if (this.offices[i].officeType) {
          if (this.offices[i].officeType == name) {
            return this.offices[i].id;
          }
        }
      }
      return s;
    }
  },
  computed: {
    names: function() {
      var x = [];
      for (var i = 0; i < this.offices.length; i++) {
        if (this.offices[i].officeType) {
          x.push(this.offices[i].officeType);
        }
      }

      return x;
    }
  },
  mounted() {
    api.getAcademicOffices(this.$store.getters.org_id).then(response => {
      this.offices = response.data;
    });
  }
};
</script>
