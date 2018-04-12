const mongoose = require('mongoose')
const Schema = require('../db/Schema')

const Question = mongoose.model('Question', Schema.QuestionSchema)

module.exports = Question