import HomePage from "../views/Pages/HomePage/HomePage";
import ProductsPage from "../views/Pages/ProductsPage/ProductsPage";
import AboutUsPage from "../views/Pages/AboutPage/AboutUsPage";
import ContactUsPage from "../views/Pages/ContactPage/ContactUsPage";
import BlogPostsPage from "../views/Pages/BlogPostsPage/BlogPostsPage";

const pagesRoutes = [
  {
    path: "/products-page",
    name: "Products Page",
    component: ProductsPage
  },
  {
    path: "/blog-posts-page",
    name: "Blog Posts Page",
    component: BlogPostsPage
},
  {
    path: "/about-page",
    name: "About Page",
    component: AboutUsPage
  },
  {
    path: "/contact-page",
    name: "Contact Page",
    component: ContactUsPage
  },
  {
    path: "/",
    name: "Home Page",
    component: HomePage
  },
  {
    redirect: true,
    path: "/home-page",
    pathTo: "/",
    name: "Home Page",
  }
];

export default pagesRoutes;
