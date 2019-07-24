import * as Types from '../../constants/actionTypes';
var initialState = {};

const orderByID = (state = initialState , action) => {
    switch(action.type){
        case Types.GET_ORDER_BY_ID:
            return action.order;
        default: 
            return state;

    }
}

export default orderByID;