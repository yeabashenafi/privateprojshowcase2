<template>
    <v-layout row>
    <v-flex class="col pa-4 ma-5 align-center">
      <v-card class="mt-5 mx-auto py-5" width="50%" height="501">
        <v-card-title class="pa-3">
          <v-container>
            <p class="my-3 indigo--text text--lighten-2 text-center display-3 headline">
              Institute Admin Log in
            </p>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Username" v-model="username"> </v-text-field>
            <v-text-field
              label="Password"
              required
              v-model="password"
            ></v-text-field>
            <p class="red--text">{{ errmessage }}</p>
          </v-form>
        </v-card-text>
        <v-actions>
             <v-flex class="mx-5 text-center">
                <v-btn text class="success text-md-center" rounded @click="logIn"
              >Login</v-btn>
            </v-flex>
        </v-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
    data(){
        return{
            username: '',
            password: ''
        }
    }
}
</script>