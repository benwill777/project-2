// var express = require('express');
// var router = express.Router();
// const Survey = require('../models/Survey')



// /* GET restaurants listing. */
// router.get('/', (req, res) => {
//     Survey.find({})
//         .then((survey) => {
//             res.render('restaurants/survey/:id', {
//                 surveys
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });
// ///

// ///
// router.get('/new', (req, res) => {
//     res.render('restaurants/:id/new/survey')
// })
// router.get('/:id', (req, res) => {
//     Survey.findById(req.params.id).then((survey) => {
//         res.render('restaurants/show', {
//             survey: survey,
//         })
//     })
// })
// ///
// router.post('/', (req, res) => {
//     const newSurvey = new Survey({
//         title: req.body.title,
//         location: req.body.location,
//     })
//     newSurvey.save().then((savesurvey) => {
//         res.redirect('/restaurants/survey')
//     })

// })
// router.get('/:id/edit', (req, res) => {

//     Survey.findById(req.params.id).then((survey) => {
//         survey
//         res.render('restaurants/edit', {
//             id: req.params.id,
//             survey: survey,

//         })
//     })
// })
// router.patch('/:id', (req, res) => {
//     Survey.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         question: req.body.question,
//     }, {
//         new: true
//     }).then((updatedSurvey) => {
//         res.redirect('/restaurants/survey/:id')
//     }).catch((err) => {
//         console.log(err)
//     })
// })
// router.delete('/:id', (req, res) => {
//     Survey.findByIdAndRemove(req.params.id).then(() => {
//         res.redirect('/restaurants/survey/:id')
//     })
// })
// module.exports = router;