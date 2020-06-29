<template>
  <span>
    <v-layout wrap>
      
        
        
            <v-flex md4 sm6 xs12>
              <v-btn
                class="elevation-14"
                color="success white--text"
                raised
                outlined
                elevation-14
                @click="checkConfirmation()"
              >
                Endorse</v-btn
              >
            </v-flex>
            <v-flex md4 sm6 xs12>
              <v-btn
                @click="generatePdf()"
                class="elevation-14"
                dark
                raised
                outlined
                color="primary lighten-2"
                
                >Generate Pdf</v-btn
              >
            </v-flex>
            <v-flex md4 sm6 xs12>
              <v-btn
                color="error white--text"
                class="elevation-14"
                @click="Reject()"
                raised
                outlined
                :disabled="!commentedOn"
                >Reject Curriculum</v-btn>
            </v-flex> 
            <!--   -->
            
          
        
    </v-layout>
    <v-dialog v-model="show">
        <v-card>
          <v-card-title class="teal">
            <v-flex>
              Confirm Endorsement Request
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-flex>
              <p class="mx-12">Curriculum framework name</p>
              <v-flex>
                <v-text-field
                  class="mx-12"
                  v-model="structureName"
                  disabled
                ></v-text-field>
              </v-flex>
              
              <!-- <v-select
                label="Choose Recieving comittee"
                class="mx-12"
                v-show="!ParentCom"
                :items="pcomnames"
                v-model="selp"
              ></v-select> -->
              <v-flex class="text-center">
                <v-btn
                  class="align-center"
                  v-show="!ParentCom"
                  xs6
                  @click="Endorse()"
                  >Send for Endorsment</v-btn
                >
                <v-btn xs6 v-show="ParentCom" @click="accept()"
                  >Accept Curriculum</v-btn
                >
              </v-flex>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </span>
  
</template>

<script>
import {apiservice} from "../../apiservice";
const api = new apiservice();
export default {
data:() => {
  return {
    ParentCom: false,
    show: false,
    structureName:'',
    committeeid:''
  }
},
methods:{
  generatePdf() {
      var id = this.$route.params.id;
      id = id.substr(1);
      // console.log(typeof id);
      api.generatePDF(id).then();
    },
    // gets a curriculum's name from its if
    getCurriculumName(){
        let id = this.$route.params.id.substr(1);
        api.getStructure(id).then((response) => {
          console.log(response.data);
          this.committeeid = response.data.committeeId;
          this.structureName = response.data.program_name;
        })
    },
    getCommitteMembersLength(){

      api.getCommitteeById(this.committeeid).then((response) => {
        return response.members.length;
      })
    },
    checkConfirmation() {
      console.log("hello");
      // var reqid = this.$route.params.request;
      // reqid = reqid.substr(1);

      // var increment = Math.floor((1 / this.memLength) * 100);
      // var perc;
      this.show = true;
      this.ParentCom = true;
      console.log(this.pcomnames);

      // api.getRequestPercentage(this.reqData.id).then(resp => {
      //   perc = resp;
      //   if (perc + increment <= 100) {
      //     perc += increment;
      //     console.log(perc);
      //     this.incrPercent(perc);

      //     this.reqData.endorsedBy.push(this.$store.getters.User_id);
      //     //  console.log(this.reqData.endorsedBy)
      //     //  patch the percentage
      //     api.addEndUser(this.reqData.id, this.reqData.endorsedBy);
      //     api.patchRequestPersentage(reqid, perc).then(response => {
      //       console.log(response);
      //     });
      //     console.log(this.numerator);
      //     console.log(this.increment);

      //     this.show = true;
      //   }
      // });
    },
    Endorse() {
      // var parid;
      var memLength = this.getCommitteMembersLength();
      console.log(memLength);
      // var increment = Math.floor((1 / memLength) * 100);
      // var perc;
      // var reqid = this.$route.params.request;

      // for (var j = 0; j < this.pcomittees.length; j++) {
      //   if (this.selp == this.pcomittees[j].name) {
      //     parid = this.pcomittees[j].id;
      //   }
      // }
      // console.log(parid);
      // reqid = reqid.substr(1);
      // api.Endorse(reqid, parid).then(data => {
      //   // api
      //   //   .createComment(reqid, this.$store.getters.User_id, this.gComment)
      //   //   .then(response => {
      //   //     console.log(response);
      //   //   });
      //   api.getRequestPercentage(this.reqData.id).then(resp => {
      //     perc = resp;
      //     if (perc + increment <= 100) {
      //       perc += increment;
      //       console.log(perc);
      //       this.incrPercent(perc);

      //       this.reqData.endorsedBy.push(this.$store.getters.User_id);
      //       //  console.log(this.reqData.endorsedBy)
      //       //  patch the percentage
      //       api.addEndUser(this.reqData.id, this.reqData.endorsedBy);
      //       api.patchRequestPersentage(reqid, perc).then(response => {
      //         console.log(response);
      //       });
      //       console.log(this.numerator);
      //       console.log(this.increment);

      //       this.show = true;
      //     }
      //   });
      //   console.log(data);
      //   this.show = false;
      // });
    },
},
mounted(){
  console.log(this.$route.params.id);
  this.getCurriculumName();
}
}
</script>

<style>

</style>