import * as Types from "../../constants/actionTypes";

var initialState = {};

const customer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CUSTOMER:
            return action.customer;
        default:
            return state;
    }
};

export default customer;
