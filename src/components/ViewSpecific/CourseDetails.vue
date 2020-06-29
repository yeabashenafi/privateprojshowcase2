<template>
  <span>
    {{currid}}{{course.length}}
      <v-card flat>
          <v-card-title>
              <v-flex class="text-center">
                <p class="display-1 mx-5">Course Details</p>
                <v-divider class="black"></v-divider>
              </v-flex>
          </v-card-title>
          
          
              <template v-for="(c,index) in course">
                <v-flex :key="index" md12>
              <v-layout >
                <v-flex class="font-weight-black headline">{{index+1}}. {{ c.title }}</v-flex>
              </v-layout>
              <v-container class="">
               <v-layout>
                  <p class="title font-weight-bold">Course Code:</p>
                  <p class="mt-1">{{ c.code }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">contact Hour :</p>
                  <p class="mt-1">{{ c.contactHour }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">class Year :</p>
                  <p class="mt-1">{{ c.classYear }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">semister :</p>
                  <p class="mt-1">{{ c.semister }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">Learning Method :</p>
                  <p class="mt-1">{{ c.learningMetgod }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">Course Policies :</p>
                  <p class="mt-1">{{ c.coursePolicies }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">Grading Scale :</p>
                  <p class="mt-1">{{ c.gradingScale }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">Tools for the course :</p>
                  <p class="mt-1">{{ c.tools }}</p>
                </v-layout>

                <v-layout>
                  <p class="title font-weight-bold">Description about the course :</p>
                  <p class="mt-1 font-weight-regular">{{ c.description }}</p>
                </v-layout>
                <v-layout>
                  <p class="title font-weight-bold">Pre-Requesites :</p>
                  <p class="mt-1">{{ c.pre_requisites }}</p>
                </v-layout>
                <p class="title font-weight-bold">Outline:</p> 
                 <template v-for="chapter in c.outlines">
                  <ul class="mx-2" :key="chapter">
                    <v-flex>
                      <li>
                        <v-layout class="">
                          <p class="title pl-3 font-italic">{{ chapter.chapter_name }}</p>
                        </v-layout>
                        <p class="font-weight-black ">Description:</p>

                        <p class="font-weight-medium pl-3">
                          {{ chapter.desc }}
                        </p>
                      </li>
                    </v-flex>
                  </ul>
                </template>
                <p class="title font-weight-bold">Assesment Methods:</p>
                <template v-for="assesment in c.assessment">
                  <ul class="mx-2" :key="assesment">
                    <v-flex>
                      <li>
                        <v-layout class="">
                          <p class="title pl-3">{{ assesment.method }}</p>
                        </v-layout>
                        <p class="font-weight-black ">Weight:</p>

                        <p class="font-weight-medium pl-3">
                          {{ assesment.weight }}
                        </p>
                      </li>
                    </v-flex>
                  </ul>
                </template>
                </v-container>
                </v-flex>
                </template>
         
      </v-card>
  </span>
</template>

<script>
import {apiservice} from "../../apiservice";
const api = new apiservice();
export default {
  props:{
    currid:{
      type:String
    }
  },
  data:() => {
    return{
      course:[]
    }
    
  },
  methods:{
    getCourses(){
      api.getCourse(this.currid).then(response => {
            console.log(response);
            this.course = response.data;
            });
    },
  },
  mounted (){
    // this.getCourses();
    console.log(this.currid);
    api.getCourse(this.currid).then(response => {
            console.log(response);
            this.course = response.data;
            });
    
  }

}
</script>

<style>

</style>