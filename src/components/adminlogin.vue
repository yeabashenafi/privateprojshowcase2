<template>
  <v-layout row>
    <v-flex class="col pa-4 ma-5 align-center">
      <v-card class="mt-5 mx-auto py-5" width="50%" height="501">
        <v-card-title class="pa-3">
          <v-container>
            <p
              class="my-3 indigo--text text--lighten-2 text-center display-3 headline"
            >
              Institute Admin Log in
            </p>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Username" v-model="username"> </v-text-field>
            <v-text-field
              label="Password"
              required
              v-model="password"
            ></v-text-field>
            <p class="red--text">{{ errmessage }}</p>
          </v-form>
        </v-card-text>
        <v-actions>
          <v-flex class="mx-5 text-center">
            <v-btn
              text
              class="success text-md-center"
              rounded
              @click="adminLogin()"
              >Login</v-btn
            >
          </v-flex>
        </v-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    adminLogin() {
      let data = {
        username: this.username,
        password: this.password
      };
      api
        .loginAdmin(data)
        .then(response => {
          console.log(response.data.username);
          this.$store.commit("setUserID", response.data.id);
          this.$store.commit("setusername", response.data.username);
          this.$store.commit("setToken", response.data.token);
          this.$store.commit("setOrgid", response.data.orgId);
          this.$store.commit("change");
          this.$store.commit("setemail", response.data.email);
          this.$router.push({ name: "AdminDash" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
