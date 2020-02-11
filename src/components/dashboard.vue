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
        <v-container></v-container>
        <v-container></v-container>
      </v-navigation-drawer>
    </v-card>
    <v-flex>
      <editProfile v-if="editp" />
      <add-currContent v-if="addc"></add-currContent>
    </v-flex>
  </v-layout>
</template>

<script>
import editProfile from "../components/editProfile.vue";
import AddCurrContent from "../components/AddCurrContent.vue";
export default {
  components: {
    editProfile,
    AddCurrContent
  },
  data() {
    return {
      editp: false,
      addc: false,
      isMenu: false,
      profile: false
      // items: [
      //   { title: "Edit", icon: "mdi-image", route: "/addCurriculumStructure" }
      // ]
    };
  },
  methods: {
    edit_visibility() {
      this.editp = true;
      this.addc = false;
    },
    addc_visibility() {
      this.editp = false;
      this.addc = true;
    }
  }
};
</script>
