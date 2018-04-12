const mongoose = require('mongoose')
const Schema = require('../db/Schema')

const Survey = mongoose.model('Survey', Schema.SurveySchema)

module.exports = Survey