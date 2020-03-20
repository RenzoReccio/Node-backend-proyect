var express = require('express');
var router = express.Router();
var restOperations = require('../operations/restaurantOperations')
/* GET home page. */
router.post('/restsave', function(req, res, next) {
    console.log(req.body)
    restOperations.addRest(req.body.name, req.body.type)

    res.json({
        'response' : "what happende"
    })
});

 
router.get('/getrest', (req, res) => {
    restOperations.listRest(res)    
})

module.exports = router;