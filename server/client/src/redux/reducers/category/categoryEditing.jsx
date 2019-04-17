import * as Types from '../../constants/actionTypes';
var initialState = {};

const categoryEditing = (state = initialState , action) => {
    switch(action.type){
        case Types.CATALOG_EDIT:
            return action.category;
        default: 
            return state;

    }
}

export default categoryEditing;