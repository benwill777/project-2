const mongoose = require('mongoose')
const Schema = require('../db/Schema')

const Restaurant = mongoose.model('Restaurant', Schema.RestaurantSchema)

module.exports = Restaurant