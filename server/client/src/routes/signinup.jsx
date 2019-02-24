import LoginPage from "../views/Pages/LoginPage/LoginPage";
import RegisterPage from "../views/Pages/RegisterPage/RegisterPage";
import HomePage from "../views/Pages/HomePage/HomePage";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Home from "@material-ui/icons/Home";

const pagesRoutes = [
  {
    path: "/admin/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/admin/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/home-page",
    name: "Home Page",
    short: "Home Page",
    mini: "RP",
    icon: Home,
    component: HomePage
  },
  {
    redirect: true,
    path: "/admin",
    pathTo: "/admin/login-page",
    name: "Register Page"
  }
];

export default pagesRoutes;
