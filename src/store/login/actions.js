import api from "../../api";

export function login(email, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        console.log("test data", data);
        dispatch(loggedIn(data.jwt, data.email));
      })
      .catch(err => console.log("err", err));
  };
}

export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function loggedIn(jwt, email) {
  return {
    type: "auth/LOGGED_IN",
    payload: { jwt, email }
  };
}
