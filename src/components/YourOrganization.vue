<template>
  <span>
    <v-cantainer>
      <v-layout>
        <v-card color="white" width="60%" elevation="12">
          <v-card-title>Curriculum approval structure of the Organization</v-card-title>
          
          <v-card-actions>
            <v-treeview :items="choices"></v-treeview>
          </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
        <v-card width="30%" max-height="30%" class="mt-12" elevation="12" >
          <v-card-title>
            <v-container class="text-center">
            <v-btn class="mx-2 display-4"  fab dark large color="primary">
              <v-img :src="img" aspect-ratio="1.7"></v-img>
              <!-- <v-icon dark >mdi-image</v-icon> -->
            </v-btn>
            </v-container>
            <v-flex class="text-center"> 
              <p class="headline">{{orgName}}</p>
              <v-divider></v-divider>
              <p>{{org.Motto}}</p>
              <p>Since {{org.year_of_establishment}}</p>
            </v-flex>    
            <p class="font-weight-thin">{{org.background}}</p>        
          </v-card-title>
        </v-card>
      </v-layout>
    </v-cantainer>
  </span>
</template>

<script>
import { apiservice } from "../apiservice.js";
const api = new apiservice();
export default {
  data() {
    return {
      offices: [],
      parent: {},
      img:require('../assets/logo.svg'),
      org:{},
      choices:[{
        id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
      }],
      orgName:""
    };
  },
  methods: {
    getOffices() {
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        this.offices = response;
        console.log(this.offices);
        for (var i = 0; i < this.offices.length; i++) {
          if ( !this.offices[i].hasParent && this.offices[i].hasParent != undefined) {
            this.parent = this.offices[i];
          }
        }
      });
    },
    getOrganization(){
      api.getOrganization(this.$store.getters.org_id).then((data) => {
        this.org = data;
        this.orgName = data.Name;
      })
    }
  },
  mounted() {
    this.getOffices();
    this.getOrganization();
  }
};
</script>

<style></style>
