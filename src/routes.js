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
// import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Landing from "views/my-views/Landing.js";
import HumanResources from "views/my-views/HumanResources.js";
import Tools from "views/my-views/Tools.js"
import Index from "views/Index";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2",
  //   component: Index,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-shop",
    component: Landing,
    layout: "/home",
  },
  {
    path: "/humanresources",
    name: "Human Resources",
    icon: "ni ni-chat-round",
    component: HumanResources,
    layout: "/resources",
  },
  {
    path: "/tools",
    name: "Tools by Dept",
    icon: "ni ni-briefcase-24",
    component: Tools,
    layout: "/resources",
  },
  {
    path: "/customerservice",
    name: "Customer Service",
    icon: "ni ni-satisfied",
    component: Index,
    layout: "/admin",
  },
];
export default routes;
