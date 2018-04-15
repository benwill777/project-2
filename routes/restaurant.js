var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')



/* GET restaurants listing. */
router.get('/', (req, res) => {
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
///

///
router.get('/new', (req, res) => {
  res.render('restaurants/new')
})
router.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id).then((restaurant) => {
    res.render('restaurants/show', {
      restaurant: restaurant,
    })
  })
})
///
router.post('/', (req, res) => {
  const newRestaurant = new Restaurant({
    title: req.body.title,
    location: req.body.location,
  })
  newRestaurant.save().then((saverestaurant) => {
    res.redirect('/restaurants')
  })

})
router.get('/:id/edit', (req, res) => {

  Restaurant.findById(req.params.id).then((restaurant) => {
    restaurant
    res.render('restaurants/edit', {
      id: req.params.id,
      restaurant: restaurant,

    })
  })
})
router.patch('/:id', (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    location: req.body,
    location,
  }, {
    new: true
  }).then((updatedRestaurant) => {
    res.redirect(`/users/${updatedRestaurant._id}`)
  }).catch((err) => {
    console.log(err)
  })
})

// router.get('/restaurants/:restaurantId/:name/new/', (req, res) => {
//   const RestaurantId = req.params.RestaurantId
//   const name = req.params.name
//   res.render('restaurant/new')
// })

module.exports = router;