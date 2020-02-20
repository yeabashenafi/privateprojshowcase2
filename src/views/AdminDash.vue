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
          <v-card-title class="cyan lighten-2" style="margin-left= -20">
            <p title class="align-center">{{ $store.getters.Username }}</p>
          </v-card-title>
          <!-- <v-card align="left" class="py-9 cyan darken-2" flat>
            <p title class="align-center">{{ $store.getters.Username }}</p>
          </v-card> -->
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
          <v-tab>
            <v-icon left>mdi-plus</v-icon>
            Add Committee
          </v-tab>
          <!-- <v-tab>
            <v-icon left> mdi-plus</v-icon>
            Add Component
          </v-tab> -->
          <v-tab>
            <v-icon left> mdi-plus</v-icon>
            Add New Component
          </v-tab>
          <v-tab>
            <v-icon left> mdi-plus</v-icon>
            Add Field
          </v-tab>
        </v-card>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <my-account></my-account>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <add-organization></add-organization>
              <!-- <all-user></all-user> -->
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-flex class="text-center" align-self-center>
            <v-card flat>
              <v-card-text>
                <org-structure-test></org-structure-test>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-tab-item>
        <v-tab-item>
          <v-flex class="text-center" align-self-center>
            <v-card flat>
              <v-card-text>
                <all-user></all-user>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <register class="ml-3"></register>
              <!-- <add-organization></add-organization> -->
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <addcommitee class="ml-3"></addcommitee>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- <v-tab-item>
          <v-card-text>
            <add-component class="ml-3"></add-component>
          </v-card-text>
        </v-tab-item> -->
        <v-tab-item>
          <v-card-text>
            <training class="ml-3"></training>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <dfieldtrain class="ml-3"></dfieldtrain>
          </v-card-text>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-flex>
</template>
<script>
import dfieldtrain from "../components/dfieldtrain";
import training from "../components/training";
// import addComponent from "../components/addComponent";
import addcommitee from "../components/addcommitee";
import MyAccount from "../components/MyAccount";
import addOrganization from "../components/addorganization.vue";
import orgStructureTest from "../components/orgStructureTest.vue";
import allUser from "../components/allUser";
import register from "../components/register.vue";

export default {
  data() {
    return {};
  },
  components: {
    addOrganization,
    register,
    MyAccount,
    allUser,
    orgStructureTest,
    addcommitee,
    // addComponent,
    training,
    dfieldtrain
  }
};
</script>
