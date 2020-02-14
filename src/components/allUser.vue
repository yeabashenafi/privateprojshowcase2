<template>
 <v-flex class="align-center ml-12 mb-8" >
      <v-card width="90%" class="ml-12 pb-6">
        <!-- <v-title class="cyan darken-3 py-3" width="100%">jjjj</v-title> -->
    <v-card-title class="display-1">
     <p class="cyan--text text--darken-3">Available Users</p>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        rounded
        filled
       class="shrink"
       
      ></v-text-field>
    </v-card-title>
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
    
  </v-card>
 </v-flex>
  </template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
    search: '',
    expanded: [],
    singleExpand: true,
    headers: [
          {
            text: 'Full Name ',
            align: 'left',
            sortable: true,
            value: 'fullname',
          },
          { text: 'E-mail ', value: 'email' },
          { text: 'Status ', value: 'status' },
          { text: 'Organization', value: 'org' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        ],
      userInfo: [],
    };
  },
  methods: {
    getAllUsers() {
      api.getUserInformotion().then(response => {
        this.userInfo = response.data;
        console.log(this.userInfo);
        return this.userInfo;
      });
    },
    
  },
  mounted() {
    this.getAllUsers();
  },
  };
</script>