import config from 'config.js';
import http from './http.js';


const host = config.API_URL;
function getAll() {
    return http.get(`${host}/api/v1/watchlists/`);
}
  
function get(name='curent') {
    return http.get(`${host}/api/v1/watchlists/${name}`);
}
  
function add(name) {
    return http.post(`${host}/api/v1/watchlists/`,{name} );
}
function addStock(payload) {
  return http.put(`${host}/api/v1/watchlists/`,payload);
}
  
  const watchListService = {
    getAll,
    get,
    add,
    addStock
  };
  
  export default watchListService;