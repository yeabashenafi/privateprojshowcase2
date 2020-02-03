<template>
  <span width="70%">
    <v-container text-md-center>
      <v-card width="100%">
        <v-card-title class="display-1">
          Add a Curriculum Structure
        </v-card-title>
        <v-card-actions width="100%" class="ml-5">
          <v-flex width="100%">
            <v-text-field
              outlined
              full-width
              v-model="name"
              label="Program Name"
            ></v-text-field>
            <v-select
              :items="types"
              v-model="type"
              label="Program Type"
            ></v-select>
            <v-textarea
              outlined
              label="Background"
              v-model="background"
            ></v-textarea>
            <v-textarea
              outlined
              label="Rational"
              v-model="rational"
            ></v-textarea>
            <p outlined class="headline">Program Outcome/s(PO)</p>
            <v-flex class="ml-5">
              <template v-for="PO in no_of_PO">
                <v-flex v-bind:key="PO">
                  <v-layout>
                    <p class="title">PO{{ PO }}</p>
                    <v-spacer></v-spacer>
                    <v-icon @click="addPO()">mdi-plus</v-icon>
                  </v-layout>
                  <v-text-field outlined label="Name of Outcome"></v-text-field>
                  <v-text-field outlined label="Description"></v-text-field>
                </v-flex>
              </template>
              <p class="headline">Program Educational Outcome/s(PEO)</p>
              <v-flex>
                <template v-for="PEO in no_of_PEO">
                  <v-flex v-bind:key="PEO">
                    <v-layout>
                      <p class="title">PEO{{ PEO }}</p>
                      <v-spacer></v-spacer>
                      <v-icon @click="addPEO()">mdi-plus</v-icon>
                    </v-layout>
                    <v-text-field
                      outlined
                      label="Name of Educational Outcome"
                    ></v-text-field>
                    <v-text-field outlined label="Description"></v-text-field>
                    <v-select
                      multiple
                      :items="POS"
                      label="Mapped PO/POs"
                    ></v-select>
                  </v-flex>
                </template>
              </v-flex>
              <p class="headline">Curriculum Learning Outcome</p>
              <v-flex>
                <template v-for="CLO in no_of_CLO">
                  <v-flex v-bind:key="CLO">
                    <v-layout>
                      <p class="title">CLO{{ CLO }}</p>
                      <v-spacer></v-spacer>
                      <v-icon @click="addCLO()">mdi-plus</v-icon>
                    </v-layout>
                    <v-text-field
                      outlined
                      label="Name of Educational Outcome"
                    ></v-text-field>
                    <v-text-field outlined label="Description"></v-text-field>
                    <v-select
                      multiple
                      :items="PEOS"
                      label="Mapped PEO/PEOs"
                    ></v-select>
                  </v-flex>
                </template>
              </v-flex>
            </v-flex>
            <v-flex text-md-center>
              <v-btn color="green" @click="addCurriculum()"
                >Add Curriculum Structure</v-btn
              >
            </v-flex>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-container>
  </span>
</template>

<script>
export default {
  data: () => {
    return {
      no_of_PO: 1,
      no_of_PEO: 1,
      no_of_CLO: 1,
      types: [
        "High School",
        "Bsc. Degree",
        "Ba. Degree",
        "Msc. (PG)",
        "PHD. (PG)",
        "Doctoral (PG)"
      ],
      name: "",
      type: "",
      background: "",
      rational: "",
      po: [
        {
          name: "",
          details: ""
        }
      ]
    };
  },
  methods: {
    addPO() {
      window.alert("added a program outcome");
      this.no_of_PO++;
    },
    addPEO() {
      this.no_of_PEO++;
    },
    addCLO() {
      this.no_of_CLO++;
    },
    addCurriculum() {
      this.console.log(this.po);
    }
  },
  computed: {
    POS: function() {
      var x = [];
      for (var i = 1; i <= this.no_of_PO; i++) {
        x.push("PO" + i);
      }
      return x;
    },
    PEOS: function() {
      var y = [];
      for (var j = 1; j <= this.no_of_PEO; j++) {
        y.push("PEO" + j);
      }
      return y;
    }
  }
};
</script>

<style></style>
