var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')



/* GET users listing. */
router.get('/', function (req, res) {
  Restaurant.find({})
    .then((restaurants) => {
      res.render('restaurants/index', {
        restaurants
      })
    })
    .catch((err) => {
      console.log(err)
    })
});

// SHOW ROUTE //

router.get('/:id')


module.exports = router;