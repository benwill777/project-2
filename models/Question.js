const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Question = mongoose.model('Question', Schema.QuestionSchema)

module.exports = Question