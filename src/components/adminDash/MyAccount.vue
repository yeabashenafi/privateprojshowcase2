<template>
  <v-container persistent >
    <v-card width="100%" raised>
      
      <v-card-title class="text-center cyan darken-3 mb-7">
        <v-flex min-width="100px">
          <p
            class=" white--text font-weight-bold"
          >
            Edit your Account
          </p>
        </v-flex>
      </v-card-title>
      <v-card-text>
        
          <v-layout wrap>
            <v-flex 
            class = "mx-sm-4 mx-md-5" 
            :class = "{'mx-10':$vuetify.breakpoint.xsOnly}"
            sm5 xs12>
               <v-text-field
                
                v-model="user.username"
                label="username"
                filled
              ></v-text-field>
            </v-flex>
            <v-flex 
            class="mx-sm-4 mx-md-5" 
            :class = "{'mx-10':$vuetify.breakpoint.xsOnly}"
            sm5 xs12>
                
            <v-text-field
              v-model="user.password"
              filled
              label="password"
            ></v-text-field>
            </v-flex>
            <v-flex 
            class="mx-sm-4 mx-md-5" 
            :class = "{'mx-10':$vuetify.breakpoint.xsOnly}"
            sm5 xs12>
              <v-text-field
                v-model="user.email"
                label="E-mail"
                filled
              ></v-text-field>
            </v-flex>
            <v-flex class="mx-sm-4 mx-md-5"
             :class = "{'mx-10':$vuetify.breakpoint.xsOnly}"             
             sm5 xs12>
              <v-text-field
                v-model="user.role"
                filled
                disabled
                label="role"
              ></v-text-field>
            </v-flex>
            
            <!-- <v-text-field
              v-model="user.organization"
              filled
              disabled
              label="organization"
            ></v-text-field> -->
          </v-layout>

          <v-layout>
            
            
            
            <!-- <v-text-field v-model="user[o].Nationality"></v-text-field> -->
          </v-layout>
          <v-flex class="text-center">
            <v-btn round color="success text-white" rounded @click="update()"
              >Submit changes</v-btn
            >
          </v-flex>
        
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { apiservice } from "../../apiservice";
const api = new apiservice();

export default {
  data: () => {
    return {
      user: {}
    };
  },
  methods: {
    // update(){
    //  let data = {
    //    username: this.user.username,
    //    email: this.user.email,
    //    organizationId: this.$store.getters.org_id,
    //    password: this.user.password
    //  }
    //  api.updateAdminData(this.user.id, data).then( response => {
    //    console.log(response);
    //  })
    // },
    getUserData() {
      var userId = this.$store.getters.User_id;
      api.getAdmin(userId)
      .then(response => {
        this.user = response.data;
        console.log(this.user);
      });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style></style>
