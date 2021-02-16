/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Landing from "views/my-views/Landing.js";
import HumanResources from "views/my-views/HumanResources.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/landing",
    name: "Landing",
    icon: "ni ni-shop",
    component: Landing,
    layout: "/home",
  },
  {
    path: "/humanresources",
    name: "Human Resources",
    icon: "ni ni-tie-bow",
    component: HumanResources,
    layout: "/resources",
  },
  // {
    // NOTE working on itegrating a clickable formatted link for the custom IT ticket request form from Asana
    // path: "",
    // name: "IT Ticket Request",
    // icon: "ni ni-settings",
    // component: ,
    // layout: "",
  // }
];
export default routes;
