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
  const updatedRestaurant = Restaurant.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      location: req.body.location,
    },

  ).then((updatedRestaurant) => {
    res.redirect('/restaurants')
  }).catch((err) => {
    console.log(err)
  })
})
router.delete('/:id', (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/restaurants')
  })
})
module.exports = router;