import http from './http.js';
import config from '../config.js';

const host = config.API_URL;
const qwantHost= config.QWANTAPI_URL;

function update(id){
    return http.get(`${qwantHost}/api/v1/stock/${id}/`);
}

const stockService={
    update
}


export default stockService;