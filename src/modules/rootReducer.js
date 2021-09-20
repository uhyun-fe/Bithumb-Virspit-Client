import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

// import loginReducer, {loginSaga} from "./loginReducer";

const rootReducer = combineReducers({
   // loginReducer
});

export function* rootSaga() {
   yield all([
      // loginSaga()
   ]);
}

export default rootReducer;
