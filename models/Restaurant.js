const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Restaurant = mongoose.model('Restaurant', Schema.RestaurantSchema)

module.exports = Restaurant