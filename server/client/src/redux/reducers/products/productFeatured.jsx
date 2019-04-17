import * as Types from "../../constants/actionTypes";

var initialState = [];

const productFeatured = (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_FEATURED:
      state = action.productfeatured;
      return [...state];
    default:
      return [...state];
  }
};

export default productFeatured;
