import * as Types from "../../constants/actionTypes";
var initialState = [];

const productsale = (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_SALE:
      state = action.productsale;
      return [...state];
    default:
      return [...state];
  }
};

export default productsale;
