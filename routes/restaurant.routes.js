var express = require('express');
var router = express.Router();
var controllerRest = require('../controllers/restaurant.controller')
/* GET home page. */
router.post('/save', controllerRest.save)
router.get('/list', controllerRest.listAll)
router.post('/listrestaurants', controllerRest.listByName)
router.post('/update', controllerRest.searchandUpdate)
router.post('/delete', controllerRest.delete)

module.exports = router;