import { combineReducers } from "redux";
import signUpReducer from "./signup/reducer";
import loginReducer from "./login/reducer";

export default combineReducers({
  signUp: signUpReducer,
  login: loginReducer
});
