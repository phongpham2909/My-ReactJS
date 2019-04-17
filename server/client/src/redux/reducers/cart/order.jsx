import * as Types from "../../constants/actionTypes";
var initialState = [];

const order = (state = initialState, action) => {
    var { order, orderdetail } = action;
    switch (action.type) {
        case Types.ADD_ORDER:
            state.push(order);
            return [...state];
        case Types.ADD_ORDER_DETAIL:
            state.push(orderdetail);
            return [...state];
        default:
            return [...state];
    }
};

export default order;
