<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex fill-height sm2 class="grey hidden-sm-and-down">
        <v-card>
          <v-navigation-drawer
          width="100%"
          :height="h"
          v-model="drawer"
          color="grey lighten-4"
          permanent
          >
            <v-list-item class="Text-center">
              
              <v-list-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-icon>
              <v-list-item-title class="headline text-center hidden-sm-and-down">
                Admin 
              </v-list-item-title>    
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list shaped nav>
              <v-list-item link to="/MyAccount">
                <v-list-item-content class="">
                  <v-list-item-title class="text-center font-weight-bold">My Account</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/OrgStructure">
                <v-list-item-content>
                  <v-list-item-title class="text-center font-weight-bold">Manage Structure</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/AllUsers">
                <v-list-item-content>
                  <v-list-item-title class="text-center font-weight-bold">All Users</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/registerUsers">
                <v-list-item-content>
                  <v-list-item-title class="text-center font-weight-bold">Register Users</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/addCommittee">
                <v-list-item-content>
                  <v-list-item-title class="text-center font-weight-bold">Add Committees</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/AddRules">
                <v-list-item-content >
                  <v-list-item-title class="text-center font-weight-bold">Add Rules</v-list-item-title>
                  
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/AddnewComponent">
                <v-list-item-content>
                  <v-list-item-title class="text-center font-weight-bold">Add New Components</v-list-item-title>
                  
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-flex>

      <v-flex md9 xs12 fill-height class="mx-md-5">
        <v-content>
          
            <router-view></router-view>
          
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// // import dfieldtrain from "../components/dfieldtrain";
// import training from "../components/training";
// // import addComponent from "../components/addComponent";
// import addcommitee from "../components/addcommitee";
// import MyAccount from "../components/MyAccount";
// import addOrganization from "../components/platform/addorganization.vue";
// import orgStructureTest from "../components/orgStructureTest.vue";
// import allUser from "../components/allUser";
// import register from "../components/register.vue";
// import setRules from "../components/setRules.vue";

export default {
  
  components: {
    // addOrganization,
    // register,
    // MyAccount,
    // allUser,
    // setRules,
    // orgStructureTest,
    // addcommitee,
    // training
    // addComponent,
    // dfieldtrain
  },
  data(){
    return{
      h:window.innerHeight,
      drawer:true
    }
  }
};
</script>
