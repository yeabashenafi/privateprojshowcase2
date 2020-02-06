<template>
  <nav>
      <v-toolbar>
          <v-app-bar-nav-icon @click="isMenu = !isMenu"></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
        </v-toolbar>
        <v-navigation-drawer>
            
               <div class="blue-grey lighten-4">
                    <v-list-item v-if="isMenu" class="text-center">
                    <v-list-item-content>
                        <v-list-item-title 
                        class="title success--text">Profile</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
               </div>
           <v-divider></v-divider>
             <v-list v-show="isMenu">
             <v-list-item
                v-for="item in items"
               :key="item.title"
               link router :to="item.route">
                 <v-list-item-icon>
                     <v-icon>{{ item.icon }}</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content>
                     <v-list-item-title>{{item.title}}</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
         </v-list>
        </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data () {
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