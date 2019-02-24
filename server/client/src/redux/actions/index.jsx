import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";

// GET request for products
export const actFetchProductsRequest = () => {
    return dispatch => {
        return CallApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
// DELETE request for products
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}
// Actions POST Add product
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        return CallApi('products', 'POST', product).then(res =>{
            dispatch(actAddProduct(res.data));
        });
    }
}
// Actions PUT update product
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCTS,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return CallApi(`products/${product.productID}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}
// Actions EDIT GET product
export const actGetProductRequest = (id) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
// Action Search Products 
export function SEARCH_PRODUCT(keyword){ 
    return {
        type : Types.SEARCH_PRODUCT,
        keyword
    }
}
export function FILTER_TABLE_PRODUCT(filter){ 
    return {
        type : Types.FILTER_TABLE_PRODUCT,
        filter, //filter: filter //FilterName , FilterStatus
    }
}