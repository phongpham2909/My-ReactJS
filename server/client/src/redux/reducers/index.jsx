import { combineReducers } from 'redux';
// Products
import products from './products/products';
import productEditing from './products/productEditing';
import productSearch from './products/productSearch';
import productFilterTable from './products/productFilterTable';
import productSale from './products/productSale';
import productFeatured from './products/productFeatured';
// Client 
import client from './client/client';
import cart from './cart/cart';
import message from './cart/message';
import customers from './client/customers';
import customer from './client/customer';

// Administration
import auth from './administration/auth';
import adminProfile from './administration/adminProfile';

// Category
import categories from './category/categories';
import CategoryEditing from './category/categoryEditing';
import productsFollowCategory from './category/productsFollowCategory';

// Size category
import size from './size/size';
import sizeEditing from './size/sizeEditing';

// Order 
import order from './cart/order';
// Order table admin
import orders from './orders/orders';

const myReducer =  combineReducers({
    // State Products
    products,
    productSale,
    productFeatured,
    productEditing,
    productSearch,
    productFilterTable,
    // State
    auth,
    adminProfile,
    client,
    cart,
    message,
    customers,
    customer,
    // Category
    categories,
    CategoryEditing,
    productsFollowCategory,
    // size
    size,
    sizeEditing,
    order,
    //Orders admin
    orders
    
});

export default myReducer