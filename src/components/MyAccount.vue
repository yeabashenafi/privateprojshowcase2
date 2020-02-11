<template>
  <v-container persistent height="1000">
    <v-card>
      <v-card-title>
        <p class="headline">{{ user[0].Username }}</p>
      </v-card-title>
      <v-card-actions>
        <v-flex>
          <v-layout>
            <v-text-field
              v-model="user[0].fullname"
              label="FullName"
            ></v-text-field>

            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user[0].organization"
              filled
              disabled
              label="organization"
            ></v-text-field>
          </v-layout>

          <v-layout>
            <v-text-field v-model="user[0].email" label="Email"></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user[0].Nationality"
              filled
              disabled
              label="organization"
            ></v-text-field>
            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>

          <v-label>Username</v-label>
          <v-layout>
            <v-text-field v-model="user[0].Username"></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user[0].role"
              filled
              disabled
              label="role"
            ></v-text-field>
          </v-layout>
          <v-flex class="text-center">
            <v-btn round color="green">Submit changes</v-btn>
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
