import * as Types from "../../constants/actionTypes";
var initialState = [];

var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.categoryID === id) {
            result = index;
        }
    });
    return result;
}

const categories = (state = initialState, action) => {
    var index = -1;
    var { category, id } = action;
    switch (action.type) {
        case Types.FETCH_ALL_CATEGORY:
            state = action.categories;
            return [...state];
        case Types.CATALOG_DELETE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.CATALOG_ADD:
            state.push(category);
            return [...state];
        case Types.CATALOG_SAVE:
            index = findIndex(state, category.categoryID);
            state[index] = category;
            return [...state];
        default:
            return [...state];
    }
};

export default categories;
