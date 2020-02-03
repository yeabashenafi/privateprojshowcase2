<template>
  <v-container class="home">
   <!-- <h1 style="margin-left=90px">Conntainer</h1> -->
   <login/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import login from '../components/login';
export default {
 data(){

 },
 components: {
     login
 }

};
</script>

