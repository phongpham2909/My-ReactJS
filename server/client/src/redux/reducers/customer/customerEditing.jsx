import * as Types from '../../constants/actionTypes';
var initialState = {};

const customerEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_CUSTOMERS:
            return action.customer;
        default:
            return state;

    }
}

export default customerEditing;