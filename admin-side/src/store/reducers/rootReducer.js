import { combineReducers } from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
