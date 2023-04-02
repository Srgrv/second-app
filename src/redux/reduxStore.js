import { combineReducers, legacy_createStore as createStore } from "redux";
import MyPageReducer from "./MyPageReducer";
import MyFriendsReducer from "./MyFriendsReducer";

let reducers = combineReducers({
  myPage: MyPageReducer,
  myFriends: MyFriendsReducer,
});

let store = createStore(reducers);

export default store;
