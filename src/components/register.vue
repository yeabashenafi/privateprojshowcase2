<template>
  <v-dialog v-if="ok">
  

    <v-card
  >
    <v-card-title></v-card-title>
    <v-card-text>
       <h1> Successfully registered</h1>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="okbtn">ok</v-btn>
    </v-card-actions>
  </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      ok: false
    }
  },
  methods: {
    okbtn(){
      this.ok != this.ok;
    }
  }
};
</script>
