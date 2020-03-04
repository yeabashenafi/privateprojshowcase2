<template>
  <span>
      <v-container class="my-5">
          <v-card>
              <v-card-title class="teal lighten-2">
                  <v-flex class="text-center" >
                      Add need assesment for your curriculum
                  </v-flex>
              </v-card-title>
              <v-card-actions>
                  <v-container class="mx-5 my-10">
                      <v-layout 
                        class="text-center">
                          <v-spacer></v-spacer>
                          <v-select
                            class="my-10 mt-3"
                            :items="currNames"
                            v-model="chosenFr"
                            label="choose your framework"
                            placeholder="Your framework"
                           ></v-select>
                           <v-spacer></v-spacer>
                      </v-layout>
                      
                      <v-layout>
                          <v-textarea
                          class="mx-5 my-5"
                          label="Survey/Questionairre"
                          v-model="survey"
                          placeholder="The feedback from interested parties"
                          height="30"></v-textarea>
                          <v-file-input 
                          accept=".pdf,.doc"
                          v-model="surveyFile"
                          placeholder="Enter file for field"
                          prepend-icon="mdi-file"></v-file-input>
                      </v-layout>
                      <v-layout>
                          <v-textarea
                          placeholder="The feedback form graduate students"
                           label="Alumni feedback"
                           v-model="alumni"
                          class="mx-5 my-5"
                          height="30"></v-textarea>
                          <v-file-input 
                          placeholder="Enter file for field"
                          accept=".pdf,.doc"
                          v-model="alumniFile"
                          prepend-icon="mdi-file"></v-file-input>
                      </v-layout>
                      <v-layout>
                          <v-textarea
                           placeholder="The feedback from currently enrolled students"
                           label="Student feedback"
                           v-model="student"
                          class="mx-5 my-5"
                          height="30"></v-textarea>
                          <v-file-input 
                          placeholder="Enter file for field"
                          accept=".pdf,.doc"
                          v-model="studentFile"
                          prepend-icon="mdi-file"></v-file-input>
                      </v-layout>
                      <v-layout>
                          <v-textarea
                           placeholder="The risk that the specific curriculum faces"
                           label="Risk analysis"
                           v-model="risk"
                          class="mx-5 my-5"
                          height="30"></v-textarea>
                          <v-file-input 
                          v-model="riskFile"
                          placeholder="Enter file for field"
                          accept=".pdf,.doc"
                          prepend-icon="mdi-file"></v-file-input>
                      </v-layout>
                  </v-container>
                  
                  
              </v-card-actions>
              <v-flex class="text-center ">
                  <v-btn color="success" @click="submit" class="my-3">Submit</v-btn>
              </v-flex>
          </v-card>
      </v-container>
  </span>
</template>

<script>
import {apiservice} from "../apiservice";
const api = new apiservice()
export default {
    data:() =>{
        return{
            currfr:[],
            currNames:[],
            survey:'3',
            surveyFile:[],
            alumniFile:[],
            studentFile:[],
            riskFile:[],
            chosenFr:'',
            alumni:'',
            student:'',
            risk:''
        };
    },
    methods:{
        submit(){
            var currId;
          for(var curr in this.currfr){
              if(this.chosenFr == this.currfr[curr].program_name){
                  currId = this.currfr[curr].id;
              }
          }  
          let data ={
              alumni:this.alumni,
              risk:this.risk,
              student:this.student,
              survey:this.survey,
              forcurriculumId:currId
          }
          if(this.riskFile != []){
              api.addAttachements(this.riskFile)
          }
          if(this.surveyFile != []){
              api.addAttachements(this.surveyFile)
          }
          if(this.alumniFile != []){
              api.addAttachements(this.alumniFile)
          }
          if(this.studentFile != []){
              api.addAttachements(this.studentFile)
          }
          
         api.addNeedAssesment(data).then(() =>{
              this.alumni = '';
              this.risk = '';
              this.student = '';
              this.survey = '';
          })
          console.log(data);
        },
        getFrameworks(){
            api.getusersFrameworks(this.$store.getters.User_id).then((data) =>{
                this.currfr = data;
                for(var curr in this.currfr){
                    this.currNames.push(this.currfr[curr].program_name)
                }
                console.log(this.currNames);

            }

            )
        }
    },
    mounted(){
        this.getFrameworks();
    }
}
</script>

<style>

</style>