import http from './http.js';


function getAll() {
  return http.get(`/api/v1/portfolios/`);
}

function getStocksNameByName(name) {
  return http.get(`/api/v1/stocks/search/${name}`);
}

function getStocksContains(name) {
  return http.get(`/api/v1/stocks/contains/${name}`);
}

function get(portfolioName='curent') {
  return http.get(`/api/v1/portfolio/${portfolioName}`);
}

function getData(portfolioName='curent') {
  return http.get(`/api/v1/data/portfolio/${portfolioName}`);
}

function post(state) {
  return http.post('/api/v1/portfolios/', state);
}

const portfolioService = {
  getAll,
  get,
  getData,
  post,
  getStocksNameByName,
  getStocksContains
};

export default portfolioService;
