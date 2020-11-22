import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from "../components/UserDashboard.vue";
import store from "../store";

Vue.use(VueRouter);
function guardRoute(to, from, next) {
  if (store.getters.logged && store.getters.usertype == "User") {
    next();
  } else {
    next({
      name: "login"
    });
  }
}
function isLoggedAdmin(to,from,next){
  if(store.getters.logged && store.getters.usertype == "Admin"){
    next();
  }
  else{
    next({
      name: "home"
    })
  }
}
function notLogged(to,from,next){
  if(!store.getters.logged){
    next();
  }
  else{
    next({
      name:"home"
    });
  }
}
// function requireAuth(to,from,next){
//   if(store.getters.logged){
//     next();
//   }else{
//   next('/login');
// }
// }
const routes = [
  {
    path: "/view",
    name: "view",
    component: () => import("../views/View.vue")
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: () => import("../components/adminlogin.vue")
  },
  {
    path: "/addOrgn",
    name: "addorganization",
    component: () => import("../views/addOrgn.vue")
  },
  {
    path: "/viewUsers",
    name: "viewUsers",
    component: () => import("../components/viewUsers.vue")
  },
  // {
  //   path: "/addcommitee",
  //   name: "addcommitee",
  //   component: () => import("../components/addcommitee.vue")
  // },
  {
    path: "/testRegister",
    name: "testRegister",
    component: () => import("../components/testRegister.vue")
  },
  {
    path: "/addNewStructure",
    name: "addnewsturcture",
    component: () => import("../components/addFramework.vue")
  },
  // {
  //   path: "/orgDashboard",
  //   name: "orgdashboard",
  //   component: () => import("../views/orgDash.vue")
  // },
  {
    path: "/addOrgStructure",
    name: "addOrgStructure",
    component: () => import("../components/addOrgStructure.vue")
  },
  {
    path: "/AdminDash",
    name: "AdminDash",
    component: () => import("../views/AdminDash.vue"),
    beforeEnter: isLoggedAdmin,
    children:[
      {
        path:'/addCommittee',
        name:"AddCommittee",
        component: () => import("../components/adminDash/addCommittee"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/AddRules',
        name:"addrules",
        component: () => import("../components/adminDash/addRules.vue"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/registerUsers',
        name:"addrules",
        component: () => import("../components/adminDash/registerUser.vue"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/AllUsers',
        name:"allusers",
        component: () => import("../components/adminDash/allUser.vue"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/OrgStructure',
        name:"editstrurcture",
        component: () => import("../components/adminDash/ManageStructure.vue"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/MyAccount',
        name:"myaccount",
        component: () => import("../components/adminDash/MyAccount.vue"),
        beforeEnter:isLoggedAdmin
      },
      {
        path:'/AddNewComponent',
        name:"addComponent",
        component: () => import("../components/adminDash/addComponent.vue"),
        beforeEnter:isLoggedAdmin
      }
    ]
    // meta: {
    //   permision : 'admin'
    // }
  },
  {
    path: "/orgTest",
    name: "orgTest",
    component: () => import("../components/orgTest.vue")
  },
  {
    path: "/view:id/request/:request/role/:role",
    name: "viewStructure",
    component: () => import("../components/ViewSpecific/ViewSpecific.vue"),
    beforeEnter: guardRoute
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "UserDashboard",
    component: dashboard,
    beforeEnter: guardRoute,
    children: [
      {
        path: "/yourOrganization",
        name: "yourOrganization",
        component: () => import("../components/YourOrganization.vue"),
        beforeEnter: guardRoute
      },
      {
        path: "/editProfile",
        name: "editProfile",
        component: () => import("../components/editProfile.vue"),
        beforeEnter: guardRoute
      },
      {
        path: "/addCurriculum",
        name: "addCurriculum",
        component: () => import("../components/AddCurrContent.vue"),
        beforeEnter: guardRoute
      },
      {
        path: "/yourCommittees",
        name: "yourCommittees",
        component: () => import("../components/committees/yourComitees.vue"),
        beforeEnter: guardRoute
      },
      {
        path: "/ViewCurriculums",
        name: "yourCurriculums",
        component: () => import("../components/ViewCurr.vue"),
        beforeEnter: guardRoute
      },
      {
        path: "/addAssessment",
        name: "addAssesment",
        component: () => import("../components/needAssesment.vue"),
        beforeEnter: guardRoute
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogView.vue"),
    beforeEnter: notLogged
  },
  {
    path: "/addCurriculumStructure",
    name: "addCurriculum",
    component: () => import("../views/AddCurriculum.vue")
  },
  {
    path:'/platformAdmin',
    name:'platformAdmin',
    component:() => import("../views/platform.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
