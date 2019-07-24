import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";
// Checkout Client
export const actionAddOrder = (order) => {
    return {
        type: Types.ADD_ORDER,
        order
    }
}
export const actionAddOrderRequest = (order) => {
    return dispatch => {
        return CallApi('checkout/orders', 'POST', order).then(res => {
            dispatch(actionAddOrder(res.data));
        })
    }
}
export const actionOrderDetail = (orderdetail) => {
    return {
        type: Types.ADD_ORDER_DETAIL,
        orderdetail
    }
}
export const actionOrderDetailRequest = (orderdetail) => {
    return dispatch => {
        return CallApi('checkout/order-detail', 'POST', orderdetail).then(res => {
            dispatch(actionOrderDetail(res.data));
        })
    }
}

// Order Table admin
export const actionFetchAllOrders = (orders) => {
    return {
        type: Types.FETCH_ALL_ORDER,
        orders
    }
}
export const actionFetchAllOrdersRequest = () => {
    return dispatch => {
        return CallApi('get-all-orders', 'GET', null).then(res => {
            dispatch(actionFetchAllOrders(res.data));
        })
    }
}
// Actions EDIT GET product
export const actGetOrderByIdRequest = (id) => {
    return dispatch => {
        return CallApi(`get-order/${id}`, 'GET', null).then(res => {
            dispatch(actGetOrder(res.data));
        });
    }
}
export const actGetOrder = (order) => {
    return {
        type: Types.GET_ORDER_BY_ID,
        order
    }
}
export const actGetProductsOrderRequest = (id) => {
    return dispatch => {
        return CallApi(`get-order-detail/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductsOrder(res.data));
        })
    }
}
export const actGetProductsOrder = (productsOrder) => {
    return {
        type: Types.GET_PRODUCTS_ORDER,
        productsOrder
    }
}