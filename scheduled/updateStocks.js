const cron = require('node-cron');
const { spawn } = require('child_process');

const job = cron.schedule('0 * * * *', () => {
  console.log('running a task every hour');
  let dataToSend;
  // spawn new child process to call the python script
  // const python = spawn('python', ['python_scripts/update_last.py']);
  // collect data from script
  // python.stdout.on('data', (data) => {
  //   console.log('Pipe data from python script ...');
  //   dataToSend = data.toString();
  // });
  // in close event we are sure that stream from child process is closed
  // python.on('close', (code) => {
  //   console.log(`child process close all stdio with code ${code}`);
  //   // send data to browser
  //   console.log(dataToSend);
  // });
});
module.exports = job;
