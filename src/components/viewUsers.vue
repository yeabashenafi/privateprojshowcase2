<template>
  <v-container>
    <v-template v-for="(user, index) in userInfo" :key="user.index">
      <v-flex>
        <v-layout class="float-left xs12 lg4 ma-5">
          <v-card min-height="300px" min-width="300px">
            <v-card-title class="primary lighten-1 white--text">
              <div>
                <p>User {{ index + 1 }}</p>
                <hr />
              </div>
            </v-card-title>
            <v-card-text class="pa-4">
              <v-layout>
                <p class="subtitle-1">Full Name :</p>
                <p class="subtitle-1 ma-1 px-3">{{ user.fullname }}</p>
              </v-layout>
              <v-layout>
                <p class="subtitle-1">E-mail :</p>
                <p class="subtitle-1 ma-1 px-3">{{ user.email }}</p>
              </v-layout>
              <v-layout>
                <p class="subtitle-1">Status :</p>
                <p class="subtitle-1 ma-1 px-3">
                  {{ user.Educational_status }}
                </p>
              </v-layout>
              <v-layout>
                <p class="subtitle-1">Organization :</p>
                <p class="subtitle-1 ma-1 px-3">{{ user.organization }}</p>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>
    </v-template>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      userInfo: []
    };
  },
  methods: {
    getAllUsers() {
      api.getUserInformotion().then(response => {
        this.userInfo = response.data;
        return this.userInfo;
      });
    }
  },
  mounted() {
    this.getAllUsers();
  }
};
</script>
