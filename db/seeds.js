import {
    Schema
} from 'mongoose';

require('dotenv').config()
const Restaurant = require('../models/Restaurant')
const Survey = require('../models/Survey')
const Question = require('../models/Question')
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})


const muddpie = new Restaurant({
    title: 'ugly',
    location: 'allupunda',
    survey: [{
        name: 'fake survey',
        question: [{
            question: 'how big is you dinner',
            answer: 'hello deez'
        }]
    }]

})

Restaurant.remove().then(() => {
    return Restaurant.insertMany([TonTon, Bennetts, jrcrickets])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})