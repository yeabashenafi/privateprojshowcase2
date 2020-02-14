<template>
  <span>
    <v-container height="100%">
      <v-card width="100%" raised class="align-center">
        <v-card-title class="align-center">
          <v-flex class="text-center">
            <p
              class="display-1 text-uppercase font-weight-thin"
              color="brown lighten-3"
            >
              Add an organization
            </p>
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-flex>
            <v-layout>
              <v-text-field
                label="Name of the organization"
                v-model="name"
                height="30"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field label="Location" v-model="location"></v-text-field>
            </v-layout>
            <v-text-field
              label="Background"
              v-model="background"
            ></v-text-field>
            <v-layout width="50%">
              <v-text-field
                label="Year of establishment"
                v-model="year_of_establishment"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-file-input
                accept="image/"
                prepend-icon="mdi-camera"
                outlined
                label="Logo"
                placeholder="Input the organization's logo"
                v-model="image"
              ></v-file-input>
            </v-layout>
            <v-text-field label="Motto" v-model="Motto"></v-text-field>
            <v-flex class="text-center">
              <v-btn color="success white--text " rounded @click="add()"
                >Add Organization</v-btn
              >
            </v-flex>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-container>
  </span>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => {
    return {
      name: "",
      location: "",
      background: "",
      year_of_establishment: "",
      image: null,
      Motto: ""
    };
  },
  methods: {
    add() {
      let data = {
        Name: this.name,
        location: this.location,
        background: this.background,

        year_of_establishment: this.year_of_establishment,
        Motto: this.Motto
      };
      console.log(data);
      api.addOrganization(data).then(response => {
        console.log(response);
      });
      // const req = {
      //   fullname: this.name + 'admin',
      //   password: this.name + 'pass45'
      // }
      // api.setAdminTo(req).then(res => {
      //  console.log(res);
      // })
    }
  }
};
</script>

<style></style>
