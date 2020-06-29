<template >
  <v-container fluid class="grey lighten-1" >
    <v-layout column>
      <v-flex xs12>
        <div class="div1" >
          <v-layout align-end justify-center row fill-height>
            <div class="item elevation-5 justify-center"><v-icon class="">mdi-heart</v-icon></div>
            <div class="item elevation-5 ">{{h}}</div>
            <div class="item elevation-5 ">{{w}}</div>

          </v-layout>
        </div>
      </v-flex>
      
    </v-layout>
    
  </v-container>
</template>
<script>
  export default{
    data:() =>{
      return{
        h:window.innerHeight,
        w:window.innerWidth,
      }
    },
    mounted(){
      window.addEventListener('resize',() => {
        this.h = window.innerHeight;
        this.w = window.innerWidth;
      })
    }
  }
</script>
<style scoped>
.container {
  /* padding-top: 5.75%; */
}
.div1{
  height:350px;
}
.item{
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
</style>
