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
    name: "Product",
    exact: false,
    icon: ShoppingCart,
    state: "openComponents",
    component: () => <ProductManagement/>,
    views: [
      {
          path: "/dashboard/product-management/new-product",
          name: "New Product",
          exact: false,
          show: true,
          component: ({history}) => <ProductActionForm history={history}/>
      },
      {
        path: "/dashboard/product-management/view-products",
        name: "Products",
        exact: false,
        show: true,
        component: () => <ProductManagement/>,
    },
  ]
  },
  {
    path: "/dashboard/product-management/new-product",
    name: "New Product",
    exact: false,
    show: true,
    component: ({history}) => <ProductActionForm history={history}/>
  },
  {
    path: "/dashboard/product-management/:id/edit",
    name: "Edit Product",
    exact: false,
    show: true,
    component: ({match, history}) => <ProductActionForm match={match} history={history}/>
  },
  {
    path: "/dashboard/category-management",
    name: "Category",
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