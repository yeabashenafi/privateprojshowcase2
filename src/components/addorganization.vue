<template>
  <span>
      <v-container>
          <v-card width="80%" raised>
              <v-card-title ><p class="heading">Add an organization</p></v-card-title>
              <v-card-actions >
                  <v-flex>

                           <v-layout> 
                            <v-text-field label="Name of the organization" height="30"></v-text-field>
                            <v-spacer></v-spacer>
                            <v-text-field label="location"></v-text-field> 
                           </v-layout>
                           <v-text-field label="Background"></v-text-field>
                          <v-layout width="50%">
                              <p>yes</p>
                              <v-text-field label="Year of establishment"></v-text-field>
                              <v-file-input label="Logo of the organization"></v-file-input>
                          </v-layout>
                          <v-text-field label="Motto"></v-text-field>
                          
                          <v-btn color="green float-right">Add Organization</v-btn>
                      
                  </v-flex>
              </v-card-actions>
          </v-card>
      </v-container>d>
  </span>
</template>

<script>
export default {

}
</script>

<style>

</style>