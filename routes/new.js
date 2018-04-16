var express = require('express');
var router = express.Router();
const Restaurant = require('../models/Restaurant')



router.get('/views/new', function (req, res) {
    const RestaurantId = req.params.RestaurantId
    Restaurant.findById(RestaurantId)
        .then((survey) => {
            res.render('restaurants/new', {
                survey,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})