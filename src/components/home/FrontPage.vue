<template>
  <div row fluid>
    <v-img
      :src="require('../../assets/images/curriculum.jpg')"
      aspect-ratio="1.73"
      id=""
    >
      <!-- <v-spacer></v-spacer> -->
      <v-container fluid class="my-12 mx-9     white--text ">
        <v-flex md10 xs6 class="display-3 my-auto">
          <p class="mt-12">Add or edit curriculums</p>
        </v-flex>
        <v-flex class="mx-6 my-2 title" lg4 md6 xs4>
          By maintaining a unified and well tested way of managing the entire
          process of curriculum development,maintainance and endorsement , we
          aim to improve the process of learning.
        </v-flex>
      </v-container>
    </v-img>
    <v-container grid-list-md fill-height class="my-10">
      <v-layout wrap>
        <v-flex md4 xs12>
          <v-card elevation-21 color="grey lighten-3">
            <v-card-title>
              <v-flex class="text-center">
                <v-icon class="display-2" color="blue">mdi-account</v-icon>
                <p class="headline my-3">Easily manage Curriculums</p>
              </v-flex>
            </v-card-title>
            <v-card-text class="mx-4">
              Hello By maintaining a unified and well tested way of managing the
              entire process of curriculum development,maintainance and
              endorsement , we aim to improve the process of learning.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4>
          <v-card elevation-21 color="grey lighten-3">
            <v-card-title>
              <v-flex class="text-center">
                <v-icon class="display-2" color="blue">mdi-account</v-icon>
                <p class="headline my-3">
                  Customize rules per your organization
                </p>
              </v-flex>
            </v-card-title>
            <v-card-text class="ml-4">
              Yes By maintaining a unified and well tested way of managing the
              entire process of curriculum development,maintainance and
              endorsement , we aim to improve the process of learning.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4>
          <v-card elevation-21 color="grey lighten-3">
            <v-card-title>
              <v-flex class="text-center">
                <v-icon class="display-2" color="blue">mdi-account</v-icon>
                <p class="headline my-3">Be part of committees</p>
              </v-flex>
            </v-card-title>
            <v-card-text class="mx-4]">
              man By maintaining a unified and well tested way of managing the
              entire process of curriculum development,maintainance and
              endorsement , we aim to improve the process of learning.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card color="blue-grey darken-2" class="white--text" width="100%">
      <v-layout>
        <v-flex xs6>
          <v-card color="blue-grey darken-2" flat>
            <v-card-title class="my-3 white--text">
              <p class="display-1">Features of our Platform</p>
            </v-card-title>
            <v-card-text class="white--text mx-5">
              <ul
                style="list-style-type:none;"
                v-for="feature in features"
                v-bind:key="feature"
              >
                <li class="my-2">&#10004;{{ feature }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card color="blue-grey darken-2" elevation-19>
            <p class="my-10 mx-5 white--text">Enter your email</p>
            <v-text-field
              class="mx-12"
              color="white"
              height="4"
              width="20%"
            ></v-text-field>
            <v-btn class="mx-10 grey lighten-2"
              >Subscribe to our newsletter</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      features: [
        "Add or edit Curriculums",
        "Associate files for curriculums",
        "Easily create and use committees",
        "Maintain rules for the formation of these committees",
        "Comment on Curriculums",
        "Generate hardcopies of your curriculums "
      ]
    };
  }
};
</script>

<style></style>
