var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')



/* GET restaurants listing. */
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

router.get('/restaurants/new', function (req, res) {
  const RestaurantId = req.params.RestaurantId
  Restaurant.findById(RestaurantId)
    .then((restaurant) => {
      res.render('restaurants/new', {
        restaurant,
      })
    })
    .catch((error) => {
      console.log(error)
    })
})
// router.get('/restaurants/:restaurantId/:name/new/', (req, res) => {
//   const RestaurantId = req.params.RestaurantId
//   const name = req.params.name
//   res.render('restaurant/new')
// })

module.exports = router;