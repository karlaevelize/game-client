import api from "../../api";

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        console.log("hello");
        dispatch(saveAccessToken(data.jwt));
        // dispatch(userLoggedIn(token, profile));
      })
      .catch(err => console.log("err", err));
  };
}

// An action creator
export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function userLoggedIn(token, profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { token: token, profile: profile }
  };
}
