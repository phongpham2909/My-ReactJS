import * as Types from "../../constants/actionTypes";

var initialState = {};

const adminProfile = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ADMIN_PROFILE:
            return action.info;
        default:
            return state;
    }
};

export default adminProfile;
