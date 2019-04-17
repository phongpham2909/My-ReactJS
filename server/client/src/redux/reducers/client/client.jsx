import * as Types from "../../constants/actionTypes";

var initialState = [];

const user = (state = initialState, action) => {
  var { user } = action;
  switch (action.type) {
    case Types.REGISTER_USER:
      state.push(user);
      return [...state];
    default:
      return [...state];
  }
};

export default user;
