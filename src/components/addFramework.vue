<template>
    <span>
        <v-dialog v-model="shower" persistent width="500" >
            <v-card>
                <v-card-title>
                    <p>Create a Curriculum Framework</p>
                    <v-select :items="types" v-model="elements[0]"></v-select>
                    <v-layout>
                        <v-btn @click="elements[0] = !elements[0]">Hey</v-btn>
                        <!-- <v-btn></v-btn> -->
                    </v-layout>
                </v-card-title>
            </v-card>
        </v-dialog>
    </span>
</template>
<script>
export default {
data :() =>{
 return{
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