import * as Types from "../../constants/actionTypes";

var initialState = [];

var findIndex = (customers, id) => {
  var result = -1;
  customers.forEach((customer, index) => {
    if (customer.customerID === id) {
      result = index;
    }
  });
  return result;
}

const customers = (state = initialState, action) => {
  var index = -1;
  var { customer } = action;
  switch (action.type) {
    case Types.GET_CUSTOMERS:
      state = action.customers;
      return [...state];
    case Types.UPDATE_CUSTOMERS:
      index = findIndex(state, customer.customerID);
      state[index] = customer;
      return [...state];
    default:
      return [...state];
  }
};

export default customers;
