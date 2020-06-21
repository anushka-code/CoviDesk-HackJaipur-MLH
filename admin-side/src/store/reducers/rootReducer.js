import { combineReducers } from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
