import http from './http.js';


function get() {
  return http.get(`/api/v1/predictions`);
}
const predictionService = {
    get,
  };
export default predictionService;