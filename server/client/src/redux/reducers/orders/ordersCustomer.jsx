import * as Types from "../../constants/actionTypes";
var initialState = [];

const ordersCustomer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ALL_ORDERS_CUSTOMER:
      state = action.orders;
      return [...state];
    default:
      return [...state];
  }
};

export default ordersCustomer;
