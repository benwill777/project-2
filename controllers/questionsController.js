const express = require('express')
const router = express.Router({
    mergeParams: true
})

const User = require('../models/Restaurant')

router.get('/new', (request, response) => {
    const restaurantId = request.params.restaurantId
    const restaurantsId = request.params.Id
})
Restaurant.findById(restaurantId)
    .then((restaurant) => {
        const store = restaurant.survey.id(restaurantId)

        res.render('restaurants/new', {
            restaurantId,
            surveyId,
            pageTitle: 'New Restaurant'
        })
    })