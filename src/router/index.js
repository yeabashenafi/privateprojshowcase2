import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from "../components/dashboard.vue";
import store from "../store";

Vue.use(VueRouter);
function guardRoute(to, from, next) {
  if (store.getters.logged) {
    next();
  } else {
    next({
      name: "login"
    });
  }
}
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
  {
    path: "/addcommitee",
    name: "addcommitee",
    component: () => import("../components/addcommitee.vue")
  },
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
  {
    path: "/orgDashboard",

    name: "orgdashboard",
    component: () => import("../views/orgDash.vue")
  },
  {
    path: "/addOrgStructure",
    name: "addOrgStructure",
    component: () => import("../components/addOrgStructure.vue")
  },
  {
    path: "/AdminDash",
    name: "AdminDash",
    component: () => import("../views/AdminDash.vue"),
    beforeEnter: guardRoute
  },
  {
    path: "/orgTest",
    name: "orgTest",
    component: () => import("../components/orgTest.vue")
  },
  {
    path: "/userDashTest",
    name: "userDashTest",
    component: () => import("../views/userDashTest.vue"),
    beforeEnter: guardRoute
  },
  {
    path: "/view:id/request/:request",
    name: "viewStructure",
    component: () => import("../components/ViewSpecific.vue"),
    beforeEnter: guardRoute
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
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
    component: () => import("../views/LogView.vue")
  },
  {
    path: "/addCurriculumStructure",
    name: "addCurriculum",
    component: () => import("../views/AddCurriculum.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
