import * as Types from "../../constants/actionTypes";
var initialState = [];

const productsOrder = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_ORDER:
      state = action.productsOrder;
      return [...state];
    default:
      return [...state];
  }
};

export default productsOrder;
