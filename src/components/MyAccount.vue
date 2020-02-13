<template>
  <v-container persistent height="1000">
    <v-card>
      <!-- <v-title>
        <p class="cyan darken-3"></p>
      </v-title> -->
      <v-title>
       <div min-width="100px">
          <p class="text-lg-center cyan darken-3 white--text headline title-1"> Account Setting</p>
        <p class="headline">{{ user.fullname }}</p>
       </div>
      </v-title>
      <v-card-actions>
        <v-flex>
          <v-layout>
            <v-text-field
              v-model="user.fullname"
              label="FullName"
            ></v-text-field>

            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.organization"
              filled
              disabled
              label="organization"
            ></v-text-field>
          </v-layout>

          <v-layout>
            <v-text-field v-model="user.email" label="Email"></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.Nationality"
              filled
              disabled
              label="organization"
            ></v-text-field>
            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>

          <v-label>Username</v-label>
          <v-layout>
            <v-text-field v-model="user.Username"></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.role"
              filled
              disabled
              label="role"
            ></v-text-field>
          </v-layout>
          <v-flex class="text-center">
            <v-btn round color="success text-white" rounded>Submit changes</v-btn>
          </v-flex>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();

export default {
  data: () => {
    return {
      user: {}
    };
  },
  methods: {
    getUserData() {
      var userId = this.$store.getters.User_id;
      api.getUser(userId).then(response => {
        this.user = response.data;
        console.log(this.user);
      });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style></style>
