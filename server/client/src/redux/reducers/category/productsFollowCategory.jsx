import * as Types from "../../constants/actionTypes";
var initialState = [];

const productsFollowCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PRODUCT_FOLLOW_CATEGORY:
            state = action.products;
            return [...state];
        default:
            return [...state];
    }
};

export default productsFollowCategory;
