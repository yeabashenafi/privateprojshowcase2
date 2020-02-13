<template>
    <v-container>
        <v-flex>
            <v-layout column align-center>
             <v-card width="80%" height="100%" class="mt-8">
                <v-flex>
                    <v-title>
                    <p class="title cyan darken-3 text-md-center white--text pa-7"> Add Commitee </p>
                </v-title>
                </v-flex>
                <v-card-text>
                    <v-form ref="form"> 
                        <v-select label="Name"
                                     :items="username"
                                      v-model="name"></v-select>
                        <v-select label="Select Offices" 
                                  :items="officename"
                                  v-model="office"
                        ></v-select>
                    </v-form>
                </v-card-text>
               <v-flex class="text-center pa-9">
                   
                    <div class="mx-5">
                    <v-btn @click="addCommitee()" class="mx-5 cyan darken-3 white--text" rounded> Add </v-btn>
                    </div>
                <!-- </v-card-actions> -->
               </v-flex>
            </v-card>
            </v-layout>
        </v-flex>
    </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
    data(){
        return {
      name: 'addcommitee',
      officedata: [],
      officename: [],
      userInfo: [],
      username: [],
      getuserid: '',
      getofficeid: '',
     
        };
    },
    methods: {
        addCommitee(){
            for(var i=0; i<this.officedata.length; i++){
                if(this.office == this.officedata[i].officeType){
                    this.getofficeid = this.officedata[i].id;    
                    break;                
                }
            };
             for(i=0; i<this.userInfo.length; i++){
                if(this.name == this.userInfo[i].fullname){
                    this.getuserid = this.userInfo[i].id;
                    break;
                }
            };
           let data = {
                 accId: this.getuserid,
                 offId: this.getofficeid 
            };
           api.addCommittee(data).then( response => {
               console.log(response);
           });
            // console.log('user id '+ this.getuserid + ' office id ' + this.getofficeid);
        },
          getAllUsers() {
           api.getUserInformotion().then(response => {
            this.userInfo = response.data;
            console.log(this.userInfo);
              for(var i=0; i< this.userInfo.length; i++){
                  this.username.push(this.userInfo[i].fullname);
              }
        });
        },
         getOfficeData(){
           let id = '5e4077b18f4973319453f2b5';
           api.getAcademicOffices(id).then(response =>{
            console.log(response);
           this.officedata = response;
           for(var i=0; i < this.officedata.length; i++){
              this.officename.push(this.officedata[i].officeType);
           }
         console.log(this.officename);
         });
    },
    
    },
    mounted(){
        this.getOfficeData();
        this.getAllUsers();

       },
}
</script>