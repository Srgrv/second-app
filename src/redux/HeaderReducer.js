const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export let setUserData = (id, email, login) => {
  return { type: SET_USER_DATA, data: { id, email, login } };
};

export default HeaderReducer;
