<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card>
      <v-card-title>
        <v-toolbar flat dark color="cyan darken-2">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Notifications</v-toolbar-title>
          <v-spacer></v-spacer>
          <p class="title  text--darken-3">
            {{ comName }}
          </p>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-flex
          class="mx-5 my-3"
          v-for="(request, index) in notInfo"
          :key="request.index"
        >
          <v-card Raised color="grey lighten-4">
            <v-card-title>
              <p>{{ index + 1 }}</p>
              <v-spacer></v-spacer>
              <v-btn
                @click="
                  seeDetail(
                    request.frameworkid,
                    request.req_id,
                    request.userRole
                  )
                "
                >See more</v-btn
              >
            </v-card-title>
            <v-card-actions>
              <p>
                You have recieved an approval request from
                <strong class="font-weight-bold">{{
                  request.senderName
                }}</strong>
                for framework
                <strong class="font-weight-bold">{{
                  request.frameworkname
                }}</strong>
              </p>
              <v-divider></v-divider>
            </v-card-actions>
            <p class="mx-5 title">Your Role:{{ request.userRole }}</p>

            <v-layout>
              <v-container fluid grid-list-sm>
                <v-layout wrap>
                  <v-flex xs6>
                    <v-expansion-panels class="mr-12" elevation="20" xs3>
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <p class="title">Comments:</p>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-card class="mr-10" flat>
                            <v-flex
                              v-for="comment in comments[index]"
                              :key="comment"
                            >
                              <p class="mx-3">{{ comment.body }}</p>
                              <!-- <p class="mx-3">{{getAccountName(comment.accountsId)}}</p> -->
                            </v-flex>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-flex>
                  <v-flex xs6>
                    <v-expansion-panels
                      class="mx-12 grey lighten-4"
                      elevation="20"
                    >
                      <v-expansion-panel class="mx-12">
                        <v-expansion-panel-header>
                          <p class="title">Activity Files:</p>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-card width="100%" class="ml-10 float-right" flat>
                            <v-card-title> </v-card-title>
                            <v-flex>
                              <v-layout class="my-5">
                                <p class="mx-5" v-if="request.alumni">
                                  <strong>Alumni </strong>{{ request.alumni }}
                                </p>
                                <v-spacer></v-spacer>
                                <v-flex
                                  class="mx-5"
                                  v-if="request.alumniFileName"
                                  max-height="5"
                                >
                                  <v-btn
                                    @click="Download(request.alumniFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.alumniFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <p class="mx-5" v-if="request.risk">
                                  <strong>Alumni </strong>{{ request.risk }}
                                </p>
                                <v-spacer></v-spacer>
                                <v-flex
                                  class="mx-5"
                                  v-if="request.riskFileName"
                                  max-height="5"
                                >
                                  <v-btn
                                    @click="Download(request.alumniFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.alumniFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <p class="mx-5" v-if="request.student">
                                  <strong>Alumni </strong>{{ request.student }}
                                </p>
                                <v-spacer></v-spacer>
                                <v-flex
                                  class="mx-5"
                                  v-if="request.studentFileName"
                                  max-height="5"
                                >
                                  <v-btn
                                    @click="Download(request.studentFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.studentFileName }}</p>
                                </v-flex>
                              </v-layout>
                              <v-layout class="my-5">
                                <p class="mx-5" v-if="request.survey">
                                  <strong>Alumni </strong>{{ request.survey }}
                                </p>
                                <v-spacer></v-spacer>
                                <v-flex
                                  class="mx-5"
                                  v-if="request.surveyFileName"
                                  max-height="5"
                                >
                                  <v-btn
                                    @click="Download(request.surveyFileName)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <p>{{ request.surveyFileName }}</p>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-card>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style></style>
