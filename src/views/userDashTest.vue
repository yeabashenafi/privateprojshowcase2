<template>
  <v-card flat>
    <!-- <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar> -->
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Your Organization
      </v-tab>
      <v-tab>
        <v-icon left>mdi-edit</v-icon>
        Edit Profile
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Add Your Curriculum
      </v-tab>
      <v-tab>
        <v-icon>mdi-account</v-icon>
        Your Committee
      </v-tab>
      <v-tab>
        <v-icon>mdi-account</v-icon>
        View Your Curriculum
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <your-organization></your-organization>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <edit-profile></edit-profile>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <add-curr-content></add-curr-content>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <your-comitees></your-comitees>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <view-curr></view-curr>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import yourComitees from "../components/yourComitees";
import YourOrganization from "../components/YourOrganization.vue";
import ViewCurr from "../components/ViewCurr.vue";
import editProfile from "../components/editProfile.vue";
import AddCurrContent from "../components/AddCurrContent.vue";
export default {
  data() {
    return {
      name: "userDashTest"
    };
  },
  components: {
    YourOrganization,
    editProfile,
    AddCurrContent,
    yourComitees,
    ViewCurr
  }
};
</script>
