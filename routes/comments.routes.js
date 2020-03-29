var express = require('express');
var router = express.Router();
var controller = require("../controllers/comments.controller")

router.post('/save', controller.saveComment)
router.post('/list' , controller.listbyResturantId)

module.exports = router