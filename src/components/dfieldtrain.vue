<template>
  <v-container>
    <v-flex>
      <v-card width="75%">
        <v-card-title>
          add adynamic fields
        </v-card-title>
        <v-card-text class="px-5">
          <v-select
            label="Select Fields"
            :items="compName"
            multiple
            v-model="selected"
          ></v-select>
        </v-card-text>
        <v-actions>
          <v-template v-for="(select, index) in selected" :key="select.index">
            <v-flex>
              {{ index }}
              <!-- class="px-5" -->
              <v-text-field
                :label="select"
                :v-model="selected"
                v-model="detail[index]"
                :placeholder="descr[index]"
              ></v-text-field>
            </v-flex>
          </v-template>
          <v-btn @click="addProgram()">Add Program</v-btn>
        </v-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data() {
    return {
      component: [],
      compName: [],
      selected: [],
      descr: [],
      detail: [],
      data: [{}]
    };
  },
  methods: {
    getComp() {
      api.getComponent(this.$store.getters.org_id).then(response => {
        this.component = response.data;
        console.log(this.component);
        for (var i = 0; i < this.component.length; i++) {
          this.compName.push(this.component[i].name);
          this.descr.push(this.component[i].desc);
        }
        console.log(this.compName);
        console.log(this.descr);
      });
    },
    addProgram() {
      // console.log(this.selected);
      // console.log(this.detail);

      for (var i = 0; i < this.detail.length; i++) {
        if (this.detail[i] == undefined) {
          this.detail[i] = "";
        }

        // this.data.push(this.selected[i]);
        // console.log(this.selected[i] + " : " + this.detail[i]);
      }
      // console.log(this.data);
      let data = {
        name: "minilik"
      };

      var object = Object.assign(
        {},
        ...Object.entries({ ...this.selected }).map(([a, b]) => ({
          [b]: this.detail[a]
        }))
      );
      console.log(object);
      const combined = { ...object, ...data }; //combine the two objects
      console.log(combined);
      // api.addStructure(object).then(response => {
      //   console.log(response);
      // })
    }
  },
  mounted() {
    this.getComp();
  }
};
</script>
