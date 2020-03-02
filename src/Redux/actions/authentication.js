import * as actTypes from "../actionTypes";

export const loginLoading = () => ({
  type: actTypes.LOGIN_LOADING
});

export const loginSuccess = user => ({
  type: actTypes.LOGIN_SUCCESS,
  user
});

export const loginFailed = errMess => ({
  type: actTypes.LOGIN_FAILED,
  errMess
});
