<template>
  <span>
    <v-card class="my-8">
      <v-card-title>
        <p class="display-4">{{ structure.program_name }}</p>
       
      </v-card-title> 
      
      <v-card-actions>
        <v-flex>
          <v-layout class="ml-10">
            <p class="headline">Type:</p>
            <p class="headline">{{ structure.program_type }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="visible=true" text>comment</v-btn>
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Backgorund:</p>
            <p class="headline">{{ structure.background }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="visible=true" text>comment</v-btn>
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Rational:</p>
            <p class="headline">{{ structure.rational }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="visible=true" text>comment</v-btn>
          </v-layout>
          <v-layout>
            <p class="headline ml-10">Program Educational Outcome</p>
            <v-btn class="ml-5 blue lighten-5" @click="visible=true" text>comment</v-btn>
          </v-layout>
          <template v-for="(Edoutcome, index) in structure.program_educational_outcome"
           >
            <v-flex v-bind:key="Edoutcome.index">
              <p class="title pl-12">
                Program Educational Outcome{{ index + 1 }}:
              </p>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">name:</p>
                <p class="font-weight-medium pl-3">{{ Edoutcome.name }}</p>
              </v-layout>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">details:</p>
                <p class="font-weight-medium pl-3">{{ Edoutcome.details }}</p>
              </v-layout>
            </v-flex>
          </template>
          <v-layout>
             <p class="headline ml-10">Course Learning Outcome</p>
              <v-btn class="ml-5 blue lighten-5" @click="visible=true" text>comment</v-btn>
          </v-layout>
          <template
            v-for="(CLoutcome, index) in structure.course_learning_outcome"
          >
            <v-flex v-bind:key="CLoutcome.index">
              <p class="title pl-12">Course Learning Outcome{{ index + 1 }}:</p>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">name:</p>
                <p class="font-weight-medium pl-3">{{ CLoutcome.name }}</p>
              </v-layout>
              <v-layout class="pl-12">
                <p class="font-weight-black pl-5">details:</p>
                <p class="font-weight-medium pl-3">{{ CLoutcome.details }}</p>
              </v-layout>
            </v-flex>
          </template>
        </v-flex>
      </v-card-actions>
      <hr>
      <v-layout class="mx-12 mb-12 pb-12 mt-6">
        <v-spacer></v-spacer>
        <v-btn color="success white--text" align-self-left> Endorse</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error white--text">Reject Curriculum</v-btn>
      </v-layout>
    </v-card>
    <v-dialog v-model="visible" width="50%">
      <v-card>
        <v-card-title>
          Write your comment
        </v-card-title>
        <v-card-text>
           <v-textarea label="your comment"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="send()">send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  
  </span>
  
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => {
    return {
      structure: {},
      visible: false
    };
  },
  methods: {
    send(){
         this.visible = false
    },
    getStructure() {
      {
        //var token = this.$store.getters.token;
        var user_id = this.$route.params.id;
        var params= this.$route.params;
        console.log(params);
        var id = user_id.substr(1);
        api.getStructure(id).then(response => {
          this.structure = response;
          console.log(this.structure);
        });
      }
    }
  },
  mounted() {
    this.getStructure();
  }
};
</script>

<style></style>
