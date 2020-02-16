<template>
  <v-container>
    <v-card class="mt-2 mb-5 pt-6 pb-4">
      <v-card-title>
        <v-flex>
          <p class="display-1" align="center">
            Add The Curriculum Approval Structure
          </p>
        </v-flex>
      </v-card-title>
      <v-form>
        <p class="title ml-5">Organization Name</p>
        <v-container>
          <v-flex class="text-center">
            <v-text class="headline gray light">{{ Hoffice.name }}</v-text>
          </v-flex>
          <v-container v-show="visible" class="ml-5 mr-5">
            <v-layout class="">
              <v-text-field
                label="Add the name of the Highest Body"
                v-model="Hoffice.name"
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
              <v-btn @click="addHighest()">Add Highest body</v-btn>
              <v-spacer></v-spacer>
            </v-layout>
          </v-container>
          <v-select :items="regNames"></v-select>

          <v-btn class="mr-5" @click="addOffice()">Add Child</v-btn>
        </v-container>
        <v-flex class="text-center">
          <p class="title cyan--text text-darken-3">
            If the office have
            <strong class="red--text">more than one sub office</strong> use the
            following field
          </p>
        </v-flex>
        <template v-for="(office, index) in offices">
          <v-container
            class=" mr-5 mt-10 grey"
            filled
            v-bind:key="office.index"
          >
            <v-flex class="text-center" align-center light max-width="30%">
              <p class="headline" widht="30%">Child{{ index + 1 }}</p>
            </v-flex>
            <v-flex>
              <v-layout class="ml-3 mr-5">
                <v-text-field
                  label="Add the name of the office"
                  v-model="offices[index].Name"
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="officeName"
                  filled
                  disabled
                ></v-text-field>
              </v-layout>
              <v-btn>Add child</v-btn>
            </v-flex>
          </v-container>
        </template>
        <v-flex class="text-center ma-5 mb-10">
          <v-btn class="success white--text" rounded @click="createChild()"
            >Add Offices</v-btn
          >
        </v-flex>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
//import func from '../../vue-temp/vue-editor-bridge';
const api = new apiservice();
export default {
  data: () => {
    return {
      Hoffice: {
        name: "",
        id: ""
      },
      officeName: "",
      visible: true,
      offices: [
        {
          Name: "",
          parentid: ""
        }
      ],
      regOffices: [],
      regNames: [],
      parentId: "",
      tempId: ""
    };
  },
  methods: {
    addHighest() {
      let data = {
        officeType: this.Hoffice.name,
        hasParent: false,
        parentId: "",
        organizationId: this.$store.getters.org_id
      };
      api.addOffices(data).then(response => {
        console.log(response);
        this.Hoffice.id = response.data.id;
        this.visible = false;
      });
    },
    createChild() {
      for (var i = 0; i < this.offices.length; i++) {
        console.log(this.offices[i]);
      }
    },
    addOffice() {
      this.offices.push([{}]);
    },
    addParent() {
      let data = {
        officeType: this.offices.Name,
        parentId: this.tempId,
        organizationId: this.$store.getters.org_id
      };
      api.addOffices(data).then(response => {
        console.log(response);
        this.tempId = response.data.id;
      });
    },
    // addSecondaryRole(index) {
    //   this.offices[index + 1].Roles.push([""]);
    // }

    checkHighest() {
      api.checkHigher().then(response => {
        this.visible = !response.data.hasParent;
        this.officeName = response.data.hasParent.officeType;
      });
    },
    Off() {
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        this.regOffices = response.data;
        console.log(this.regOffices);
        for (var i = 0; i < this.regOffices.length; i++) {
          this.regNames.push(this.regOffices[i].officeType);
        }
      });
    }
  },

  computed: {},
  mounted() {
    this.checkHighest();
    this.Off();
  }
};
</script>
