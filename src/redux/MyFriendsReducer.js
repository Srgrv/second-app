let SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
let SET_PAGE = "SET_PAGE";
let SET_DATA = "SET_DATA";
let SET_FOLLOWED = "SET_FOLLOWED";
let SET_UNFOLLOWED = "SET_UNFOLLOWED";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

let initialState = {
  count: 100,
  data: [
    {
      id: 1,
      followed: false,
      name: "sergey",
      photos: { small: "../../../../../logo192.png" },
    },
    {
      id: 2,
      followed: true,
      name: "alice",
      photos: { small: "../../../../../logo192.png" },
    },
  ],
  page: 5,
  totalCount: 1000,
  followed: true,
  following: [],
};

let MyFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_DATA:
      return { ...state, data: action.data };
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        following: action.following
          ? [...state.following, action.userId]
          : state.following.filter((id) => id !== action.userId),
      };
    case SET_FOLLOWED:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.userId) {
            console.log("followed");
            return { ...item, followed: true };
          }
          return item;
        }),
      };

    case SET_UNFOLLOWED:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.userId) {
            console.log("unfollowed");
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export let setTotalCount = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};

export let setPage = (page) => {
  return { type: SET_PAGE, page };
};

export let setData = (data) => {
  return { type: SET_DATA, data };
};

export let setFollowed = (userId) => {
  return { type: SET_FOLLOWED, userId };
};

export let setUnfollowed = (userId) => {
  return { type: SET_UNFOLLOWED, userId };
};

export const toggleFollowing = (following, userId) => {
  return { type: TOGGLE_FOLLOWING, following, userId };
};

window.state = initialState;

export default MyFriendsReducer;
