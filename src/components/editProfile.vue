<template>
  <v-container persistent height="1000">
    <v-card>
      <!-- <v-title>
        <p class="cyan darken-3"></p>
      </v-title> -->
      <v-title>
        <div min-width="100px">
          <p
            class=" display-4 text-lg-center cyan darken-3 white--text headline pa-7"
          >
            Account Setting
          </p>
        </div>
      </v-title>
      <v-card-actions>
        <v-flex>
          <v-layout>
            <v-text-field
              v-model="user.Username"
              label="username"
            ></v-text-field>
            <!-- <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.password"
              label="password"
            ></v-text-field> -->
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.fullname"
              label="Full Name"
            ></v-text-field>
          </v-layout>

          <v-layout>
            <v-text-field
              v-model="user.email"
              label="E-mail"
              filled
            ></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.role"
              filled
              disabled
              label="role"
            ></v-text-field>
            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>
          <v-layout>
            <v-text-field
              v-model="user.Educational_status"
              label="Educational Status"
              filled
              disabled
            ></v-text-field>
            <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.Nationality"
              filled
              disabled
              label="Nationality"
            ></v-text-field>
            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>
          <v-flex class="text-center">
            <v-btn round color="success text-white" rounded @click="update()"
              >Submit changes</v-btn
            >
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
    // update() {
    //   let data = {
    //     Username: this.user.Username,
    //     fullname: this.user.fullname,
    //     email: this.user.email,
    //     organizationId: this.$store.getters.org_id,
    //     password: this.user.password,
    //     Educational_status: this.user.Educational_status,
    //     gender:this.user.gender,
    //     registered_inId: this.user.registered_inId,
    //     works_inDepId:this.user.works_inDepId,
    //     id: this.$store.getters.User_id
    //   };
    //   api.updateUserData(data).then(response => {
    //     console.log(response);
    //   });
    // },
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
