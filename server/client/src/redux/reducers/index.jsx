import { combineReducers } from 'redux';
import products from './products/products';
import productEditing from './products/productEditing';
import productSearch from './products/productSearch';
import productFilterTable from './products/productFilterTable';

const myReducer =  combineReducers({
    products,
    productEditing,
    productSearch,
    productFilterTable
});

export default myReducer