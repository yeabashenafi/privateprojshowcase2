<template>
  <v-flex>
    <v-card flat min-height="100%">
      <!-- <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar> -->
      <v-tabs vertical class="float-left">
        <v-card class="float-left ml-3 mb-4" flat min-height="100%">
          <!-- <v-list>
      <v-list-item> -->
          <v-card-title class="primary lighten-2" style="margin-left= -20">
            <p title class="align-center">{{ $store.getters.username }}</p>
          </v-card-title>
          <v-tab>
            <v-icon left>mdi-account</v-icon>
            My Account
          </v-tab>
          <!-- <v-divider></v-divider> -->
          <!-- </v-list-item>
      <v-list-item> -->
          <v-tab>
            <v-icon left>mdi-lock</v-icon>
            Add Organization
          </v-tab>
          <!-- <v-divider></v-divider> -->

          <!-- </v-list-item> -->
          <!-- <v-list-item> -->
          <v-tab>
            <v-icon left>mdi-access-point</v-icon>
            Manage Structure
          </v-tab>
          <!-- <v-divider></v-divider> -->

          <!-- </v-list-item>
      <v-list-item> -->
          <v-tab>
            <v-icon left>mdi-account</v-icon>
            All Users
          </v-tab>
          <!-- <v-divider></v-divider> -->

          <!-- </v-list-item>
      <v-list-item> -->
          <v-tab>
            <v-icon left>mdi-plus</v-icon>
            Add Users
          </v-tab>
          <!-- </v-list-item>
     
      
    </v-list> -->
        </v-card>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <my-account />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <add-organization></add-organization>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <add-org-structure></add-org-structure>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <view-users></view-users>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <register class="ml-3"></register>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-flex>
</template>
<script>
import MyAccount from "../components/MyAccount";
import addOrganization from "../components/addorganization.vue";
import addOrgStructure from "../components/addOrgStructure.vue";
import viewUsers from "../components/viewUsers";
import register from "../components/register.vue";

export default {
  data() {
    return {};
  },
  components: {
    addOrganization,
    register,
    MyAccount,
    viewUsers,
    addOrgStructure
  }
};
</script>
