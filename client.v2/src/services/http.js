
import config from '../config.js';

const host = config.API_URL;

async function CheckError(response) {
  const data = await response.json();

  if (response.status >= 200 && response.status <= 299) {
    return data;
  }
  console.log(response.status);
  throw Error(data.msg);
}

function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("authHeader",user)
  if (user && user.token) {
    // for Node.js Express back-end
    return { 'x-auth-token': user.token };
  } else {
    return {};
  }
}

function post(path, body) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors', ...authHeader()},
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors',
  })
    .then(CheckError);
}

function get(path) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors', ...authHeader() },
    method: 'GET',
    mode: 'cors',
  })
    .then(CheckError);
}

function put(path, body) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors', ...authHeader()},
    body: JSON.stringify(body),
    method: 'PUT',
    mode: 'cors',
  })
    .then(CheckError);
}

function deleteReq(path) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors', ...authHeader()},
    method: 'DELETE',
    mode: 'cors',
  })
    .then(CheckError);
}
const http = {
  post,
  get,
  put,
  deleteReq
};

export default http;
