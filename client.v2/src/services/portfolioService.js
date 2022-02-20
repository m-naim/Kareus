import http from './http.js';


function getAll() {
  return http.get(`/api/v1/portfolios/`);
}

function getStocksNameByName(name) {
  return http.get(`/api/v1/stocks/search/${name}`);
}

function get(portfolioName='curent') {
  return http.get(`/api/v1/portfolio/${portfolioName}`);
}

function post(state) {
  return http.post('/api/v1/portfolios/', state);
}

const portfolioService = {
  getAll,
  get,
  post,
  getStocksNameByName
};

export default portfolioService;
