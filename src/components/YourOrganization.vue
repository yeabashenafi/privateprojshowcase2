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
      struct:[{}],
      choices:[ {
          id: '',
           name: '',
           children: [{
             id:'',name:''
           },]
          //   { id: 2, name: 'Calendar : app' },
          //   { id: 3, name: 'Chrome : app' },
          //   { id: 4, name: 'Webstorm : app' },
          // ],
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
          if (this.offices[i].parentId == "") {
            this.parent = this.offices[i];
          }
          console.log(this.parent);
        }
      });
    },
    getHighest(){
      api.checkHigher(this.$store.getters.org_id).then((data)=>{
        console.log(data);

        this.choices.push({
          id: 1,
           name: data.data.hasParent.officeType,
          //  children: [{
          //    id:'',name:''
          //  },]
        })
        api.getAcademicOffices(this.$store.getters.org_id).then((response) =>{
          console.log(response)
          for(var i=1;i<response.length;i++){
              this.choices.push({
                id:i+1,
                name:response[i].officeType,
              })
          }
        })
      })
      this.choices.shift();
      console.log(this.choices)
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
    this.getHighest();
    this.getOrganization();
  }
};
</script>

<style>
</style>
