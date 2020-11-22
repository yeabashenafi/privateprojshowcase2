<template>
  
    <v-container >
      <v-card raised  >
        <v-card-title class="cyan darken-3">
          <v-flex class="text-center">
            <p class="white--text font-weight-bold">Add Organizational Structure</p>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex sm8 xs10>
                <v-select
                  label="Available Offices"
                  v-model="selectedOffice"
                  @select="selectOffice"
                  :items="officeName"
                  :class="{'mx-10':$vuetify.breakpoint.smAndUp}"
                ></v-select>
              </v-flex>
              <v-flex sm4 xs4>
                <v-btn
                  @click="selectOffice()"
                  color="green lighten-2"
                  class="mt-3"
                  >Add child</v-btn
                >
              </v-flex>
            </v-layout>
          </v-container>

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
                <v-flex class="text-center">
                  <v-btn @click="addOffice()">Add Highest body</v-btn>
                  <v-spacer></v-spacer>
                </v-flex>
              </v-container>
            </v-container>
          </v-container>
          <template v-for="(office, index) in coffices">
            <v-flex v-bind:key="office.index" v-show="Children">
              <v-form 
              :class="{'mx-10':$vuetify.breakpoint.smAndUp}">
                <v-layout>
                  <v-text>Child:{{ index + 1 }}</v-text>
                  <v-spacer></v-spacer>
                  <v-icon @click="addChild()">mdi-plus</v-icon>
                </v-layout>
                <v-text-field
                  class="mx-5"
                  label="Enter Offices Name"
                  v-model="office.name"
                ></v-text-field>
              </v-form>
            </v-flex>
          </template>
        </v-card-text>
          <v-layout class="text-center">
            <v-btn @click="addChildren()" class="mx-auto mb-5" :disabled="check"
              >Add offices</v-btn
            >
          </v-layout>
      </v-card>
    </v-container>
  
</template>
<script>
//import func from '../../vue-temp/vue-editor-bridge';
import { apiservice } from "../../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      check: true,
      tempId: "",
      name: "",
      Hoffice: {
        name: "",
        parentId: ""
      },
      coffices: [
        {
          name: ""
        }
      ],
      hasParent: true,
      visible: true,
      Children: false,
      selectedOffice: "",
      officeInfo: [],
      officeName: []
    };
  },

  methods: {
    addChild() {
      this.coffices.push({});
    },
    addChildren() {
      for (var i = 0; i < this.coffices.length; i++) {
        this.coffices[i].parentId = this.tempId;
        this.coffices[i].orgId = this.$store.getters.org_id;
      }
      api.createChildren(this.coffices).then(data => {
        console.log(data);
        this.viewOffices();
      });
      api.getAcademicOffices(this.$store.getters.org_id).then(response => {
        // console.log(response);
        this.officeInfo = response;
        console.log(this.officeInfo.length);
        for (var i = 0; i < this.officeInfo.length; i++) {
          this.officeName.push(this.officeInfo[i].officeType);
          console.log(this.officeName);
        }
      });
      this.coffices = [
        {
          name: ""
        }
      ];
      this.officeName = [];
    },
    addOffice() {
      // if(this.tempId == ''){
      //     this.hasParent = false;
      // }

      let data = {
        officeType: this.Hoffice.name,
        parentId: this.Hoffice.id,
        // hasParent: this.hasParent,
        organizationId: this.$store.getters.org_id
      };
      console.log(data);
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
        console.log(this.officeInfo.length);
        for (var i = 0; i < this.officeInfo.length; i++) {
          this.officeName.push(this.officeInfo[i].officeType);
          console.log(this.officeName);
        }
      });

      console.log("It has been recieved", this.officeName);
      //Validation on text fields
    },
    selectOffice() {
      this.Children = true;
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
    },
    checkHighest() {
      api.checkHigher().then(response => {
        this.visible = !response.data.hasParent;
        console.log(response);
        //this.officeName = response.data.hasParent.officeType;
      });
    }
  },

  //   selectOffice() {
  //     for (var i = 0; i < this.officeInfo.length; i++) {
  //       if (this.selectedOffice == this.officeInfo[i].officeType) {
  //         this.tempId = this.officeInfo[i].id;
  //       }
  //     }
  //     console.log(this.tempId);
  //     // Validation on fields
  //     if (this.officeName.length != 0 && this.selectedOffice == "") {
  //       return (this.check = true);
  //     } else {
  //       return (this.check = false);
  //     }
  //   },
  //   checkHighest() {
  //     api.checkHigher().then(response => {
  //       this.visible = !response.data.hasParent;
  //       console.log(response);
  //       this.officeName = response.data.hasParent.officeType;
  //     });
  //   }
  // },
  mounted() {
    this.viewOffices();
    this.checkHighest();
    // this.getCheck();
  },

  computed() {
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
