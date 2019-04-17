import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";
import { toast } from 'react-toastify';
import { css } from 'glamor';
import * as Message from "../constants/message";

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
// GET request for product Sale
export const actFetchProductSaleRequest = () => {
    return dispatch => {
        return CallApi('productsale', 'GET', null).then(res => {
            dispatch(actFetchProductSale(res.data))
        });
    }
}
export const actFetchProductSale = (productsale) => {
    return {
        type: Types.PRODUCT_SALE,
        productsale
    }
}
// GET request for product Featured
export const actFetchProductFeaturedRequest = () => {
    return dispatch => {
        return CallApi('productfeatured', 'GET', null).then(res => {
            dispatch(actFetchProductFeatured(res.data))
        });
    }
}
export const actFetchProductFeatured = (productfeatured) => {
    return {
        type: Types.PRODUCT_FEATURED,
        productfeatured
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
        return CallApi('products', 'POST', product).then(res => {
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
export function SEARCH_PRODUCT(keyword) {
    return {
        type: Types.SEARCH_PRODUCT,
        keyword
    }
}
export function FILTER_TABLE_PRODUCT(filter) {
    return {
        type: Types.FILTER_TABLE_PRODUCT,
        filter, //filter: filter //FilterName , FilterStatus
    }
}
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessageCart = (msg) => {
    return {
        type: Types.CHANGE_MESSAGE,
        msg
    }
}
export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
// GET request for customers
export const actFetchCustomersRequest = () => {
    return dispatch => {
        return CallApi('customers', 'GET', null).then(res => {
            dispatch(actFetchAllCustomer(res.data))
        });
    }
}
export const actFetchAllCustomer = (customers) => {
    return {
        type: Types.FETCH_ALL_CUSTOMER,
        customers
    }
}
// GET request for customer by ID
export const actFetchCustomerByIdRequest = (id) => {
    return dispatch => {
        return CallApi(`customer/${id}`, 'GET', null).then(res => {
            dispatch(actFetchCustomer(res.data))
        });
    }
}
export const actFetchCustomer = (customer) => {
    return {
        type: Types.FETCH_CUSTOMER,
        customer
    }
}
// Actions POST update product
export const actUpdateInfoCustomer = (customer) => {
    return {
        type: Types.UPDATE_INFO_CUSTOMER,
        customer
    }
}
export const actUpdateInfoCustomerRequest = (customer) => {
    return dispatch => {
        return CallApi(`customer/${customer.customerID}`, 'PUT', customer).then(res => {
            if (res.status === 200) {
                dispatch(actUpdateInfoCustomer(res.data));
                toast(Message.MSG_UPDATE_CUSTOMER_SUCCESS, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: css({
                        background: '#43a047 !important',
                        color: '#fff !important',
                        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                    }),
                    progressClassName: css({
                        background: '#fff !important'
                    })
                });
                setTimeout((e) => { window.location.reload() }, 2000);
            }
            else {
                toast.error(Message.MSG_UPDATE_CUSTOMER_FAIL, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                setTimeout((e) => { window.location.reload() }, 2000);
            }

        });
    }
}
// Category actions
export const fetchAllCategory = (categories) => {
    return {
        type: Types.FETCH_ALL_CATEGORY,
        categories
    }
}
export const actionFetchCategoryRequest = () => {
    return dispatch => {
        return CallApi('categories', 'GET', null).then(res => {
            dispatch(fetchAllCategory(res.data));
        });
    }
}
// Actions EDIT GET category
export const actGetCategoryRequest = (id) => {
    return dispatch => {
        return CallApi(`category/${id}`, 'GET', null).then(res => {
            dispatch(actGetCategory(res.data));
        });
    }
}
export const actGetCategory = (category) => {
    return {
        type: Types.CATALOG_EDIT,
        category
    }
}
// Actions POST Add category
export const actAddCategory = (category) => {
    return {
        type: Types.CATALOG_ADD,
        category
    }
}
export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return CallApi('categories', 'POST', category).then(res => {
            dispatch(actAddCategory(res.data));
        });
    }
}
// Actions PUT update category
export const actUpdateCategory = (category) => {
    return {
        type: Types.CATALOG_SAVE,
        category
    }
}
export const actUpdateCategoryRequest = (category) => {
    return dispatch => {
        return CallApi(`category/${category.categoryID}`, 'PUT', category).then(res => {
            dispatch(actUpdateCategory(res.data));
        });
    }
}
// DELETE request for category
export const actDeleteCategoryRequest = (id) => {
    return dispatch => {
        return CallApi(`category/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteCategory(id))
        })
    }
}
export const actDeleteCategory = (id) => {
    return {
        type: Types.CATALOG_DELETE,
        id
    }
}
