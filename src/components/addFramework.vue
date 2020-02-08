<template>
    <span>
        <v-dialog v-model="shower" persistent max-width="900"  >
            <v-card widht="100%">
                <v-card-title class="text-center" dark>
                    <v-flex>
                        <p class="display-2">Create a Curriculum Framework</p>
                    </v-flex>
                    
                </v-card-title>
                <v-card-actions>
                    <v-carousel width="100%" class="black" height="1000" >
                        <v-carousel-item class="ml-10 mr-10">
                            <v-container class="fill-height" width="400" align="center" justify-center>
                                
                                <p class="white--text display-1">   Begin the process of adding a new framework</p>
                                
                            </v-container>
                        </v-carousel-item>    
                        <v-carousel-item>
                            <v-container class="fill-height ml-10" width="200" align="center" justify-center>
                                 
                                     <v-text-field
                                outlined
                                widht="200"
                                color="white"
                                v-model="name"
                                label="Program Name">
                            </v-text-field>
                            <v-spacer></v-spacer>    
                                
                                
                                
                            </v-container> 
                        </v-carousel-item>
                        <v-carousel-item>
                             <v-container class="fill-height ml-10 mr-10" width="200" align="center" justify-center>
                                 <v-select
                                 :items="types"
                                 width="200"
                                 mr-10
                                 label="select the type of the program"
                                 >

                                 </v-select>
                             </v-container>    
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-container class="fill-height  mr-10" width="200px" align="center" >
                              <p outlined class="white--text headline">Program Outcome/s(PO)</p>
                                <v-container class="ml-3 mr-5" >
                                <template v-for="(program,index) in po">
                                    <v-flex v-bind:key="program.index">
                                    <v-layout>
                                        <p class="title"> PO {{ index+1 }} </p>
                                        <v-spacer></v-spacer>
                                        <v-icon @click="reducePo()">mdi-minus</v-icon>
                                        <v-icon @click="addPO()">mdi-plus</v-icon>
                                    </v-layout>
                                    <v-text-field outlined label="Name of Outcome" v-model="program.name"></v-text-field>
                                    <v-text-field outlined label="Description" v-model="program.details"></v-text-field>
                                    </v-flex>
                                </template>
                                </v-container>
                            </v-container>    
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-container class="fill-height  mr-10" width="200px" align="center" >
                                <p class="headline white--text">Program Educational Outcome/s(PEO)</p>
                                <v-container class="ml-3 mr-5">
                                    <template v-for="(PEO,index) in peo">
                                    <v-flex v-bind:key="PEO.index">
                                        <v-layout>
                                        <p class="title">PEO{{ index+1 }}</p>
                                        <v-spacer></v-spacer>
                                        <v-icon @click="reducePeo()">mdi-minus</v-icon>
                                        <v-icon @click="addPEO()">mdi-plus</v-icon>
                                        </v-layout>
                                        <v-text-field
                                        outlined
                                        label="Name of Educational Outcome"
                                        v-model="PEO.name"
                                        ></v-text-field>
                                        <v-text-field outlined label="Description" v-model="PEO.details"></v-text-field>
                                        <v-select
                                        multiple
                                        :items="POS"
                                        label="Mapped PO/POs"
                                        v-model="PEO.mappedPO"
                                        ></v-select>
                                    </v-flex>
                                    </template>
                                </v-container>
                            </v-container>    
                        </v-carousel-item>
                        <v-carousel-item>
                          <v-container class="fill-height mr-10 my-5" width="200px" align="center">
                           <p class="white--text headline "> Cource Out Comes(CLO) </p>
                           <v-container  class="ml-3 mr-5">
                          <template v-for="(CLO,index) in clo">
                            <v-flex  v-bind:key="CLO.index">
                          <v-layout>
                                <p class="title white--text" >CLO{{ index+1 }}</p>
                                <v-spacer></v-spacer>
                                <v-icon @click="reduceClo()">mdi-minus</v-icon>
                                <v-icon @click="addCLO()">mdi-plus</v-icon>
                          </v-layout>
                          <v-text-field
                                outlined
                                label="Name of Educational Outcome"
                                v-model="CLO.name"
                          ></v-text-field>
                              <v-text-field outlined label="Description" v-model="CLO.details"></v-text-field>
                              <v-select
                                multiple
                                :items="PEOS"
                                label="Mapped PEO/PEOs"
                                v-model="CLO.mappedPEO"
                              ></v-select>
                            </v-flex>
                          </template>
                           </v-container>
                          </v-container>
                        </v-carousel-item>
                        <v-carousel-item>
                          <v-container class="fill-height mr-10 my-5" width="200px" align="center">
                          <v-flex  width="80%">
                             <div>
                             <v-text-field label="Cource tile"
                                  v-model="title"></v-text-field>
                     <v-text-field label="Cource Code"
                                  v-model="code"></v-text-field>
                          </div>
                          </v-flex>
                          </v-container>
                        </v-carousel-item>
                        
                    </v-carousel>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </span>
