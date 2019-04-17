import LoginPage from "../views/Pages/LoginPage/LoginPage";
import RegisterPage from "../views/Pages/RegisterPage/RegisterPage";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";

const pagesRoutes = [
  {
    path: "/user/sign-up",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/user/sign-in",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    redirect: true,
    path: "/user/login",
    pathTo: "/user/sign-in",
    name: "Register Page"
  }
];

export default pagesRoutes;
