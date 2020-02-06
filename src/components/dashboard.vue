<template>
  <v-card width="256" height="100%" >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Profile
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
     
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
    data() {
      return {
          isMenu: false,
        items: [
          { title: 'Account Settings', icon: 'mdi-view-dashboard', route:'/' },
          { title: 'Home', icon: 'mdi-image', route:'/'},
          { title: 'Add Curriculum', icon: 'mdi-help-box', route:'/addCurriculumStructure'},
          {title:'Edit', icon:'mdi-image', route: '/addCurriculumStructure'}
        ]
        // right: null,
      }
    }
};
</script>