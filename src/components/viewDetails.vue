<template>
    <v-container>
        <v-flex class="align-center md6">
 <template v-for="(structure, index) in structures">
            
             <v-card v-bind:key="structure.index" class="mb-3" height="1%" @click="viewStructure(structure.id)">
          <v-layout class="md6">
        <v-card-title >
                <h2 class="grey--text text--darken-1">Structure{{ index+1 }}</h2>
                <v-card-text>
                    <v-layout>
                    <p class="title">Program Name  :</p>
                    <p class="subtitle-1 font-italic mt-1 mx-4">{{ structure.program_name}}</p>
                    </v-layout>
               <v-layout>
                   <p class="title">Program Type  :</p>
                   <p class="subtitle-1 font-italic  mt-1 mx-4"> {{ structure.program_type}} </p>
               </v-layout>
               <v-layout>
               <p class="title ">Rationale   : </p>
               <p class="subtitle-1 font-italic  mt-1 mx-4"> {{ structure.rational}}</p>

               </v-layout>
               <v-layout>
                   <p class="title">Created by  :</p>
                   <p class="subtitle-1 font-italic  mt-1 mx-4"> {{ structure.owner }}</p>
               </v-layout>


                </v-card-text>
            </v-card-title>
          </v-layout>
        </v-card>
        </template>
            </v-flex>
       

    </v-container>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
    data(){
  return {
      token: '',
      structures: []
  }
    },
    methods: {
      getStructures(){
        const token2 = this.$store.getters.token;
        api.getData(token2).then((res)=>{
            this.structures = res;
            console.log(this.structures);
        });
        },
      viewStructure(id){
          this.$router.push({name:'viewStructure',params:{id:':'+id}})
      }

    },
    mounted(){
        this.getStructures();
    }
};
</script>
