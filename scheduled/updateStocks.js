const cron = require('node-cron');
// const { spawn } = require('child_process');
const rp = require('request-promise');

const job = cron.schedule('* 1 * * *', async () => {
  console.log('pyapi wake up:');
  const res= await rp.get("https://qwantapi.herokuapp.com/health")
  console.log(res)
});
module.exports = job;
