<template>
  <span class=" mt-10">
     
      <template v-for="(comittee, index) in comittees">
        <v-flex v-bind:key="comittee.index">
          <v-card class="float-left ml-10   mr-10" width="30%">
            <v-card-actions class="blue ">
              <v-flex>
                <v-layout>
                    <v-text class="headline">Comittee{{ index + 1 }}</v-text>
                    <v-spacer></v-spacer>
                    <notification-bell count=9 />
                </v-layout>
                
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-container>
                <p>Name: {{ comittee.name }}</p>
                
                <!-- <p>gradreqs: {{ frameworks.program_name }}</p> -->
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
  </span>
</template>

<script>
import NotificationBell from 'vue-notification-bell';
import {apiservice} from "../apiservice";
const api = new apiservice();
export default {
components:{
 NotificationBell
}, 
data: () =>{
    return {
        comittees:[],
    }
},
methods:{
    getUserComittes(){
        api.getyourComitee(this.$store.getters.User_id).then((data) =>{
            this.comittees = data.Comitees
            console.log(this.comittees)
        })
    }
},
mounted(){
    
    this.getUserComittes();
}
}
</script>

<style>

</style>