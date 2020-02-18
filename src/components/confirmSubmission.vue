<template>
  <span>
      <v-dialog v-model="show">
          <v-card>
              <v-card-title class="headline">
                  Confirm Curriculum framework Approval Sending{{frameworks.program_name}}
              </v-card-title>
              <v-card-text v-model="name"> heyey</v-card-text>
          </v-card>
      </v-dialog>
  </span>
</template>

<script>
export default {
    data:() =>{
        return{
            show:true,
        }
    }
}
</script>

<style>

</style>