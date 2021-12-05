/* eslint-disable consistent-return */
const express = require('express');

const router = express.Router();


router.get('/test', (req, res) => {
  res.send( "app is up!");
});


module.exports = router;
