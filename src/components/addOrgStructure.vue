<template>
  <v-container>
    <v-card class="mt-2 mb-5 pt-6 pb-4">
      <v-card-title>
        <v-flex>
          <p class="display-1" align="center">
            Add The Curriculum Approval Structure of the Organization
          </p>
        </v-flex>
      </v-card-title>
      <v-form>
        <p class="title ml-5">Organization Name</p>
        <v-container>
          <v-flex class="text-center">
            <p class="headline gray light">Highest Body Name</p>
          </v-flex>
          <v-container class="ml-5 mr-5">
            <v-layout class="">
              <v-text-field
                label="Add the name of the Highest Body"
                v-model="offices[0].name"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                disabled
                filled
                label="Highest Body"
                class="mr-5"
              ></v-text-field>
            </v-layout>
            <v-layout>
              <v-btn @click="addParent()">Add body</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="mr-5" @click="addOffice()">Add Child</v-btn>
            </v-layout>
          </v-container>
        </v-container>
            <v-flex class="text-center">
              <p class="title cyan--text text-darken-3">
               If the office have <strong class="red--text">more than one sub office</strong> use the following field </p>
            </v-flex>
        <template v-for="(office, index) in offices">
          <v-container
            class=" mr-5 mt-10 grey"
            filled
            v-bind:key="office.index + 1"
          >
            <v-flex class="text-center" align-center light max-width="30%">
              <p class="headline" widht="30%">Child{{ index + 1 }}</p>
            </v-flex>
            <v-flex>
              <v-layout class="ml-3 mr-5">
                <v-text-field label="Add the name of the office"></v-text-field>
                <v-spacer></v-spacer>
                <v-text-field :label="offices[0].name" filled></v-text-field>
              </v-layout>
            </v-flex>
          </v-container>
        </template>
        <v-flex class="text-center ma-5 mb-10">
          <v-btn class="success white--text" rounded>Add The Structure</v-btn>
        </v-flex>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import {apiservice} from '../apiservice';
const api = new apiservice();
export default {
  data: () => {
    return {
      offices: [
        {
          Name: "",
          no: 1
        },
      ],

      parentId: '',
      tempId: ''
    };
  },
  methods: {
    addOffice() {
      this.offices.push([
        {
          Name: "",
          no: 1
        }
      ]);
    },
    addParent(){
      let data = {
        officeType: this.offices.Name,
        parentId: this.parentId,
        organizationId: this.$store.getters.org_id,
      };
      api.addOffices(data).then( response => {
        console.log(response);
        this.tempId = response.data.id;
      });
    }
    // addSecondaryRole(index) {
    //   this.offices[index + 1].Roles.push([""]);
    // }
  },
  computed: {
    Offices: function() {
      return this.offices.length;
    }
  }
};
</script>
