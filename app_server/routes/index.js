var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/location');
var ctrlOthers = require('../controllers/other');

//location pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//about pages
router.get('/about', ctrlOthers.about);

module.exports = router;




/* GET home page. */
// var homepageController = function(req,res)
// {
// 	res.render('index',{title:Express});
// };


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
