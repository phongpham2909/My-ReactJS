import * as Types from '../../constants/actionTypes';

const initialState = ''

function productSearch(state = initialState, action) {
    switch (action.type) {
        case Types.SEARCH_PRODUCT:
            return action.keyword
        default: return state
    }
};

export default productSearch