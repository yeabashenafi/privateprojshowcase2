<template>
  <span class=" mt-10">
     
      <template v-for="(comittee, index) in comittees">
        <v-flex v-bind:key="comittee.index">
          <v-card class="float-left ml-10   mr-10 mb-4" width="30%">
            <v-card-actions class="cyan darken-2 white--text" >
              <v-flex>
                <v-layout>
                    <v-text class="headline">Comittee {{ index + 1}}</v-text>
                    <v-spacer></v-spacer>   
                     <v-span @click="viewNotfy()">
                      <notification-bell :count= no[index] :upperLimit="1" :prefixPlus = true />
                     </v-span>
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
      <v-btn @click="press()">click</v-btn>
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
      comittees: [],
      no: [],
      num: 0,
      yourComittee: []
    };
  },
  methods: {
     getUserComittes() {
      //  var my;
      api.getyourComitee(this.$store.getters.User_id).then(data => {
        this.comittees = data.Comitees;

        for(var i=0; i< this.comittees.length; i++){
        api.howManyNotify(this.comittees[i].id).then(response => {
          console.log(response.data.data);
          this.yourComittee.push(response.data.data);
          // this.num = response.data.data.length;
           console.log(this.yourComittee);
          this.no.push(response.data.data.length);
           console.log(this.no + ' :length');
        });
      
      };
        //  console.log(this.no);
        console.log(this.comittees);
        console.log(this.comittees.length);
       
       
      });
    },
    press(){ /// To check the no[] array content
      for(var i=0; i<this.no.length; i++){
        console.log(this.no[i]);
      }
          this.num = this.no[1];
          console.log(this.num)
    },
    viewNotfy(){
      console.log("View Notification");
    }
  },
  mounted() {
    this.getUserComittes();
    // this.holdNotifyCount();
  }
};
</script>

<style></style>
