const socketio = require('socket.io');
const app = require('./app');
const job = require('./scheduled/updateStocks');

const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || 'localhost';

job.start();

const server = app.listen(port, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

const io = socketio(server);
io.on('connection', () => {
  console.log('soocket io Connected!');
});
app.set('io', io);
