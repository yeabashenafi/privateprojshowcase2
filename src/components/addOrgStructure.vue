<template>
  <v-container>
    <v-card class="mt-5">
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
              <p>Add roles with in this Academic office</p>
              <v-spacer></v-spacer>
              <v-icon @click="addPrimaryRole()" class="mr-5">mdi-plus</v-icon>
            </v-layout>

            <template v-for="(role, index) in offices[0].Roles">
              <v-flex v-bind:key="role.index" class="mr-10">
                <v-layout>
                  <p>Role{{ index + 1 }}</p>
                  <v-text-field v-model="role[index]"></v-text-field>
                </v-layout>
                <v-spacer></v-spacer>
              </v-flex>
            </template>
            <v-layout>
              <v-btn>Add body</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="mr-5" @click="addOffice">Add Child</v-btn>
            </v-layout>
          </v-container>
        </v-container>
        <template v-for="(office, index) in offices">
          <v-container
            class="ml-5 mr-5 mt-10 grey"
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
              <v-layout>
                <p>Add roles with in this Academic office</p>
                <v-spacer></v-spacer>
                <v-icon @click="addSecondaryRole(index)" class="mr-5"
                  >mdi-plus</v-icon
                >
              </v-layout>

              <template v-for="role in index">
                <v-flex v-bind:key="role.i" class="mr-10">
                  <v-layout>
                    <p>Role{{ role }}</p>
                    <v-text-field v-model="offices[role].Roles"></v-text-field>
                  </v-layout>
                  <v-spacer></v-spacer>
                </v-flex>
              </template>
            </v-flex>
          </v-container>
        </template>
        <v-flex class="text-center ma-5 mb-5">
          <v-btn class="green">Add The Structure</v-btn>
        </v-flex>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => {
    return {
      roles: 1,
      offices: [
        {
          Name: "",
          Roles: [""],
          no: 1
        }
      ]
    };
  },
  methods: {
    addPrimaryRole() {
      this.offices[0].Roles.push([""]);
    },
    addOffice() {
      this.offices.push([
        {
          Name: "",
          Roles: [""],
          no: 1
        }
      ]);
    },
    addSecondaryRole(index) {
      this.offices[index + 1].Roles.push([""]);
    }
  },
  computed: {
    Offices: function() {
      return this.offices.length;
    }
  }
};
</script>
