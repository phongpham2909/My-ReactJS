import React from 'react';
import HomePage from "../views/Pages/HomePage/HomePage";
import AboutUsPage from "../views/Pages/AboutPage/AboutUsPage";
import ContactUsPage from "../views/Pages/ContactPage/ContactUsPage";
import BlogPostsPage from "../views/Pages/BlogPostsPage/BlogPostsPage";
import CartContainer from "../redux/containers/CartContainer";
import ProductDetailPage from "../views/Pages/ProductsDetailPage/ProductDetailPage";
import ProfileContainer from "../redux/containers/ProfileContainer";
import ProductContainer from "../redux/containers/ProductContainer";
import CheckoutContainer from "../redux/containers/CheckOutContainer";
import CompleteContainer from "../redux/containers/ComplteOrderContainer";
import CheckOutContainer from "../redux/containers/CheckOrderContainer";

const pagesRoutes = [
  {
    path: "/check-order",
    name: "Check Order",
    component: () => <CheckOutContainer/>
  },
  {
    path: "/cart/complete-order",
    name: "Complete Order",
    component: ({match, history}) => <CompleteContainer match={match} history={history}/>
  },
  {
    path: "/cart/checkout",
    name: "Check Out",
    component: ({match, history}) => <CheckoutContainer match={match} history={history}/>
  },
  {
    path: "/profile-page/:id",
    name: "User Profile",
    component: ({match, history}) => <ProfileContainer match={match} history={history}/>
  },
  {
    path: "/products-page",
    name: "Products Page",
    component: ({match, history}) => <ProductContainer match={match} history={history}/>
  },
  {
    path: "/product-detail/:id",
    name: "Product Detail Page",
    component: ({match, history}) => <ProductDetailPage match={match} history={history}/>
  },
  {
    path: "/blog-posts-page",
    name: "Blog Posts Page",
    component: BlogPostsPage
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => <CartContainer/>
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
