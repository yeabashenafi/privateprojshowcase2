<template>
    <v-container>
        <template v-for="(structure, index) in structures">
             <v-card v-bind:key="structure.index">
            <v-card-title>
                <h2>Structure {{ index }}</h2>
                <v-card-text>

                </v-card-text>
            </v-card-title>
        </v-card>
        </template>
       
    </v-container>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
    data(){
  return {
      token: '',
      structures: []
  }
    },
    methods: {
  getStructures(){
        const token2 = this.$store.getters.token;
        api.getData(token2).then((res)=>{
            this.structures = res;
            console.log(this.structures);
        });
        }
    },
    mounted(){
        this.getStructures();
    }
};
</script>