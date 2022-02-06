import http from './http.js';


function getAll() {
  return http.get(`/api/v1/portfolios/`);
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
};

export default portfolioService;
