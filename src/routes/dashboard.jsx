import React from 'react';
import Dashboard from '../views/Dashboard/Dashboard/Dashboard';
import Calendar from '../views/Dashboard/Calendar/Calendar';
import ProductManagement from '../views/Dashboard/Products/ProductManagement';
import CategoryMangement from '../views/Dashboard/Category/CategoryManagement';
import ProductActionForm from '../views/Dashboard/Products/ProductActionForm';

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Category from "@material-ui/icons/Category";

var dashRoutes = [
  {
    path: "/dashboard/dashboard",
    name: "Dashboard",
    exact: true,
    icon: DashboardIcon,
    component: () => <Dashboard/>
  },
  {
    path: "/dashboard/product-management",
    name: "Product Management",
    exact: false,
    icon: ShoppingCart,
    component: () => <ProductManagement/>
  },
  {
    path: "/dashboard/product/add",
    name: "Add New Product",
    exact: false,
    show: true,
    component: () => <ProductActionForm/>
  },
  {
    path: "/dashboard/product/:id/edit",
    name: "Edit Product",
    exact: false,
    show: true,
    component: ({match}) => <ProductActionForm match={match}/>
  },
  {
    path: "/dashboard/category-management",
    name: "Category Management",
    exact: false,
    icon: Category,
    component: () => <CategoryMangement/>
  },
  {
    path: "/dashboard/calendar",
    name: "Calendar",
    exact: false,
    icon: DateRange,
    component: () => <Calendar/>
  },
  { redirect: true, path: "/dashboard", pathTo: "/dashboard/dashboard", name: "Dashboard" }
]

export default dashRoutes;