import { combineReducers, legacy_createStore as createStore } from "redux";
import MyPageReducer from "./MyPageReducer";
import MyFriendsReducer from "./MyFriendsReducer";
import HeaderReducer from "./HeaderReducer";

let reducers = combineReducers({
  myPage: MyPageReducer,
  myFriends: MyFriendsReducer,
  header: HeaderReducer,
});

let store = createStore(reducers);

export default store;
