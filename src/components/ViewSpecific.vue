<template>
  <span>
    <v-card>
      <v-card-title>
        <p class="display-4">{{structure.program_name}}</p>
      </v-card-title>
      <v-card-actions>
        <v-flex>
        <v-layout class="ml-10">
          <p class="headline">Type:</p>
          <p class="headline">{{structure.program_type}}</p>
        </v-layout>
        <v-layout class="ml-10">
          <p class="headline">Backgorund:</p>
          <p class="headline">{{structure.background}}</p>
        </v-layout>
        <v-layout class="ml-10">
          <p class="headline">Rational:</p>
          <p class="headline">{{structure.rational}}</p>
        </v-layout>
        <p class="headline ml-10">Program Outcome</p>
        <template  v-for="(outcome,index) in structure.program_outcome">
          <v-flex v-bind:key="outcome.index">
            <p class="title pl-12" >Program Outcome{{index+1}}:</p>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">name:</p>
              <p class="font-weight-medium pl-3">{{outcome.name}}</p>
            </v-layout>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">details:</p>
              <p class="font-weight-medium pl-3">{{outcome.details}}</p>
            </v-layout>
          </v-flex>
        </template>
        <p class="headline ml-10">Program Educational Outcome</p>
        <template  v-for="(Edoutcome,index) in structure.program_educational_outcome">
          <v-flex v-bind:key="Edoutcome.index">
            <p class="title pl-12" >Program Educational Outcome{{index+1}}:</p>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">name:</p>
              <p class="font-weight-medium pl-3">{{Edoutcome.name}}</p>
            </v-layout>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">details:</p>
              <p class="font-weight-medium pl-3">{{Edoutcome.details}}</p>
            </v-layout>
          </v-flex>
        </template>
        <p class="headline ml-10">Course Learning Outcome</p>
        <template  v-for="(CLoutcome,index) in structure.course_learning_outcome">
          <v-flex v-bind:key="CLoutcome.index">
            <p class="title pl-12" >Course Learning Outcome{{index+1}}:</p>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">name:</p>
              <p class="font-weight-medium pl-3">{{CLoutcome.name}}</p>
            </v-layout>
            <v-layout class="pl-12" >
              <p class="font-weight-black pl-5">details:</p>
              <p class="font-weight-medium pl-3">{{CLoutcome.details}}</p>
            </v-layout>
          </v-flex>
        </template>

      </v-flex>
      </v-card-actions>

    </v-card>
  </span>
</template>

<script>
import {apiservice} from '../apiservice';
const api = new apiservice();
export default {
data:()=>{
  return{
    structure:{},
  }
},
methods:{
  getStructure(){
  {
    //var token = this.$store.getters.token;
    var user_id = this.$route.params.id;
    var id = user_id.substr(1)
    api.getStructure(id).then(
      (response) =>{
        this.structure = response
        console.log(this.structure);
      }
    )
  }
  }
},
mounted(){
  this.getStructure()
}
}
</script>

<style>

</style>
