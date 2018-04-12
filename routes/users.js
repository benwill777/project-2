var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('this should be the restaurants index');
});

module.exports = router;