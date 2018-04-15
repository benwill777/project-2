var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('/restaurants', {
    title: ' You Hit FohShow',
  });
});

module.exports = router;