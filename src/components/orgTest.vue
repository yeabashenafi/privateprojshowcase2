<template>
    <v-container>
        <v-flex>
            <v-card>
                <v-card-title>
                   add Structure
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Office Name" v-model="officename">
                        </v-text-field>
                        <v-text-field label="Role" v-model="role">
                        </v-text-field>
                       
                            <v-btn @click="addOffice()">addOffice</v-btn>
                        <!-- </v-card-action> -->
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-container>

</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
    data(){
        return{
            role: [],
            officename: '',
            pid: '5e4192023bed6a0e48c04067'
        }
    },
    methods: {
        addOffice(){
            const data = {
                officeType: this.officename,
                subOffice: 'follow',
                hasParent: true,
                parentId: this.pid,
                roles: this.role,
                level: 'Kelali',
                organizationId: this.$store.getters.org_id,

            }
        api.addOffices(data).then(response => {
            console.log(response.data);
            // this.$store.commit('setParentid', response.data.result.parentId);
        });
        },
        // getParentInfo(){
        //     const data = {
        //         parentId: this.$store.getters.parentId
        //     }
        //     api.getParentData(data).then(response => {
        //         console.log(response);

        //     })
        // }
    },
    mounted(){
        // this.getParentInfo();
        console.log(this.$store.getters.org_id, this.pid);
    }
}
</script>