
import config from '../config.js';

const host = config.API_URL;

async function CheckError(response) {
  const data = await response.json();

  if (response.status >= 200 && response.status <= 299) {
    return data;
  }
  // throw Error(data.msg);
  console.log(response.status);
}


function post(path, body) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors',
  })
    .then(CheckError);
}

function get(path) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
    method: 'GET',
    mode: 'cors',
  })
    .then(CheckError);
}

function getWithToken(path, token) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors', 'x-auth-token': token },
    method: 'Post',
    mode: 'cors',
  })
    .then(CheckError);
}

function put(path, body) {
  return fetch(`${host}${path}`, {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
    body: JSON.stringify(body),
    method: 'PUT',
    mode: 'cors',
  })
    .then(CheckError);
}
const http = {
  post,
  get,
  put,
  getWithToken,
};

export default http;
