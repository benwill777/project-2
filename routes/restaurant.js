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

router.get('/:RestaurantId', function (req, res) {
  const RestaurantId = req.params.RestaurantId
  Restaurant.findById(RestaurantId)
    .then((restaurant) => {
      res.render('restaurants/show', {
        restaurant,
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

// router.get('/:RestaurantId/', function (req, res) {
//   const RestaurantId = req.params.RestaurantId
//   Restaurant.findById(RestaurantId)
//     .then((restaurant) => {
//       res.render('restaurants/show', {
//         restaurant,
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })


module.exports = router;