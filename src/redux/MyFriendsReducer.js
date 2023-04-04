let SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
let SET_PAGE = "SET_PAGE";
let SET_DATA = "SET_DATA";

let initialState = {
  count: 100,
  data: [],
  page: 5,
  totalCount: 1000,
};

let MyFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_DATA:
      return { ...state, data: action.data };
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

export default MyFriendsReducer;
