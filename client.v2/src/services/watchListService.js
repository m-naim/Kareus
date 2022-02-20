import http from './http.js';

function getAll() {
    return http.get(`/api/v1/watchlists/`);
}
  
function get(name='curent') {
    return http.get(`/api/v1/watchlists/${name}`);
}
  
function add(name) {
    return http.post('/api/v1/watchlists/',{name} );
}
function addStock(payload) {
  return http.put('/api/v1/watchlists/',payload);
}
  
  const watchListService = {
    getAll,
    get,
    add,
    addStock
  };
  
  export default watchListService;