import ProductsPage from "../views/Pages/ProductsPage/ProductsPage";
import AboutUsPage from "../views/Pages/AboutPage/AboutUsPage";
import BlogPostsPage from "../views/Pages/BlogPostsPage/BlogPostsPage";
import ContactUsPage from "../views/Pages/ContactPage/ContactUsPage";
import LoginPage from "../views/Pages/LoginPage/LoginPage";
import RegisterPage from "../views/Pages/RegisterPage/RegisterPage";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Info from "@material-ui/icons/Info";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";

const navMenuRoutes = [
    {
        path: "/about-page",
        name: "About Page",
        short: "About",
        mini: "RP",
        icon: Info,
        component: AboutUsPage
    },
    {
        path: "/products-page",
        name: "Products Page",
        short: "Products",
        mini: "RP",
        icon: Store,
        component: ProductsPage
    },
    {
        path: "/blog-posts-page",
        name: "Blog Posts Page",
        short: "Blog Posts",
        mini: "RP",
        icon: ViewQuilt,
        component: BlogPostsPage
    },
    {
        path: "/contact-page",
        name: "Contact Page",
        short: "Contact",
        mini: "RP",
        icon: LocationOn,
        component: ContactUsPage
    },
];

const navDropdownMenuRoutes = [
    {
        path: "/admin/login-page",
        name: "Login Page",
        short: "Login",
        mini: "LP",
        icon: "fingerprint",
        component: LoginPage
    },
    {
        path: "/admin/register-page",
        name: "Register Page",
        short: "Register",
        mini: "RP",
        icon: "person_add",
        component: RegisterPage
    },
];

export default { navMenuRoutes, navDropdownMenuRoutes };
