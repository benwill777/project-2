require('dotenv').config()
const Restaurant = require('../models/Restaurant')
const Survey = require('../models/Survey')
const Question = require('../models/Question')
const mongoose = require('mongoose')
const db = mongoose.connection
db.on('open', () => {
    console.log('successful connection with db')
})
db.on('error', (error) => {
    console.log(error)
})
// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})


const muddpie = new Restaurant({
    title: 'Mud Pie',
    location: 'allupunda',
    survey: [{
        name: 'fake survey',
        question: [{
            question: 'how big is you dinner',
            answer: 'hello deez'
        }]
    }]

})
const felinis = new Restaurant({
    title: 'Felinis',
    location: 'africa',
    survey: [{
        name: 'fun survey',
        question: [{
            question: 'how many drinks did you chug',
            answer: 'about hella'
        }]
    }]

})
const theLocal = new Restaurant({
    title: 'The Local',
    location: 'jamaica',
    survey: [{
        name: 'i like this app',
        question: [{
            question: 'how many bugs did you eat',
            answer: 'about five'
        }]
    }]

})
const theYeahBurger = new Restaurant({
    title: 'Yeah Burger',
    location: 'hell',
    survey: [{
        name: 'how trash is our trash',
        question: [{
            question: 'how many times did you return your food',
            answer: 'about 600'
        }]
    }]
})
Restaurant.remove().then(() => {
    return Restaurant.insertMany([muddpie, felinis, theLocal,
        theYeahBurger
    ])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})