<template>
  <v-layout row>
    <v-flex class="col pa-6 ma-5 align-center">
      <v-card class="mt-5 pa-12 mx-auto py-5" width="500px" height="520">
        <v-card-title>
          <v-flex class="text-center">
            <v-text title> {{ this.user[0].fullname }} </v-text>
          </v-flex>
        </v-card-title>

        <v-form>
          <!-- <p class="pa-2">User Name: </p> -->
          <span>
            <v-flex row>
              <v-text-field
                label="User Name"
                v-model="user[0].Username"
                width="100px"
                disabled
                ref="uname"
              >
              </v-text-field>
              <a @click="change_Uname"
                ><v-icon right class="grey--text mt-5">mdi-pencil</v-icon></a
              >
              <a @click="save_Uname"
                ><v-icon right class="grey--text mt-5"
                  >mdi-shield-check</v-icon
                ></a
              >
            </v-flex>
            <v-flex row>
              <v-text-field
                label="Email"
                v-model="user[0].email"
                disabled
              ></v-text-field>
              <v-flex>
                <a><v-icon right class="grey--text mt-5">mdi-pencil</v-icon></a>
                <a @click="change_Uname"
                  ><v-icon right class="grey--text mt-5"
                    >mdi-shield-check</v-icon
                  ></a
                >
              </v-flex>
            </v-flex>
            <p>
              Educational Status
              <a><v-icon right class="grey--text">mdi-pencil</v-icon></a
              ><a @click="change_Uname"
                ><v-icon right class="grey--text md-9"
                  >mdi-shield-check</v-icon
                ></a
              >
              <br />
              <v-radio-group row v-model="user[0].Educational_status" disabled>
                <v-radio label="Bsc" value="Bachelor"></v-radio>
                <v-radio label="Msc" value="Masters"></v-radio>
                <v-radio label="Phd" value="phd"></v-radio>
              </v-radio-group>
            </p>
            <v-flex>
              <a
                style="text-decoration:Underline"
                @click="showchange = !showchange"
                >Change my password ?</a
              > </v-flex
            ><br />
            <v-text-field
              label="Enter Password to confirm the above changes"
              v-model="confirm_change"
            ></v-text-field>
            <v-flex class="text-center">
              <v-btn color="263f44" @click="change_save"
                >Save Changes</v-btn
              ></v-flex
            >
            <v-flex color="red">
              <v-dialog v-model="showchange" width="600px">
                <v-card color="white" class="pa-6">
                  <v-text-field
                    label="Old Password"
                    v-model="old_pass"
                  ></v-text-field>
                  <v-text-field
                    label="New Password"
                    v-model="new_pass"
                  ></v-text-field>
                  <v-text-field
                    label="Confirm Password"
                    v-model="conf_pass"
                  ></v-text-field>
                  <v-flex class="text-center">
                    <v-btn color="primary" @click="change_pass"
                      >Change Password</v-btn
                    >
                  </v-flex>
                </v-card>
              </v-dialog>
            </v-flex>
          </span>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  data: () => ({
    showchange: false,
    user: [],
    u_name: "",
    email_edit: "",
    educ_status: "",
    old_pass: "",
    new_pass: "",
    conf_pass: "",
    confirm_change: ""
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      api.getAccount(this.$store.getters.User_id).then(data => {
        this.user = data;
        console.log(data);
      });
    },
    change_Uname() {
      //   .textfield_enable
      this.$refs.uname.disabled = false;
    },
    save_Uname() {
      this.$refs.uname.disabled = true;
    }
  }
};
</script>
