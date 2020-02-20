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
            <v-btn class="ml-5 blue lighten-5" @click="show('Type')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Backgorund:</p>
            <p class="headline">{{ structure.background }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Backgorund')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout class="ml-10">
            <p class="headline">Rational:</p>
            <p class="headline">{{ structure.rational }}</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Rational')" text
              >comment</v-btn
            >
          </v-layout>
          <v-layout>
            <p class="headline ml-10">Program Educational Outcome</p>
            <v-btn class="ml-5 blue lighten-5" @click="show('Program Educational Outcome')" text
              >comment</v-btn
            >
          </v-layout>
          <template
            v-for="(Edoutcome, index) in structure.program_educational_outcome"
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
            <v-btn class="ml-5 blue lighten-5" @click="show('Course Learning Outcome')" text
              >comment</v-btn
            >
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
        <v-card width="50%" class="mt-12 pt-8" >
          <v-card-text>
             <v-flex >
              <v-textarea label="Write General Comment here"
                           outlined
                           v-model="general"></v-textarea> 
          <v-btn color="success white--text ml-12" align-self-left 
               @click="submitGeneralComment()"> Submit comments</v-btn>
         </v-flex>
          </v-card-text>
        </v-card>
      </v-card-actions>
      <hr/>
      <v-layout class="mx-12 mb-12 pb-12 mt-6">
        <v-btn color="success white--text" align-self-left> Approved</v-btn>
        <!-- <v-btn color="success white--text ml-12" align-self-left 
               @click="submitComment()"> Submit comments</v-btn> -->
      </v-layout>
    </v-card>
    <v-dialog v-model="visible" width="50%">
      <v-card>
        <v-card-title>
          Write your comment
        </v-card-title>
        <v-card-text>
          <v-textarea label="your comment"
          v-model="receipant"></v-textarea>
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
      visible: false,
      comment: [],
      general: '',
      receipant: '',
      topic: ''
    };
  },
  methods: {
    // send() {
    //   this.visible = false;
      
    //   this.comment.push( this.topic + " : " + this.receipant);
    //   console.log(this.comment);
    //   this.receipant = ''
    // },
    getStructure() {
      {
        //var token = this.$store.getters.token;
        var user_id = this.$route.params.id;
        var id = user_id.substr(1);
        api.getStructure(id).then(response => {
          this.structure = response;
          console.log(this.structure);
        });
      }
    },
    // submitComment(){
    //     var user_id = this.$route.params.id;
    //     var id = user_id.substr(1);
    //   let data = {
    //     comment: this.comment,
    //     currId: id,
    //     userId: this.$store.getters.User_id
    //   };
    //   console.log(data);
    // },
    // show(text){
    //   this.visible = true;
    //   this.topic = text;
    // }
    submitGeneralComment(){
       var user_id = this.$route.params.id;
        var id = user_id.substr(1);
      let data = {
        genComment: this.general,
        currId: id,
        userId: this.$store.getters.User_id
      }
      console.log(data);
    }
  },  
              
  mounted() {
    this.getStructure();
  }
};
</script>

<style></style>
