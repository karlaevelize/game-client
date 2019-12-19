const initialState = {
  jwt: null,
  profile: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/SAVE_ACCESS_TOKEN": {
      return { ...state, accessToken: action.payload };
    }
    case "auth/LOGGED_IN": {
      return action.payload;
    }
    case "auth/LOG_OUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
