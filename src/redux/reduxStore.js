import { combineReducers, legacy_createStore as createStore } from "redux";
import MyPageReducer from "./MyPageReducer";

let reducers = combineReducers({
  myPage: MyPageReducer,
});

let store = createStore(reducers);

export default store;
