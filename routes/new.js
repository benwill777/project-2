var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')



router.get('/restaurants/new', function (req, res) {
    const RestaurantId = req.params.RestaurantId
    Restaurant.findById(RestaurantId)
        .then((restaurant) => {
            res.render('restaurants/', {
                restaurant,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})