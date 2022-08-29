const config = {
  development: {
    API_URL: 'http://localhost:8000',
    QWANTAPI_URL: 'https://qwantapi.herokuapp.com/',
  },
  test: {
    API_URL: 'http://localhost:8000',
    QWANTAPI_URL: 'https://qwantapi.herokuapp.com/',
  },
  production: {
    API_URL: 'https://kareus.herokuapp.com',
    amqpUrl: 'amqp://localhost:5672',
    QWANTAPI_URL: 'https://qwantapi.herokuapp.com/',
  },
};
export const env = process.env.NODE_ENV || 'dev';
console.log(env);
export default config[env];
