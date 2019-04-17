import * as Types from "../../constants/actionTypes";

var initialState = [];

const author = (state = initialState, action) => {
  var { auth } = action;
  switch (action.type) {
    case Types.CHECK_LOGIN_ADMIN:
      state.push(auth);
      return [...state];
    default:
      return [...state];
  }
};

export default author;
