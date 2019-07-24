import React from 'react';
import Dashboard from '../views/Dashboard/Dashboard/Dashboard';
import Calendar from '../views/Dashboard/Calendar/Calendar';
import CategoryContainer from '../redux/containers/Dashboard/CategoryContainer';
import ProductActionForm from '../views/Dashboard/Products/ProductActionForm';
import CategoryAddFormContainer from '../redux/containers/Dashboard/CategoryAddFormContainer';
import ProfileContainer from '../redux/containers/Dashboard/ProfileContainer';
import OrderDetailContainer from '../redux/containers/Dashboard/OrderDetailContainer';
import OrderPageContainer from '../redux/containers/Dashboard/OrderContainer';
import SizeCategoryContainer from '../redux/containers/Dashboard/SizeCategoryContainer';
import SizeCategoryAddformContainer from '../redux/containers/Dashboard/SizeCategoryAddFormContainer';
import CustomerPagContainer from '../redux/containers/Dashboard/CustomerPageContainer';
import CustomerFormContainer from '../redux/containers/Dashboard/CustomerFormContainer';
import ProductContainer from '../redux/containers/Dashboard/ProductContaiter';
import ColorCategory from '../views/Dashboard/ColorCategory/ColorCategory';

// @material-ui/icons
import DashboardIconOutlined from "@material-ui/icons/DashboardOutlined";
import DateRange from "@material-ui/icons/DateRange";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingBasketOutlined from "@material-ui/icons/ShoppingBasketOutlined"
import CategoryOutlined from "@material-ui/icons/CategoryOutlined";
import ColorLensOutlined from "@material-ui/icons/ColorLensOutlined";
import ListAltOutlined from "@material-ui/icons/ListAltOutlined";
import DragIndicatorOutlined from "@material-ui/icons/DragIndicatorOutlined";
import PersonOutlined from "@material-ui/icons/PersonOutlined";

var dashRoutes = [
  {
    path: "/administration/dashboard",
    name: "Dashboard",
    exact: true,
    icon: DashboardIconOutlined,
    component: () => <Dashboard />
  },
  {
    path: "/administration/profile/:id",
    name: "Dashboard",
    exact: false,
    show: true,
    icon: DashboardIconOutlined,
    component: ({ match, history }) => <ProfileContainer match={match} history={history} />
  },
  {
    path: "/administration/customers-management",
    name: "Customers",
    exact: false,
    show: false,
    icon: PersonOutlined,
    state: "openComponents",
    component: () => <CustomerPagContainer />
  },
  {
    path: "/administration/customer/:id/edit",
    name: "Customer Edit",
    exact: false,
    show: true,
    icon: PersonOutlined,
    state: "openComponents",
    component: ({ match, history }) => <CustomerFormContainer match={match} history={history} />
  },
  {
    path: "/administration/products-management",
    name: "Products",
    exact: false,
    icon: ShoppingCartOutlined,
    state: "openComponents",
    component: () => <ProductContainer />
  },
  {
    path: "/administration/orders",
    name: "Orders",
    exact: false,
    icon: ShoppingBasketOutlined,
    state: "openComponents",
    component: () => <OrderPageContainer />
  },
  {
    path: "/administration/order/:id",
    name: "Orders",
    exact: false,
    show: true,
    component: ({ match, history }) => <OrderDetailContainer match={match} history={history}/>
  },
  {
    path: "/administration/new-product",
    name: "New Product",
    exact: false,
    show: true,
    component: ({ history }) => <ProductActionForm history={history} />
  },
  {
    path: "/administration/:id/edit",
    name: "Edit Product",
    exact: false,
    show: true,
    component: ({ match, history }) => <ProductActionForm match={match} history={history} />
  },
  {
    collapse: true,
    name: "Categories",
    exact: false,
    icon: CategoryOutlined,
    state: "pageCollapse",
    views: [
      {
        path: "/administration/product-category",
        name: "Product",
        mini: ListAltOutlined,
        component: () => <CategoryContainer />
      },
      {
        path: "/administration/size-category",
        name: "Size",
        mini: DragIndicatorOutlined,
        component: () => <SizeCategoryContainer />
      },
      {
        path: "/administration/color-category",
        name: "Color",
        mini: ColorLensOutlined,
        component: () => <ColorCategory />
      },
    ]

  },
  {
    path: "/administration/add-size-category",
    name: "New Size Category",
    exact: false,
    show: true,
    component: ({ history }) => <SizeCategoryAddformContainer history={history} />
  },
  {
    path: "/administration/size/:id/edit",
    name: "Edit Size Category",
    exact: false,
    show: true,
    component: ({ match, history }) => <SizeCategoryAddformContainer match={match} history={history} />
  },
  {
    path: "/administration/new-category",
    name: "New Category",
    exact: false,
    show: true,
    component: ({ history }) => <CategoryAddFormContainer history={history} />
  },
  {
    path: "/administration/category/:id/edit",
    name: "Edit Category",
    exact: false,
    show: true,
    component: ({ match, history }) => <CategoryAddFormContainer match={match} history={history} />
  },
  {
    path: "/administration/calendar",
    name: "Calendar",
    exact: false,
    show: true,
    icon: DateRange,
    component: () => <Calendar />
  },
  { redirect: true, path: "/dashboard", pathTo: "/administration/dashboard", name: "Dashboard" }
]

export default dashRoutes;