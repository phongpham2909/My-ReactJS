import Dashboard from "../layouts/Dashboard";
import SignInUp from "../layouts/SignInUp";
import Pages from "../layouts/Pages";


var indexRoutes = [
    { path: "/admin", component: SignInUp },
    { path: "/dashboard", component: Dashboard },
    { path: "/", component: Pages },
];

export default indexRoutes;
