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
        mini: "AP",
        icon: Info,
        component: AboutUsPage
    },
    {
        path: "/products-page",
        name: "Products Page",
        short: "Products",
        mini: "PP",
        icon: Store,
        component: ProductsPage
    },
    {
        path: "/blog-posts-page",
        name: "Blog Posts Page",
        short: "Blog",
        mini: "BP",
        icon: ViewQuilt,
        component: BlogPostsPage
    },
    {
        path: "/contact-page",
        name: "Contact Page",
        short: "Contact",
        mini: "CP",
        icon: LocationOn,
        component: ContactUsPage
    }
];

const navDropdownMenuRoutes = [
    {
        path: "/user/sign-in",
        name: "Login",
        short: "Login",
        mini: "LP",
        icon: "fingerprint",
        component: LoginPage
    },
    {
        path: "/user/sign-up",
        name: "Register",
        short: "Register",
        mini: "RP",
        icon: "person_add",
        component: RegisterPage
    },
];
const navDropdownUserRoutes = [
    {
        logout: false,
        path: "/user/profile",
        name: "Profile",
        short: "Profile",
        mini: "LP",
        icon: "face",
        component: LoginPage
    },
    {
        logout: false,
        path: "/user/check-order",
        name: "Check Order",
        short: "Check Order",
        mini: "CO",
        icon: "shopping_cart",
        component: RegisterPage
    }
];

export default { navMenuRoutes, navDropdownMenuRoutes, navDropdownUserRoutes };
