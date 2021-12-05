const config = {
  development: {
    API_URL: 'http://localhost:8000',
  },
  test: {
    API_URL: 'http://localhost:8000',
    amqpUrl: 'amqp://localhost:5672',


  },
  production: {
    API_URL: 'https://ephyon.herokuapp.com',
    amqpUrl: 'amqp://localhost:5672',

  },
};
export const env = process.env.NODE_ENV || 'dev';
console.log(env);
export default config['production'];
