import {
  loginFailed,
  loginSuccess,
  loginLoading
} from "../actions/authentication";
import { baseUrl, verifyToken } from "../../shared";
import store from "../store";

export const loginEpic = creds => dispatch => {
  dispatch(loginLoading());
  fetch(baseUrl + "users/login", {
    method: "POST",
    body: JSON.stringify(creds),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      const err = new Error(res.status + " : " + res.statusText);
      throw err;
    })
    .then(res => {
      console.log(res.token);
      localStorage.setItem("token",res.token);
      dispatch(loginSuccess(verifyToken(res.token)));
    })
    .catch(err => console.log(err) || dispatch(loginFailed(err.message)));
};

export const signupEpic = info => {
  debugger
  fetch(baseUrl + "users/signup", {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      const err = new Error(res.status + " : " + res.statusText);
      throw err;
    })
    .then(res => {
      console.log(res.token);
      localStorage.setItem("token",res.token);
      store.dispatch(dis => dis(loginSuccess(verifyToken(res.token))));
    })
    .catch(err => console.log(err) || alert(err.message));
};
