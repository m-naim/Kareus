import http from './http.js';


function getAll() {
  return http.get(`/api/v1/portfolios/public`);
}

function getMyPortfolios() {
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

function follow(name) {
  return http.put(`/api/v1/portfolio/follow/${name}`);
}

function post(state) {
  return http.post('/api/v1/portfolios/', state);
}

function add(payload) {
  const body={
    name:payload.name,
    visibility:payload.visibility,
    transactions: [],
    cash_flow: [
      {
        action:'deposit',
        amount:payload.value,
        date: new Date(),
      }
    ],
    allocatio: [],
    last_perfs_update: new Date()
  }
  return http.post('/api/v1/portfolio/', body);
}

function AddTransaction(idPft,sense,ticker,prix,qty,date) {
  const coef="buy"===sense?1:-1;
  const body={
    id:idPft,
    transaction: {
        symbol: ticker,
        date: date,
        price: prix,
        qty:qty*coef,
    },
  }
  return http.put('/api/v1/transaction/portfolio', body);
}

function deletePortfolio(name) {
  return http.deleteReq(`/api/v1/portfolio/delete/${name}`);
}

const portfolioService = {
  getAll,
  get,
  getData,
  post,
  getStocksNameByName,
  getStocksContains,
  add,
  AddTransaction,
  getMyPortfolios,
  follow,
  deletePortfolio
};

export default portfolioService;
