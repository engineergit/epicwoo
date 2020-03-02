import * as actTypes from "../actionTypes";

export default (
  state = {
    isLoading: false,
    user: null,
    errMess: null
  },
  action
) => {
  switch (action.type) {
    case actTypes.LOGIN_LOADING:
      return { isLoading: true, user: null, errMess: null };
    case actTypes.LOGIN_FAILED:
      return { isLoading: false, user: null, errMess: action.errMess };
    case actTypes.LOGIN_SUCCESS:
      return { isLoading: false, user: action.user, errMess: null };
    default:
      return state;
  }
};
