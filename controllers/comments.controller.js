var Comment = require('../models/comments.models')

exports.saveComment = (req, res) => {
    if(!req.body.restaurantId && !req.body.username){
        res.status(400).send({
            message : "Body request is empty"
        })
    }

    var comment = new Comment({
        restaurantId : req.body.restaurantId,
        username : req.body.username,
        content :  req.body.content
    })

    comment.save().then( data => {
        res.send(data)
    }).catch( err => {
        res.status(500).send({
            message : err.message || "An error ocurred in the server"
        })
    })
}

exports.listbyResturantId = (req, res) => {
    if(!req.body.restaurantId){
        res.send({
            message : "Body request is empty"
        })
    }

    Comment.find({restaurantId : req.body.restaurantId}).then( data => {
        if(!data){
            res.status(404).send({
                message : "No comments in the restaurant"
            })
        }
    }).catch( err => {
        res.status(500).send({
            message : err.message || "An error ocurred in the server"
        })
    })
}