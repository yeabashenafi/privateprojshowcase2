<template>
    
        <v-layout height="100%">
      
        
      <v-card width="256"   >
          <v-navigation-drawer permanent >
              <v-list-item class="blue darken-3"  >
                  <v-list-item-content>
                      <v-list-item-title class="title">Username</v-list-item-title>
                  </v-list-item-content>
                  
              </v-list-item>
              <v-divider></v-divider>
              <v-list nav>
                <v-list-item  link  @click="MyAcc()">
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
                <v-list-item  link >
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
          <register v-if="addu" class="ml-3"></register>
          <my-account v-if="myacc"></my-account>
      </v-flex>
      
   
        </v-layout>

  
</template>
<script>
import MyAccount from '../components/MyAccount'
import addOrganization from '../components/addorganization.vue';
import register from '../components/register.vue';
export default {
components:{
    addOrganization,
    register,
    MyAccount
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
    myacc:false,
    orgnames:[],
    username:'',
    }
},
methods:{
    addUser(){
        this.addo = false;
        this.addu = true;
        this.myacc = false;
    },
    addOrganization(){
        this.addo = true;
        this.addu = false;
        this.myacc = false;
    },
    MyAcc(){
        this.myacc = true;
        this.addo = false;
        this.addu = false;
    }
},

mounted(){
    //this.username = this.$store.getters.User_id;
    console.log(this.username)
}   
}
</script>
<style>

</style>