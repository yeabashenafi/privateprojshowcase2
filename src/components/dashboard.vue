<template>
  <v-layout row>
    <v-card width="256" height="100%">
      <v-navigation-drawer permanent height="100%">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Profile
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <a
          ><v-container row class="mx-2" @click="edit_visibility">
            <v-icon class="my-1">mdi-view-dashboard</v-icon>
            <v-text class="mt-1 black--text">Account Setting</v-text>
          </v-container></a
        >
        <v-divider></v-divider>
        <a
          ><v-container row class="mx-2" @click="addc_visibility">
            <v-icon>mdi-help-box</v-icon>
            <v-text class="black--text">Add Curriculum</v-text>
          </v-container></a
        >
        <v-divider></v-divider>
        <v-container row class="mx-2">
          <v-icon>mdi-image</v-icon>
          <a><v-text class="black--text">Edit</v-text></a>
        </v-container>
        <v-divider> </v-divider>
        <v-container row class="mx-2" @click="view_Curr">
          <v-layout>
            <v-icon class="my-1">mdi-view-dashboard</v-icon>
            <a
              ><v-text class="black--text"
                >View your curriculum frameworks</v-text
              ></a
            >
          </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-container @click="yourorg">
          <v-layout>
            <v-icon>mdi-account</v-icon>
            <v-text class="black-text">Your organization</v-text>
          </v-layout>
        </v-container>
        <v-container @click="yourCom">
          <v-layout>
            <v-icon>mdi-check</v-icon>
            <v-text class="black-text">Your comittees</v-text>
          </v-layout>
        </v-container>
      </v-navigation-drawer>
    </v-card>
    <v-flex>
      <editProfile v-if="editp" />
      <add-currContent v-if="addc"></add-currContent>
      <view-curr v-if="vcurr"></view-curr>
      <your-organization v-if="yorg"></your-organization>
      <your-comitees v-if="ycomm" class="ml-10"></your-comitees>
    </v-flex>
  </v-layout>
</template>

<script>
import yourComitees from "../components/yourComitees";
import YourOrganization from "../components/YourOrganization.vue";
import ViewCurr from "../components/ViewCurr.vue";
import editProfile from "../components/editProfile.vue";
import AddCurrContent from "../components/AddCurrContent.vue";
export default {
  components: {
    YourOrganization,
    editProfile,
    AddCurrContent,
    yourComitees,
    ViewCurr
  },
  data() {
    return {
      editp: false,
      addc: false,
      isMenu: false,
      vcurr: false,
      yorg: true,
      ycomm:false,
      // items: [
      //   { title: "Edit", icon: "mdi-image", route: "/addCurriculumStructure" }
      // ]
    };
  },
  methods: {
    edit_visibility() {
      this.editp = true;
      this.addc = false;
      this.vcurr = false;
      this.yorg = false;
      this.ycomm = false;
    },
    addc_visibility() {
      this.editp = false;
      this.addc = true;
      this.vcurr = false;
      this.yorg = false
      this.ycomm = false;
    },
    view_Curr() {
      this.editp = false;
      this.addc = false;
      this.vcurr = true;
      this.yorg = false;
      this.ycomm = false;
    },
    yourorg() {
      this.editp = false;
      this.addc = false;
      this.vcurr = false;
      this.yorg = true;
      this.ycomm = false;
    },
    yourCom(){
      this.editp = false;
      this.addc = false;
      this.vcurr = false;
      this.yorg = false;
      this.ycomm = true;
    }
  }
};
</script>
