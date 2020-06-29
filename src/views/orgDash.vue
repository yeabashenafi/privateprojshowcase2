<template>
  
  <v-layout height="100%">
    <v-card width="256">
      <v-navigation-drawer permanent>
        <v-list-item class="blue darken-3">
          <v-list-item-content>
            <v-list-item-title class="title">Username</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item link @click="MyAcc()">
            <v-list-item-icon>
              <V-icon>mdi-account</V-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="addOrganization()">
            <v-list-item-icon>
              <V-icon>mdi-account</V-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add Organization</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="addOrgS()">
            <v-list-item-icon>
              <V-icon>mdi-plus</V-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Manage Structure</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="addUser()">
            <v-list-item-icon>
              <V-icon>mdi-upload-network-outline</V-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add user</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="viewAllUsers()">
            <v-list-item-icon>
              <V-icon>mdi-account</V-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>All Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-flex>
      <add-organization v-if="addo"></add-organization>
      <register v-if="addu" class="ml-3"></register>
      <my-account v-if="myacc"></my-account>
      <view-users v-if="alluser"></view-users>
      <add-org-structure v-if="orgst"></add-org-structure>
    </v-flex>
  </v-layout>
</template>
<script>
import viewUsers from "../components/viewUsers";
import MyAccount from "../components/MyAccount";
import addOrganization from "../components/platform/addorganization.vue";
import register from "../components/register.vue";
import addOrgStructure from "../components/addOrgStructure.vue";
export default {
  components: {
    addOrganization,
    register,
    MyAccount,
    viewUsers,
    addOrgStructure
  },
  data: () => {
    return {
      items: [
        { title: "My Account", icon: "mdi-account", route: "" },
        {
          title: "Add organizational approval hierarchy",
          icon: "mdi-account",
          route: "/addOrgn"
        },
        {
          title: "Add User",
          icon: "mdi-upload-network-outline",
          route: "addUser()"
        },
        { title: "All users", icon: "mdi-account", route: "" }
      ],
      addo: true,
      addu: false,
      myacc: false,
      alluser: false,
      orgst: false,
      orgnames: [],
      username: ""
    };
  },
  methods: {
    addUser() {
      this.addo = false;
      this.addu = true;
      this.myacc = false;
      this.alluser = false;
      this.orgst = false;
    },
    addOrganization() {
      this.addo = true;
      this.addu = false;
      this.myacc = false;
      this.alluser = false;
      this.orgst = false;
    },
    MyAcc() {
      this.myacc = true;
      this.addo = false;
      this.addu = false;
      this.alluser = false;
      this.orgst = false;
    },
    viewAllUsers() {
      this.alluser = true;
      this.addo = false;
      this.addu = false;
      this.myacc = false;
      this.orgst = false;
    },
    addOrgS() {
      this.alluser = false;
      this.addo = false;
      this.addu = false;
      this.myacc = false;
      this.orgst = true;
    }
  },

  mounted() {
    //this.username = this.$store.getters.User_id;
    console.log(this.username);
  }
};
</script>
<style></style>
