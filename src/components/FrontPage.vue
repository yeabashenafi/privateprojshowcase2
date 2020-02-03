<template>
  <span>
    <v-flex height="80%">
      <v-img :src="require('../kim.jpg')" height="10%" id="back">
        <v-container class="float-right text-center display-4 white--text pl-12"
          >Add or edit</v-container
        >
        <v-container
          class="float-right text-center display-4 white--text  pl-12"
          >curriculum
        </v-container>
        <v-container class="float-right text-center display-4 white--text pl-12"
          >structures to
        </v-container>
        <v-container
          class="float-right text-center display-4 white--text pl-12"
        >
          improve learning
        </v-container>
      </v-img>
    </v-flex>
  </span>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style>
#back {
  /* background-repeat: no-repeat; */
}
</style>
