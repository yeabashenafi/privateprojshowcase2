<template>
<v-dialog>
     <v-flex>
        <v-card>
            <h3>{{ pid }}</h3>
        </v-card>
    </v-flex>
</v-dialog>
   
</template>
<script>
export default {
    props: ['Pid'],
    data(){
        return{
            
        }
    }
}
</script>