<template>
  <v-container>
    <v-card raised>
      <!-- <v-title class="cyan darken-3 py-3" width="100%">jjjj</v-title> -->
      <v-card-title class="cyan darken-3" >
        <v-flex class="text-center">
          <p class="white--text font-weight-bold">Available Users</p>
        </v-flex>
        
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          rounded
          filled
          class="shrink white"
        ></v-text-field>
      </v-card-title>
      <v-flex>
        <v-data-table
        :headers="headers"
        :items="userInfo"
        :search="search"
        sort-by="fullname"
        >
          <template v-slot:header.fullname="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
          <template v-slot:header.email="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
          <template v-slot:header.status="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
          <template v-slot:header.org="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
        </v-data-table>
      </v-flex>
      
    </v-card>
  </v-container>
</template>
<script>
import { apiservice } from "../../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: true,
      headers: [
        {
          text: "Full Name ",
          align: "left",
          sortable: true,
          value: "fullname"
        },
        { text: "E-mail ", value: "email" },
        { text: "Status ", value: "status" },
        { text: "Organization", value: "org" }
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
      ],
      userInfo: []
    };
  },
  methods: {
    getAllUsers() {
      api.getUserInformotion().then(response => {
        this.userInfo = response.data;
        console.log(this.userInfo);
        return this.userInfo;
      });
    }
  },
  mounted() {
    this.getAllUsers();
  }
};
</script>
