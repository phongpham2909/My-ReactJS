import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";

// GET ALL List Customers
export const actGetCustomersReq = () => {
    return dispatch => {
        return CallApi(`customers`, 'GET', null).then(res => {
            dispatch(actGetCustomers(res.data));
        })
    }
}
export const actGetCustomers = (customers) => {
    return {
        type: Types.GET_CUSTOMERS,
        customers
    }
}
// Actions GET EDIT Customer
export const actGetCustomerbyID = (id) => {
    return dispatch => {
        return CallApi(`customer/${id}`, 'GET', null).then(res => {
            dispatch(actGetCustomer(res.data));
        });
    }
}
export const actGetCustomer = (customer) => {
    return {
        type: Types.EDIT_CUSTOMERS,
        customer
    }
}
// Actions PUT update customer
export const actUpdateCustomerByID = (customer) => {
    return dispatch => {
        return CallApi(`customer/${customer.customerID}`, 'PUT', customer).then(res => {
            dispatch(actUpdateCustomer(res.data));
        });
    }
}
export const actUpdateCustomer = (customer) => {
    return {
        type: Types.UPDATE_CUSTOMERS,
        customer
    }
}