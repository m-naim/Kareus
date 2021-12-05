import http from './http.js';


function getState(userID) {
  if (userID == null || userID === '') throw new Error('user not authentificated');
  return http.get(`/state/${userID}`);
}

function postState(state) {
  return http.post('/state', state);
}

function updateState(state) {
  return http.put('/state', state);
}
const stateService = {
  postState,
  getState,
  updateState,
};

export default stateService;
