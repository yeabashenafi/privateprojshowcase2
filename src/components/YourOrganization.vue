<template>
  <span>
    <v-cantainer>
      <v-layout>
        <v-card color="white" width="60%" elevation="12">
          <v-card-title
            >Curriculum approval structure of the Organization</v-card-title
          >

          <v-card-actions>
            <!-- <v-treeview :items="choices"></v-treeview> -->
            <v-timeline
            reverse
            class="ml-5"
            align-top
            >
              <v-timeline-item
              v-for="office in structure"
              :key="office"
              >
              <p class="title">{{office.officeType }}</p></v-timeline-item>
            </v-timeline>
          </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
        <v-card width="30%" max-height="30%" class="mt-12" elevation="12">
          <v-card-title>
            <v-container class="text-center">
              <v-btn class="mx-2 display-4" fab dark large color="primary">
                <v-img :src="img" aspect-ratio="1.7"></v-img>
              </v-btn>
            </v-container>
            <v-flex class="text-center">
              <p class="headline">{{ orgName }}</p>
              <v-divider></v-divider>
              <p>{{ org.Motto }}</p>
              <p>Since {{ org.year_of_establishment }}</p>
            </v-flex>
            <p class="font-weight-thin">{{ org.background }}</p>
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
      structure: [],
      img: require("../assets/logo.svg"),
      org: {},
      struct: [{}],
      choices: [
        {
          id: "",
          name: "",
          children: [
            {
              id: "",
              name: ""
            }
          ]
          //   { id: 2, name: 'Calendar : app' },
          //   { id: 3, name: 'Chrome : app' },
          //   { id: 4, name: 'Webstorm : app' },
          // ],
        }
      ],
      orgName: ""
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
      var x= [{
        name:'',
        id:''
      }]
      var y =[];
      var children=[];
      api.checkHigher(this.$store.getters.org_id).then((data)=>{
        console.log(data);
      api.getChildren(data.data.hasParent.id).then(response=>{
        for(var i=0;i<response.length;i++){
          x.push({
            name:response[i].officeType,
            id:response[i].id
          });
          
        }
        x.shift();
        for(var s=0;s<x.length;s++){
          api.getChildren(x[s].id).then(result =>{
            y.push(result[0])
          })
        }
        console.log(y);
        console.log(x);
        for(var j=0;j<x.length;j++){
        children.push({
          id:j+2,
          name:x[j].name
        })
          
        }
      
      console.log(children);
      })
      
      
        this.choices.push({
          id: 1,
           name: data.data.hasParent.officeType,
           
           children: children
        })
      })
      this.choices.shift();
      console.log(this.choices);
    },
    getStructure(){      
      api.getFullStruct(this.$store.getters.works_inDep).then((data) => {
        this.structure = data
      })
    },
    getOrganization() {
      api.getOrganization(this.$store.getters.org_id).then(data => {
        this.org = data;
        this.orgName = data.Name;
      });
    }
  },
  mounted() {
    this.getOffices();
    this.getHighest();
    this.getStructure();
    this.getOrganization();
  }
};
</script>

<style></style>
