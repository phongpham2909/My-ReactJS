import * as Types from '../../constants/actionTypes';

const initialState = {
    name: "",
    status: -1
}

function productFilterTable(state = initialState, action) {
    switch (action.type) {
        case Types.FILTER_TABLE_PRODUCT:
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            }
        default: return state
    }
};

export default productFilterTable