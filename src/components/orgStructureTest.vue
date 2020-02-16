<template>
    <v-container>
        <v-flex>
            <v-card>
                <v-card-title>
                    Add Organizational Structure
                </v-card-title>
                <v-card-text>

                    <v-layout>
                        <v-select label="Available Offices"
                              v-model="selectedOffice"
                              :items="officeName"
                        ></v-select>
                        <v-spacer></v-spacer>
                        <v-btn  @click="selectOffice()">Add child to this office</v-btn>    
                    </v-layout>
                    <v-container>
          <v-flex class="text-center">
            <v-text class="headline gray light" >{{Hoffice.name}}</v-text>
          </v-flex>
          <v-container v-show="visible" class="ml-5 mr-5">
            <v-layout class="">
              <v-text-field
                label="Add the name of the Highest Body"
                v-model="Hoffice.name"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                disabled
                filled
                label="Highest Body"
                class="mr-5"
              ></v-text-field>
            </v-layout>
            <v-flex class="text-center">
              <v-btn @click="addOffice()">Add Highest body</v-btn>
              <v-spacer></v-spacer>
            </v-flex>
          </v-container>
                    </v-container>
                <template v-for="(office,index) in coffices">
                  <v-flex v-bind:key="office.index">  
                    <v-form>
                     <v-layout>
                         <v-text>Child:{{index+1}}</v-text>
                         <v-spacer></v-spacer>
                         <v-icon @click="addChild()">mdi-plus</v-icon>
                     </v-layout>   
                     <v-text-field label="Enter Offices Name"
                                 v-model="office.name"

                                 :disabled= check
                                 ></v-text-field>
                                 <p title>If you have at least one office you should select from below list
                                    and click <strong class="red--text">ADD CHILD TO THIS OFFICE and then ADD OFFICE</strong>
                                 </p>
                    
                    </v-form>
                  </v-flex>  
                </template>    
                 
                </v-card-text>
                <v-actions>
                    <v-layout>
                    <v-btn @click="addOffice()" class="mx-5" :disabled="check">add office</v-btn>
                    <v-btn @click="viewOffices()">Get  newly added Offices</v-btn>

                    </v-layout>
                </v-actions>
            </v-card>
        </v-flex>
    </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
//import func from '../../vue-temp/vue-editor-bridge';
const api = new apiservice();
export default {
    data(){
        return {
            check: true,
            tempId: '',
            name: '',
            Hoffice: {
                name: "",
                id: ""
              },
            coffices:[
                {
                name:""
            }
            ],  
            hasParent: true,
            visible: true,
            selectedOffice: '',
            officeInfo: [],
            officeName: []
        }
    }, 
    methods: {
        addChild(){
            this.coffices.push({})
        },
        addOffice(){
            // if(this.tempId == ''){
            //     this.hasParent = false;
            // }
            let data = {
                officeType: this.Hoffice.name,
                parentId: this.Hoffice.id,
                 // hasParent: this.hasParent,
                organizationId: this.$store.getters.org_id
            };
            console.log(data)
        api.addOffices(data).then(response => {
            console.log(response);
            if(this.tempId == ''){
            this.tempId = response.data.id;
            }
        
      })
        },
        viewOffices(){
            api.getAcademicOffices(this.$store.getters.org_id).then( response => {
                // console.log(response);
                this.officeInfo = response;
                console.log(this.officeInfo);
                for(var i=0; i<this.officeInfo.length; i++){
                    this.officeName.push(this.officeInfo[i].officeType);
                }
                 if(this.officeName.length != 0 && this.selectedOffice == ''){
                  return this.check = true;
                }
                else {
                    return this.check = false;
                }
            });
            //Validation on text fields
           
        },
        selectOffice(){
            for(var i=0; i<this.officeInfo.length; i++){
                if(this.selectedOffice == this.officeInfo[i].officeType){
                    this.tempId = this.officeInfo[i].id;
                }  
            }
            console.log(this.tempId);
            // Validation on fields
           if(this.officeName.length != 0 && this.selectedOffice == ''){
                  return this.check = true;
                }
                else {
                    return this.check = false;
                }
        },
        checkHighest(){
            api.checkHigher().then((response) => {
                this.visible = !response.data.hasParent;
                console.log(response);
                this.officeName = response.data.hasParent.officeType;
            })
        },
    },
    mounted() {
this.viewOffices();
this.checkHighest();
// this.getCheck();
    },
    
  
  
  computed: {
    //    check: function(){
    //      if(this.officeName == '' || this.selectedOffice == ''){
    //               return this.check = false;
    //             }
    //             else {
    //                 return this.check = true;
    //             }
    // }
    }
    

};
</script>
