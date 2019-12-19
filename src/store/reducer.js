import { combineReducers } from "redux";
import signUpReducer from "./signup/reducer";
import loginReducer from "./login/reducer";
import roomsReducer from "./rooms/reducer";
import authReducer from "./login/reducer";

export default combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  rooms: roomsReducer,
  auth: authReducer
});
