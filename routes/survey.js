var express = require('express');
var router = express.Router();
const Survey = require('../models/Survey')



/* GET restaurants listing. */
router.get('/', function (req, res) {
    Survey.find({})
        .then((surveys) => {
            res.render('restaurants/:restaurantId/survey/', {
                surveys
            })
        })
        .catch((err) => {
            console.log(err)
        })
});