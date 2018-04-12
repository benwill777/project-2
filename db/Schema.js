const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const QuestionSchema = new Schema({
    question: String,
    answer: String
})

const SurveySchema = new Schema({
    name: String,
    question: [QuestionSchema]
})

const RestaurantSchema = new Schema({
    title: String,
    location: String,
    survey: [SurveySchema]
})

module.exports = {
    RestaurantSchema,
    SurveySchema,
    QuestionSchema
}