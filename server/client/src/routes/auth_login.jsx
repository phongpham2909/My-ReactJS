import LoginAuthPage from "../views/Pages/LoginPage/LoginAuthPage";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";

const pagesRoutes = [
  {
    hide: true,
    path: "/auth/system/sign-in",
    name: "Auth Login Page",
    short: "Auth Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginAuthPage
  },
  {
    redirect: true,
    path: "/auth/sign-in",
    pathTo: "/auth/system/sign-in",
    name: "Auth Login"
  }
];

export default pagesRoutes;
