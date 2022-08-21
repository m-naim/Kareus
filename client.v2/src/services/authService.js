import http from './http.js';

const register = (username, email, password) => {
  return http.post("/register", {
    displayName:username,
    email,
    password,
    passwordCheck:password
  });
};
const login = (email, password) => {
  return http
    .post("/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      return response;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
