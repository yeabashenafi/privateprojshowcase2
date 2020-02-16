<template>
  <v-container>
    <v-flex>
      <v-card>
        <v-card-title>
          Add Organizational Structure
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Enter Offices Name"
              v-model="name"
              :disabled="check"
            ></v-text-field>
            <p title>
              If you have at least one office you should select from below list
              and click
              <strong class="red--text"
                >ADD CHILD TO THIS OFFICE and then ADD OFFICE</strong
              >
            </p>
            <v-layout>
              <v-select
                label="Available Offeces"
                v-model="selectedOffice"
                :items="officeName"
              ></v-select>
              <v-btn @click="selectOffice()">add child to this office</v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-actions>
          <v-layout>
            <v-btn @click="addOffice()" class="mx-5" :disabled="check"
              >add office</v-btn
            >
            <v-btn @click="viewOffices()">get newly added Offices</v-btn>
          </v-layout>
        </v-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
//import func from '../../vue-temp/vue-editor-bridge';
const api = new apiservice();
export default {
  data() {
    return {
      check: true,
      tempId: "",
      name: "",
      hasParent: true,
      selectedOffice: "",
      officeInfo: [],
      officeName: []
    };
  },
  methods: {
    addOffice() {
      // if(this.tempId == ''){
      //     this.hasParent = false;
      // }
      let data = {
        officeType: this.name,
        parentId: this.tempId,
        // hasParent: this.hasParent,
        organizationId: this.$store.getters.org_id
      };
      api.addOffices(data).then(response => {
        console.log(response);
        if (this.tempId == "") {
          this.tempId = response.data.id;
        }
      });
    },
    viewOffices() {
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        // console.log(response);
        this.officeInfo = response;
        console.log(this.officeInfo);
        for (var i = 0; i < this.officeInfo.length; i++) {
          this.officeName.push(this.officeInfo[i].officeType);
        }
        if (this.officeName.length != 0 && this.selectedOffice == "") {
          return (this.check = true);
        } else {
          return (this.check = false);
        }
      });
      //Validation on text fields
    },
    selectOffice() {
      for (var i = 0; i < this.officeInfo.length; i++) {
        if (this.selectedOffice == this.officeInfo[i].officeType) {
          this.tempId = this.officeInfo[i].id;
        }
      }
      console.log(this.tempId);
      // Validation on fields
      if (this.officeName.length != 0 && this.selectedOffice == "") {
        return (this.check = true);
      } else {
        return (this.check = false);
      }
    }
  },
  mounted() {
    this.viewOffices();
    // this.getCheck();
  },
  computed: {
    //    check: function(){
    //      if(this.officeName == '' || this.selectedOffice == ''){
    //               return this.check = false;
    //             }
    //             else {
    //                 return this.check = true;
    //             }
    // }
  }
};
</script>
