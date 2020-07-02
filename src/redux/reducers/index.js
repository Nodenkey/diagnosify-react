import { combineReducers } from "redux";
import auth from "./auth";
import dashboard from "./dashboard.reducer";

export default combineReducers({ auth, dashboard});
