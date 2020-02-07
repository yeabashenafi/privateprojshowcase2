<template>
    
        <v-layout height="100%">
      
        
      <v-card width="256" >
          <v-navigation-drawer permanent>
              <v-list-item>
                  <v-list-item-content>
                      <v-list-item-title class="title">Username</v-list-item-title>
                  </v-list-item-content>
                  
              </v-list-item>
              <v-divider></v-divider>
              <v-list nav>
                <v-list-item  link>
                    <v-list-item-icon>
                        <V-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>My Account</v-list-item-title>
                    </v-list-item-content>

                </v-list-item >
                <v-list-item  link @click="addOrganization()">
                    <v-list-item-icon>
                        <V-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Add structure</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                <v-list-item  link @click="addUser()">
                    <v-list-item-icon>
                        <V-icon>mdi-upload-network-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Add user</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                <v-list-item  link>
                    <v-list-item-icon>
                        <V-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>All Users</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
              </v-list>
          </v-navigation-drawer>

      </v-card>
      <v-flex>
          <add-organization v-if="addo"></add-organization>
          <register v-if="addu"></register>
      </v-flex>
      
   
        </v-layout>

  
</template>
<script>
import addOrganization from '../components/addorganization.vue';
import register from '../components/register.vue';
export default {
components:{
    addOrganization,
    register
},
data:() =>{
    return{
        
    items:[
        {title:'My Account',icon:'mdi-account',route:''},
        {title:'Add organizational approval hierarchy',icon:'mdi-account',route:'/addOrgn'},
        {title:'Add User',icon:'mdi-upload-network-outline',route:'addUser()'},
        {title:'All users',icon:'mdi-account',route:''}
    ],
    addo:true,
    addu:false,
    }
},
methods:{
    addUser(){
        this.addo = false,
        this.addu = true
    },
    addOrganization(){
        this.addo = true
        this.addu = false
    }
}   
}
</script>
<style>

</style>