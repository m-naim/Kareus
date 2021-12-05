import http from './http.js';


function login(user) {
  return http.post('/login', user);
}

function register(userInfos) {
  return http.post('/register', userInfos);
}

function checkToken(token) {
  return http.getWithToken('/tokenIsValid', token);
}
const authService = {
  login,
  register,
  checkToken,
};

export default authService;
