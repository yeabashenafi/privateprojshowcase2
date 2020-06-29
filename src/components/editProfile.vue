<template>
  <v-container persistent height="1000">
    <v-card>
      <!-- <v-title>
        <p class="cyan darken-3"></p>
      </v-title> -->
      <v-title>
        <div class="text-sm-center">
          <p class=" display-4 cyan darken-3 white--text headline pa-7">
            Account Setting
          </p>
        </div>
      </v-title>
      <v-card-text>
        <v-flex>
          <v-layout wrap>
            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field
                v-model="user.username"
                label="username"
              ></v-text-field>
            </v-flex>

            <!-- <v-icon>mdi-account-edit</v-icon>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="user.password"
              label="password"
            ></v-text-field> -->

            <!-- <v-spacer></v-spacer> -->
            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field v-model="user.fullname" label="Full Name">
              </v-text-field>
            </v-flex>

            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field
                v-model="user.email"
                label="E-mail"
                filled
              ></v-text-field>
            </v-flex>

            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field
                v-model="user.role"
                filled
                disabled
                label="role"
              ></v-text-field>
            </v-flex>

            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->

            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field
                class="ml-xs-5"
                v-model="user.Educational_status"
                label="Educational Status"
                filled
                disabled
              ></v-text-field>
            </v-flex>

            <v-flex class="mx-md-5 mx-sm-4" sm5 xs12>
              <v-text-field
                v-model="user.Nationality"
                filled
                disabled
                label="Nationality"
              ></v-text-field>
            </v-flex>

            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>
        </v-flex>
      </v-card-text>
      <v-card-actions>
        <v-flex class="text-xs-center" xs7>
          <v-btn
            round
            color="success text-white mx-7 text-xs-center"
            rounded
            @click="showDialog = !showDialog"
          >
            <p class="hidden-xs-only">submit Changes</p>
            <v-icon class="hidden-sm-and-up ">mdi-check</v-icon>
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
    <v-flex>
      <v-dialog v-model="showDialog" max-width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Confirm Choices
          </v-card-title>
          <v-card-text class="text-center mt-5">
            Are you sure you want to make the changes.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="showDialog = false" color="red lighten-1">
              Cancel
            </v-btn>
            <v-btn text @click="update()" color="green darken-1">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-container>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();

export default {
  data: () => {
    return {
      showDialog: false,
      user: {}
    };
  },
  methods: {
    update() {
      let data = {
        //the first line should be deleted once the model is updtaed
        Username: this.user.username,
        username: this.user.username,
        fullname: this.user.fullname,
        email: this.user.email,
        organizationId: this.$store.getters.org_id,
        password: this.user.password,
        Educational_status: this.user.Educational_status,
        gender: this.user.gender,
        registered_inId: this.user.registered_inId,
        works_inDepId: this.user.works_inDepId,
        id: this.$store.getters.User_id
      };
      console.log(data);
      api.updateUserData(data).then(response => {
        console.log(response);
        this.showDialog = false;
      });
    },
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

<style>
.btn {
  min-width: 1000px;
}
.success {
  min-width: 0px;
  max-width: 100%;
}
.success {
  padding-left: 16px;
}
div.btn__content {
  /* padding-left: 16px; */
  /* min-width: 0; */
}
</style>
