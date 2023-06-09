let CHANGE_INPUT = "CHANGE_INPUT";
let ADD = "ADD";
let SET_USER = "SET_USER";

let initialState = {
  myPost: [],
  input: "",
  user: {
    aboutMe: "Халоу",
    contacts: {
      facebook: "",
      website: "electronic.by",
      vk: "",
      twitter: "https://twitter.com/@sdf",
      instagram: "www.instagram.com/posledni_prorok/",
      youtube: null,
      github: "github.com/zalash333",
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "Ищуууу чесн слово",
    fullName: "Jak Zigil`man",
    userId: 9,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user.jpg?v=0",
    },
  },
};

let MyPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.value };
    case ADD:
      return { ...state, myPost: [...state.myPost, state.input] };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export let changeInput = (value) => {
  return { type: CHANGE_INPUT, value };
};

export let add = () => {
  return { type: ADD };
};

export let setUser = (user) => {
  return { type: SET_USER, user };
};

export default MyPageReducer;
