let initialState = {
  myPost: ["It is me", "hello world"],
  b: "World",
  data: {
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
    default:
      return state;
  }
};

export default MyPageReducer;
