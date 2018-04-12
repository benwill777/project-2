const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Survey = mongoose.model('Survey', Schema.SurveySchema)

module.exports = Survey