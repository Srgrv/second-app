import axios from "axios";

const intance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "6b94c537-c724-4526-abc4-a919bf086fc0",
  },
});

export const userAPI = {
  getUsers(count, page) {
    return intance.get(`users?count=${count}&page=${page}`).then((response) => {
      return response.data;
    });
  },
};

export const followAPI = {
  postFollow(userId) {
    return intance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  deleteUnFollow(userId) {
    return intance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};
