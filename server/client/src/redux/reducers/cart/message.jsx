import * as Types from "../../constants/actionTypes";
import * as Message from "../../constants/message";
var initialState = Message.MSG_ADD_TO_CART_SUCCESS;


const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.msg;
        default:
            return state;
    }
};

export default message;
