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