<template>
  <span>
    <v-card class="">
        <v-card-title>
            <v-flex class="text-center">
            <p class="display-1 mx-5 text-capitalize">{{ structure.program_name }}</p>
            <v-divider class="black"></v-divider>
            </v-flex>
      </v-card-title>
      <v-card-actions>
          <v-flex class="ml-3">
              <p class="headline font-weight-bold">1.1 Type:</p>
              <p class="mx-3">{{ structure.program_type }}</p>

              <p class="headline font-weight-bold">1.2 Backgorund:</p>
              <p class="mx-3">{{ structure.background }}</p>

              <p class="headline font-weight-bold">1.3 Rational:</p>
              <p class="mx-3">{{ structure.rational }}</p>
              <p class="headline font-weight-bold">1.4 Grading Methods:</p>
              <p class="mx-3">{{ structure.gradingmethods }}</p>
              <p class="headline font-weight-bold">1.5 Program Outcome</p>
              <template v-for="(PO,index) in structure.program_outcome">
              <ul v-bind:key="index" class="mx-2">
                <v-flex>
                    <li>
                        <v-layout class="">
                            <p class="font-weight-bold pl-3">{{ PO.name }}</p>
                        </v-layout>
                        <p class="font-weight-black ">Details:</p>
                        <ul>
                            <li>
                                <p class="font-weight-medium pl-3">
                                    {{ PO.details }}
                                </p>
                            </li>
                        </ul>
                    </li>
              </v-flex>
            </ul>
          </template>
          <p class="headline font-weight-bold">
            1.5 Program Educational Outcome
          </p>
          <template v-for="(Edoutcome,index) in structure.program_educational_outcome">
            <ul v-bind:key="index" class="mx-2">
              <v-flex>
                <li>
                  <v-layout class="">
                    <p class="font-weight-bold pl-3">{{ Edoutcome.name }}</p>
                  </v-layout>
                  <p class="font-weight-black ">Details:</p>
                  <ul>
                    <li>
                      <p class="font-weight-medium pl-3">
                        {{ Edoutcome.details }}
                      </p>
                    </li>
                  </ul>
                  <p class="font-weight-black">Mapped Pos</p>
                  <ul v-for="PO in Edoutcome.mappedPO" :key="PO">
                    <li>
                      <p class="font-weight-medium pl-3">{{ PO }}</p>
                    </li>
                  </ul>
                </li>
              </v-flex>
            </ul>
          </template>
          <v-layout>
            <p class="headline font-weight-bold">1.6 Course Learning Outcome</p>
          </v-layout>
          <template v-for="(CLoutcome,index) in structure.course_learning_outcome">
            <ul v-bind:key="index" class="mx-2">
              <v-flex>
                <li>
                  <v-layout class="">
                    <p class="font-weight-bold pl-3">{{ CLoutcome.name }}</p>
                  </v-layout>
                  <p class="font-weight-black ">Details:</p>
                  <ul>
                    <li>
                      <p class="font-weight-medium pl-3">
                        {{ CLoutcome.details }}
                      </p>
                    </li>
                  </ul>
                  <p class="font-weight-black">Mapped PEOS</p>
                  <ul v-for="PEO in CLoutcome.mappedPEO" :key="PEO">
                    <li>
                      <p class="font-weight-medium pl-3">{{ PEO }}</p>
                    </li>
                  </ul>
                </li>

              <course-details :currid="structure.id"></course-details>    
              </v-flex>
            </ul>
           
          </template>
          
          </v-flex>
           
      </v-card-actions>
     
    </v-card>
    
      
      <v-footer
        
        absolute
        class="grey lighten-2"
        >
          
          <action-buttons></action-buttons>
        </v-footer>
      
    
    
    
  </span>
</template>

<script>
import {apiservice} from "../../apiservice";
const api = new apiservice();
import ActionButtons from './ActionButtons.vue';
import CourseDetails from './CourseDetails';
export default {
    components:{
        CourseDetails,
        ActionButtons
    },
    props:{
        userid:{
            type:Object
        }
    },
    data:() => {
        return {
            structure:{},
            id:'',
            course:[]
        }
        
    },
    methods:{
        getStructure() {
      
            //var token = this.$store.getters.token;
            let checker = {
              id:this.userid
            };
            console.log(checker);
            var user_id = this.$route.params.id;
            //var params = this.$route.params;
            this.role = this.$route.params.role.substr(1);
            // console.log(params);
            var id = user_id.substr(1);
            api.getStructure(id).then((response) => {
            console.log(response);  
            this.structure = response.data;
            this.id = response.data.id
            
            });
           
        
        },
    },
    mounted(){
        console.log(this.userid);
        this.getStructure()
    }

}
</script>

<style>

</style>