</template>
<script>
import {apiservice} from '../apiservice';
const api = new apiservice();
export default {
data :() =>{
 return{
    name:'', 
    types :[
        'Bsc',
        'BA',
        'Msc',
        'Ma',
        'Phd',
    ],
    elements:[
        'false'
    ],
    po: [
        {
          id: "",
          name: "",
          details: "",
        }
      ],
      peo: [
        {
          id:"",
          name:"",
          details:"",
          mappedPO:[]
        }
      ],
      clo: [
        {
        id:"",
        name:"",
        details:"",
        mappedPEO:[]
      }

      ],
      outlines: [
        {
          id: '',
          chapter: '',
          details: ''
        }
      ],
      references: [
                 {
                   id: '',
                   refers_name: ''
                 }       
      ],
      learningMethod: [
        {
          id: '',
          methodName: ''
        }
      ]
      ,
      year: ['1st year', '2nd year', '3rd year' , '4th year', '5th year'],
      semisters: ['semister 1','semister 2','semister 3','semister 4','semister 5','semister 6',
                 'semister 7','semister 8','semister 9','semister 10'],
    shower2: false,
    shower :true,
 }
},
methods:{
    showNew(index){
        console.log(index);
        //this.shower2 = !this.shower2;
        this.elements[index] = false;
        console.log(this.elements[index]);
    },
    okbtn(){
      this.ok = !this.ok;
      this.name ='';
      this.type = '';
      this.background = '';
      this.rational = '';
    },
    addPO() {
    //  window.alert("added a program outcome");
      //this.no_of_PO++;
      this.po.push({});
    },
    addPEO() {
      this.peo.push({});
    },
    addCLO() {
      this.clo.push({});
    },
    addCurriculum() {
      this.ok = true;
      this.setpoID();
      let data={
        program_name:this.name,
        program_type:this.type,
        background:this.background,
        rational:this.rational,
        program_outcome:this.po,
        program_educational_outcome:this.peo,
        course_learning_outcome:this.clo,
        owner:"Admin",

      }
      console.log(data)

      api.addStructure(data).then((data) => {
        console.log(data);
      })
    },
    setpoID() {
      for(var program in this.po){
        console.log(program)
        // this.po[i].id = "po"+(i+1)
      }
    },
    addOutline(){
      this.outlines.push({});
    },
    addReference(){
      this.references.push({});
    },
    addLearningMethod(){
      this.learningMethod.push({});
    },
    reduceReference(){
      if(this.references.length > 1){
         this.references.pop();

      }
    },
    reduceOutline(){
      if(this.outlines.length > 1){
         this.outlines.pop();
      }
    },
    reduceMethod(){
      if(this.learningMethod.length > 1){
         this.learningMethod.pop();
      }
    },
    reduceClo(){
      if(this.clo.length > 1){
         this.clo.pop();
      }
    },
    reducePeo(){
      if(this.peo.length > 1){
         this.peo.pop();
      }
    },reducePo(){
      if(this.po.length > 1){
         this.po.pop();
      }
    }
},
computed:{
//   checkelement: function(index){
//       return this.elements[index];
//       checkelement
//   }
},
}
</script>
<style>

</style>