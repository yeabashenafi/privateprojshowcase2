<template>
    <v-container>
        <v-flex>
            <v-card>
                <v-card-title>
                    Add Organizational Structure
                </v-card-title>
                <v-card-text>
                 <v-form>
                     <v-text-field label="Enter Offices Name "
                                 v-model="name"
                                 ></v-text-field>
                    <v-select label="Available Offeces"
                              v-model="selectedOffice"
                              ></v-select>
                    <v-btn @click="addOffice()">add office</v-btn>
                 </v-form>
                </v-card-text>
                <v-actions>
                    <v-btn>Finish Level</v-btn>
                </v-actions>
            </v-card>
        </v-flex>
    </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
//import func from '../../vue-temp/vue-editor-bridge';
const api = new apiservice();
export default {
    data(){
        return {
            tempId: '',
            name: '',
            selectedOffice: '',
            officeInfo: [],
            officeName: []
        }
    }, 
    methods: {
        addOffice(){
            let data = {
                officeType: this.name,
                parentId: this.tempId,
                organizationId: this.org_id
            };
            api.
        }
    }
}
</script>