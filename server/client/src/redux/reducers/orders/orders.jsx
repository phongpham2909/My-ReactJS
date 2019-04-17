import * as Types from "../../constants/actionTypes";
var initialState = [];

const orders = (state = initialState, action) => {
  //var { orders } = action;
  switch (action.type) {
    case Types.FETCH_ALL_ORDER:
      state = action.orders;
      return [...state];
    default:
      return [...state];
  }
};

export default orders;
