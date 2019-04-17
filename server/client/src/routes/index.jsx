import Dashboard from '../layouts/Dashboard';
import SignInUp from "../layouts/SignInUp";
import Pages from "../layouts/Pages";
import AuthLoginPage from "../layouts/Auth_Login";

var indexRoutes = [
    { path: "/user", component: SignInUp },
    { path: "/auth", component: AuthLoginPage },
    { path: "/administration", component: Dashboard },
    { path: "/", component: Pages }
];

export default indexRoutes;
