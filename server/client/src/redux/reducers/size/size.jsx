import * as Types from "../../constants/actionTypes";
var initialState = [];

var findIndex = (sizes, id) => {
    var result = -1;
    sizes.forEach((size, index) => {
        if (size.sizeID === id) {
            result = index;
        }
    });
    return result;
}

const size = (state = initialState, action) => {
    var index = -1;
    var { size, id } = action;
    switch (action.type) {
        case Types.FETCH_ALL_SIZE_CATEGORY:
            state = action.sizes;
            return [...state];
        case Types.CATALOG_DELETE_SIZE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.CATALOG_ADD_SIZE:
            state.push(size);
            return [...state];
        case Types.CATALOG_SAVE_SIZE:
            index = findIndex(state, size.sizeID);
            state[index] = size;
            return [...state];
        default:
            return [...state];
    }
};

export default size;
