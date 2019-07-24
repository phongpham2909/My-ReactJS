import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";

export const actGetOrdersCustomerReq = (id) => {
    return dispatch => {
        return CallApi(`get-orders-customer/${id}`, 'GET', null).then(res => {
            dispatch(actGetOrdersCustomer(res.data));
        })
    }
}
export const actGetOrdersCustomer = (orders) => {
    return {
        type: Types.FETCH_ALL_ORDERS_CUSTOMER,
        orders
    }
}