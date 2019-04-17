import * as Types from '../../constants/actionTypes';
var initialState = {};

const sizeEditing = (state = initialState , action) => {
    switch(action.type){
        case Types.CATALOG_EDIT_SIZE:
            return action.size;
        default: 
            return state;

    }
}

export default sizeEditing;