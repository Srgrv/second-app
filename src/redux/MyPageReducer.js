let initialState = {
  a: "hello",
  b: "World",
};

let MyPageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MyPageReducer;
