<template>
  <span>
      <v-container>
          <v-card width="80%" raised ml-5>
              <v-card-title ><p class="headline">Add an organization</p></v-card-title>
              <v-card-actions >
                  <v-flex>

                           <v-layout> 
                            <v-text-field label="Name of the organization" v-model="name" height="30"></v-text-field>
                            <v-spacer></v-spacer>
                            <v-text-field label="Location" v-model="location"></v-text-field> 
                           </v-layout>
                           <v-text-field label="Background" v-model="year_of_establishment"></v-text-field>
                          <v-layout width="50%">
                              
                              <v-text-field label="Year of establishment" v-model="year_of_establishment"></v-text-field>
                              <v-file-input label="Logo of the organization"></v-file-input>
                          </v-layout>
                          <v-text-field label="Motto" v-model="Motto"></v-text-field>
                          
                          <v-btn color="green float-right" @click="add()">Add Organization</v-btn>
                      
                  </v-flex>
              </v-card-actions>
          </v-card>
      </v-container>
  </span>
</template>

<script>
export default {
 data :() =>{
     return{
         name:'',
         location:'',
         background:'',
         year_of_establishment:'',
         logo:'',
         Motto:''
     }
 },
 methods:{
     add(){
         let data={
             name:this.name,
             location:this.location,
             background:this.background,
             year_of_establishment:this.year_of_establishment,
             Motto:this.Motto
         }
         console.log(data)
     }
 }
}
</script>

<style>

</style>