<template>
  <v-container fluid>
  <v-layout wrap row>
    
      <!-- <v-app-bar color="grey lighten-4 hidden-md-and-up">
        
        
         <v-btn text></v-btn> -->
        <!--
        <v-btn text></v-btn>
        <v-btn text></v-btn>
        <v-btn text></v-btn>  -->
      <!-- </v-app-bar> --> 
    <v-flex x12 class="hidden-md-and-up" justify-end> 
      <v-app-bar >
        <v-toolbar-title class=" hidden-xs-only">{{$store.getters.Username}}</v-toolbar-title>
        <v-divider vertical></v-divider>
        <v-layout></v-layout>
        <v-btn text to="/yourOrganization" small>
          <v-icon>mdi-navigation</v-icon>
        </v-btn>
        <v-btn text to="/editProfile" small>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn text to="/addCurriculum" small>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn text to="/yourCommittees" small>
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
        <v-btn text to="/viewCurriculums" small>
          <v-icon>mdi-folder</v-icon>
        </v-btn>
        <v-btn text to="/addassessment" small>
          <v-icon>mdi-file-plus</v-icon>
        </v-btn>
      </v-app-bar>
     </v-flex>
    
    <v-flex fill-height sm2 class="grey hidden-sm-and-down">
      
      <v-card  class=""  >
        <v-navigation-drawer
          width="100%"
          :height="h"
          v-model="drawer"
          color="grey lighten-4"
          permanent
          class=""
        >
          <v-list-item class="text-center ">
            <v-list-icon class="">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-icon>
            <v-list-item-title class="headline  text-center hidden-sm-and-down">
              {{$store.getters.Username}}
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list shaped nav>
            <v-list-item link to="/yourOrganization">
              <v-list-item-icon class="hidden-md-and-up">
                <v-icon>mdi-navigation</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold"
                  >
                  <v-flex>
                    Your Organization
                  </v-flex> </v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/editProfile">
              <v-list-item-icon  class="hidden-md-and-up">
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold">Profile </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/addCurriculum">
              <v-list-item-icon  class="hidden-md-and-up">
                <v-icon>mdi-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold"
                  >Add a curriculum
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/yourCommittees">
              <v-list-item-icon  class="hidden-md-and-up">
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold"
                  >Your Committees</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/viewCurriculums">
              <v-list-item-icon  class="hidden-md-and-up">
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold"
                  >View Curricculums</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/addassessment">
              <v-list-item-icon  class="hidden-md-and-up">
                <v-icon>mdi-file-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="hidden-sm-and-down ">
                <v-list-item-title class="text-center font-weight-bold"
                  >Add new assesement</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-flex>
    
    <v-flex md9 xs12 class="mt-2">
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
// import yourComitees from "../components/yourComitees";
// import YourOrganization from "../components/YourOrganization.vue";
// import ViewCurr from "../components/ViewCurr.vue";
// import editProfile from "../components/editProfile.vue";
// import AddCurrContent from "../components/AddCurrContent.vue";
export default {
  // components: {
  //   YourOrganization,
  //   editProfile,
  //   AddCurrContent,
  //   yourComitees,
  //   ViewCurr
  // },
  data() {
    return {
      editp: false,
      addc: false,
      isMenu: false,
      vcurr: false,
      yorg: true,
      ycomm: false,
      drawer: true,
      h:window.innerHeight,
      // items: [
      //   { title: "Edit", icon: "mdi-image", route: "/addCurriculumStructure" }
      // ]
    };
  },
  methods: {}
};
</script>
<style>

</style>
